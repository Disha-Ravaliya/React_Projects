import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const LeetcodeCreature = () => {
  const containerRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const faceGroupRef = useRef(null);
  const bodyRef = useRef(null);

  const boundsRef = useRef({
    leftEye: { x: 0, y: 0 },
    rightEye: { x: 0, y: 0 },
    face: { x: 0, y: 0 },
  });

  const quickToRef = useRef(null);

  useGSAP(
    () => {
      if (
        !leftPupilRef.current ||
        !rightPupilRef.current ||
        !faceGroupRef.current ||
        !containerRef.current ||
        !bodyRef.current
      )
        return;

      quickToRef.current = {
        leftPupilX: gsap.quickTo(leftPupilRef.current, "x", { duration: 0.15, ease: "power2.out" }),
        leftPupilY: gsap.quickTo(leftPupilRef.current, "y", { duration: 0.15, ease: "power2.out" }),
        rightPupilX: gsap.quickTo(rightPupilRef.current, "x", { duration: 0.15, ease: "power2.out" }),
        rightPupilY: gsap.quickTo(rightPupilRef.current, "y", { duration: 0.15, ease: "power2.out" }),
        faceX: gsap.quickTo(faceGroupRef.current, "x", { duration: 0.4, ease: "power2.out" }),
        faceY: gsap.quickTo(faceGroupRef.current, "y", { duration: 0.4, ease: "power2.out" }),
        containerRotY: gsap.quickTo(containerRef.current, "rotationY", { duration: 0.5, ease: "power2.out" }),
        containerRotX: gsap.quickTo(containerRef.current, "rotationX", { duration: 0.5, ease: "power2.out" }),
        bodyBorder: gsap.quickTo(bodyRef.current, "borderColor", { duration: 0.3, ease: "power2.out" }),
      };

      const updateMetrics = () => {
        const leftRect = leftPupilRef.current.getBoundingClientRect();
        const rightRect = rightPupilRef.current.getBoundingClientRect();
        const faceRect = faceGroupRef.current.getBoundingClientRect();

        boundsRef.current = {
          leftEye: { x: leftRect.left + leftRect.width / 2, y: leftRect.top + leftRect.height / 2 },
          rightEye: { x: rightRect.left + rightRect.width / 2, y: rightRect.top + rightRect.height / 2 },
          face: { x: faceRect.left + faceRect.width / 2, y: faceRect.top + faceRect.height / 2 },
        };
      };

      // Delay initial update slightly to ensure DOM is fully painted
      setTimeout(updateMetrics, 100);

      const handleMouseMove = (e) => {
        const q = quickToRef.current;
        const b = boundsRef.current;
        if (!q) return;

        const { clientX: mx, clientY: my } = e;

        // Pupils
        const lAngle = Math.atan2(my - b.leftEye.y, mx - b.leftEye.x);
        q.leftPupilX(Math.cos(lAngle) * 14);
        q.leftPupilY(Math.sin(lAngle) * 14);

        const rAngle = Math.atan2(my - b.rightEye.y, mx - b.rightEye.x);
        q.rightPupilX(Math.cos(rAngle) * 14);
        q.rightPupilY(Math.sin(rAngle) * 14);

        // Face parallax
        const fAngle = Math.atan2(my - b.face.y, mx - b.face.x);
        q.faceX(Math.cos(fAngle) * 10);
        q.faceY(Math.sin(fAngle) * 10);

        // 3D Tilt Container Calculations using Window Center for universally tracking
        const xPercent = (mx - window.innerWidth / 2) / (window.innerWidth / 2);
        const yPercent = (my - window.innerHeight / 2) / (window.innerHeight / 2);

        q.containerRotY(xPercent * 15);
        q.containerRotX(yPercent * -15);

        // Subtle color hue shift based on mouse
        const targetHue = Math.floor(((xPercent + 1) / 2) * 20 + 30); // 30-50 (orange/yellow)
        q.bodyBorder(`hsl(${targetHue}, 100%, 50%)`);
      };

      const handleMouseLeave = () => {
        gsap.to([leftPupilRef.current, rightPupilRef.current, faceGroupRef.current], { x: 0, y: 0, duration: 0.8, ease: "elastic.out(1.2, 0.4)" });
        gsap.to(containerRef.current, { rotationY: 0, rotationX: 0, duration: 0.8, ease: "elastic.out(1.2, 0.4)" });
      };

      window.addEventListener("resize", updateMetrics);
      window.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseleave", handleMouseLeave); // when leaving the whole page

      return () => {
        window.removeEventListener("resize", updateMetrics);
        window.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    { scope: containerRef },
  );

  return (
    <div className="flex items-center justify-center w-full h-full perspective-1000 min-h-[350px]">
      <div
        ref={containerRef}
        className="relative flex items-center justify-center select-none w-full h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* The floating creature body */}
        <div 
          ref={bodyRef}
          className="relative w-80 h-64 sm:w-96 sm:h-72 bg-neutral-900 rounded-[3rem] shadow-[0_0_80px_rgba(255,161,22,0.15)] flex flex-col items-center justify-center animate-[float_3s_ease-in-out_infinite] border-2 border-orange-500/50 backdrop-blur-sm"
        >
          {/* Top accent line */}
          <div className="absolute top-0 w-36 h-1.5 bg-orange-500 rounded-b-full shadow-[0_0_15px_rgba(255,161,22,0.8)]" />

          {/* Antennas / Tech ears */}
          <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-4 h-16 bg-neutral-800 rounded-l-xl border border-r-0 border-orange-500/30 flex items-center justify-center">
             <div className="w-1.5 h-8 bg-orange-500/50 rounded-full" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-4 h-16 bg-neutral-800 rounded-r-xl border border-l-0 border-orange-500/30 flex items-center justify-center">
             <div className="w-1.5 h-8 bg-orange-500/50 rounded-full" />
          </div>

          <div
            ref={faceGroupRef}
            className="relative w-full flex flex-col items-center justify-center"
            style={{ transformStyle: "preserve-3d", transform: "translateZ(40px)" }}
          >
            <div className="flex justify-center gap-10 sm:gap-12 w-full px-10">
              {/* Left Eye */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-neutral-950 rounded-[1.5rem] flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] border border-neutral-800 transform rotate-[-5deg]">
                <div
                  ref={leftPupilRef}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[1rem] flex items-start justify-end p-2 shadow-[0_0_30px_rgba(255,161,22,0.6)]"
                >
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>
              </div>

              {/* Right Eye */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-neutral-950 rounded-[1.5rem] flex items-center justify-center shadow-[inset_0_0_15px_rgba(0,0,0,0.8)] border border-neutral-800 transform rotate-[5deg]">
                <div
                  ref={rightPupilRef}
                  className="relative w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-[1rem] flex items-start justify-end p-2 shadow-[0_0_30px_rgba(255,161,22,0.6)]"
                >
                  <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                </div>
              </div>
            </div>

            {/* Tech cheeks */}
            <div className="flex justify-between w-full px-16 sm:px-20 mt-6 opacity-80">
              <div className="w-5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(255,161,22,0.6)]" />
              <div className="w-5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(255,161,22,0.6)]" />
            </div>

            {/* Mouth */}
            <div className="relative flex justify-center mt-5">
              <div className="w-10 h-3 bg-neutral-950 rounded-full border border-neutral-800" />
            </div>
          </div>

          {/* Bottom Glow */}
          <div className="absolute -bottom-14 w-48 h-8 bg-orange-500/20 rounded-full blur-2xl" />
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
      `,
        }}
      />
    </div>
  );
};

export default LeetcodeCreature;
