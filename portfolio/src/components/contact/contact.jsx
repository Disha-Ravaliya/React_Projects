import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function ContactForm() {
    const containerRef = useRef(null);
    const svgRef = useRef(null);


    useGSAP(() => {
        const tl = gsap.timeline({ repeat: -1 });


        tl.to('.border-snake', {
            strokeDashoffset: 0,
            duration: 6,
            ease: 'linear',
        }, 0);


        tl.to('.border-snake', { stroke: '#a855f7', duration: 2 }) // Purple
            .to('.border-snake', { stroke: '#f97316', duration: 2 }) // Orange
            .to('.border-snake', { stroke: '#3b82f6', duration: 2 }); // Blue

    }, { scope: containerRef });

    useEffect(() => {
        const card = containerRef.current;
        const svg = svgRef.current;
        if (!card || !svg) return;

        const moveRect = (e) => {
            const rect = card.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            const offsetX = (x - 0.5) * 24;
            const offsetY = (y - 0.5) * 24;

            gsap.to(svg, {
                x: offsetX,
                y: offsetY,
                duration: 0.35,
                ease: 'power3.out',
            });
        };

        const resetRect = () => {
            gsap.to(svg, {
                x: 0,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            });
        };

        card.addEventListener('mousemove', moveRect);
        card.addEventListener('mouseleave', resetRect);

        return () => {
            card.removeEventListener('mousemove', moveRect);
            card.removeEventListener('mouseleave', resetRect);
        };
    }, []);

    return (

        <div ref={containerRef} className="min-h-screen bg-transparent flex items-center justify-center p-4 selection:bg-purple-500/30">


            <div className="relative w-full max-w-2xl bg-[#111116]/90 backdrop-blur-md rounded-2xl p-10 md:p-14 shadow-2xl border border-zinc-900">


                <svg ref={svgRef} className="absolute inset-0 w-full h-full pointer-events-none rounded-2xl">
                    <rect
                        className="border-snake fill-none stroke-purple-500 stroke-[3px]"
                        x="1.5"
                        y="1.5"
                        width="100%"
                        height="100%"
                        rx="16"
                        strokeDasharray="180 2300"
                        strokeDashoffset="2300"
                    />
                </svg>


                <div className="relative z-10">

                    <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-12">
                        Ready to build the <br />
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                            extraordinary?
                        </span>
                    </h2>


                    <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                        <div className="relative group">
                            <input
                                type="text"
                                id="name"
                                placeholder=" "
                                className=" w-full bg-transparent border-b border-zinc-800 focus:border-purple-500 outline-none py-3 text-zinc-200 placeholder-transparent transition-colors duration-300"
                            />
                            <label
                                htmlFor="name"
                                className="absolute left-0 top-3 text-zinc-600 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-16px] peer-focus:text-xs peer-focus:text-purple-400 font-light"
                            >
                                What's your name?
                            </label>
                        </div>

                        <div className="relative group">
                            <input
                                type="email"
                                id="email"
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-zinc-800 focus:border-purple-500 outline-none py-3 text-zinc-200 placeholder-transparent transition-colors duration-300"
                            />
                            <label
                                htmlFor="email"
                                className="absolute left-0 top-3 text-zinc-600 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:top-[-16px] peer-focus:text-xs peer-focus:text-purple-400 font-light"
                            >
                                Your email address?
                            </label>
                        </div>

                        <div className="relative group pt-4">
                            <textarea
                                id="message"
                                rows="3"
                                placeholder=" "
                                className="peer w-full bg-transparent border-b border-zinc-800 focus:border-purple-500 outline-none py-2 text-zinc-200 placeholder-transparent transition-colors duration-300 resize-none"
                            />
                            <label
                                htmlFor="message"
                                className="absolute left-0 top-2 text-zinc-600 transition-all duration-300 pointer-events-none peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:top-[-16px] peer-focus:text-xs peer-focus:text-purple-400 font-light"
                            >
                                Tell me about your project...
                            </label>
                        </div>


                        <div className="flex items-center justify-between pt-8">


                            <div className="flex items-center gap-6 text-zinc-500">
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
                                </a>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
                                </a>
                                <a href="#" className="hover:text-white transition-colors duration-200">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" /></svg>
                                </a>
                            </div>


                            <button className="flex items-center gap-2 bg-white text-black text-sm px-6 py-3 rounded-full font-medium shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] active:scale-95 transition-all duration-300 group">
                                Send Message
                                <svg className="w-4 h-4 fill-none stroke-current stroke-2 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200" viewBox="0 0 24 24">
                                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                                </svg>
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}