import React, { useRef, useEffect, useCallback, useState } from 'react';
import './Grid.css'; // Add your specific container styles here

const ElasticSquareGrid = ({
    gridSize = 40,
    lineColor = 'rgba(59, 130, 246, 0.6)', // Visible blue shade (blue-500 @ 60%)
    lineWidth = 2,                         // 2px Border visibility
    interactionRadius = 150,
    pullStrength = 0.4,
    springFactor = 0.05,
    friction = 0.8,
    className = '',
    style
}) => {
    const wrapperRef = useRef(null);
    const canvasRef = useRef(null);
    // Control for performance mode - default is true (DPR=1 for reduced load)
    const [performanceMode, setPerformanceMode] = useState(true);

    // Store points and grid dimensions
    const stateRef = useRef({
        points: [],
        cols: 0,
        rows: 0,
        mouse: { x: -1000, y: -1000 }
    });

    const initGrid = useCallback(() => {
        const wrap = wrapperRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const { width, height } = wrap.getBoundingClientRect();
        // Option to reduce DPR for performance - effectively reducing pixels drawn
        const dpr = performanceMode ? 1 : (window.devicePixelRatio || 1);

        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const ctx = canvas.getContext('2d');
        if (ctx) ctx.scale(dpr, dpr);

        // Add padding to rows/cols so grid extends slightly off-screen
        const cols = Math.ceil(width / gridSize) + 2;
        const rows = Math.ceil(height / gridSize) + 2;

        const points = [];

        // Use mutable data approach and allocate array just once per initialization
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const startX = (x - 1) * gridSize;
                const startY = (y - 1) * gridSize;

                points.push({
                    x: startX,
                    y: startY,
                    originX: startX,
                    originY: startY,
                    vx: 0,
                    vy: 0
                });
            }
        }

        stateRef.current = { ...stateRef.current, points, cols, rows };
    }, [gridSize, performanceMode]);

    useEffect(() => {
        let rafId;

        const draw = () => {
            const canvas = canvasRef.current;
            const ctx = canvas?.getContext('2d');
            if (!canvas || !ctx) return;

            const { points, cols, rows, mouse } = stateRef.current;

            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Optimized Physics (Spatial Bounding Box for interaction)
            const boxMinX = mouse.x - interactionRadius;
            const boxMaxX = mouse.x + interactionRadius;
            const boxMinY = mouse.y - interactionRadius;
            const boxMaxY = mouse.y + interactionRadius;

            // Loop and perform only necessary calculations
            for (let i = 0; i < points.length; i++) {
                const p = points[i];

                // Efficiently skip expensive distance check if point is outside bounding box
                if (p.x >= boxMinX && p.x <= boxMaxX && p.y >= boxMinY && p.y <= boxMaxY) {
                    const dx = p.x - mouse.x;
                    const dy = p.y - mouse.y;
                    const distSq = dx * dx + dy * dy; // Avoid Math.sqrt for condition
                    const radiusSq = interactionRadius * interactionRadius;

                    // Apply mouse pull within radius
                    if (distSq < radiusSq) {
                        const dist = Math.sqrt(distSq);
                        const force = (interactionRadius - dist) / interactionRadius;
                        p.vx += (dx / dist) * force * pullStrength;
                        p.vy += (dy / dist) * force * pullStrength;
                    }
                }

                // Spring back to origin (always applicable)
                p.vx += (p.originX - p.x) * springFactor;
                p.vy += (p.originY - p.y) * springFactor;

                // Apply friction
                p.vx *= friction;
                p.vy *= friction;

                // Update position
                p.x += p.vx;
                p.y += p.vy;
            }

            // 2. Draw the continuous grid (separate paths for potentially smoother batching)
            ctx.beginPath();

            // Dynamic Hover Glow Effect!
            let currentStrokeStyle = lineColor;
            if (mouse.x > 0 && mouse.y > 0) {
                const glowRadius = interactionRadius * 1.5; // Glow slightly larger than physical interaction
                const gradient = ctx.createRadialGradient(
                    mouse.x, mouse.y, 0,
                    mouse.x, mouse.y, glowRadius
                );

                // Bright sky blue at the exact center of mouse
                gradient.addColorStop(0, 'rgba(56, 189, 248, 0.8)'); // Tailwind sky-400
                // Fading blue halfway out
                gradient.addColorStop(0.5, 'rgba(56, 189, 248, 0.2)');
                // Returns to the default subtle background color at the edge
                gradient.addColorStop(1, lineColor);

                currentStrokeStyle = gradient;
            }

            ctx.strokeStyle = currentStrokeStyle;
            ctx.lineWidth = lineWidth;

            // Draw Horizontal Lines
            for (let y = 0; y < rows; y++) {
                for (let x = 0; x < cols; x++) {
                    const p = points[y * cols + x];
                    if (x === 0) {
                        ctx.moveTo(p.x, p.y);
                    } else {
                        ctx.lineTo(p.x, p.y);
                    }
                }
            }

            // Draw Vertical Lines
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    const p = points[y * cols + x];
                    if (y === 0) {
                        ctx.moveTo(p.x, p.y);
                    } else {
                        ctx.lineTo(p.x, p.y);
                    }
                }
            }

            ctx.stroke(); // Render all lines together
            rafId = requestAnimationFrame(draw);
        };

        draw();

        // Memory Hygiene: cancel loop on component unmount or state change
        return () => cancelAnimationFrame(rafId);
    }, [interactionRadius, pullStrength, springFactor, friction, lineColor, lineWidth]);

    // Handle Resize & Event Listeners
    useEffect(() => {
        initGrid();

        const handleResize = () => initGrid();
        window.addEventListener('resize', handleResize);

        const handleMouseMove = (e) => {
            const rect = canvasRef.current.getBoundingClientRect();
            stateRef.current.mouse = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };

        const handleMouseLeave = () => {
            // Throw mouse out of bounds to let grid settle
            stateRef.current.mouse = { x: -1000, y: -1000 };
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            // Memory Hygiene: unbind all listeners on unmount
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [initGrid]);

    return (
        <section className={`square-grid ${className}`} style={style}>
            <div ref={wrapperRef} className="square-grid__wrap" style={{ width: '100%', height: '100%', position: 'relative' }}>
                {/* z-index 0 keeps it behind your content */}
                <canvas
                    ref={canvasRef}
                    style={{ position: 'absolute', inset: 0, pointerEvents: 'auto', zIndex: 0 }}
                />


            </div>
        </section>
    );
};

export default ElasticSquareGrid;