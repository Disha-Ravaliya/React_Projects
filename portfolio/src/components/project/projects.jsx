import { useState } from 'react';
import CircularGallery from './CircularGallery';

const PROJECTS_DATA = [
    {
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        text: 'Aether AI',
        description: 'An advanced neural network visualization platform helping researchers trace cognitive pathways in real-time.'
    },
    {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        text: 'Helios VR',
        description: 'A cutting-edge WebXR experience bringing high-fidelity virtual spaces to the browser without external apps.'
    },
    {
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
        text: 'Nova Engine',
        description: 'A lightweight 3D graphics engine designed for mobile browsers, optimizing rendering pipelines for maximum FPS.'
    },
    {
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
        text: 'Prism Audio',
        description: 'Interactive soundscaping tool that maps audio frequencies to dynamic visual geometries.'
    },
    {
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
        text: 'Krypton Web3',
        description: 'A seamless, decentralized dashboard for tracking blockchain assets with real-time mempool analysis.'
    },
    {
        image: 'https://images.unsplash.com/photo-1618005198143-e528346d9a50?auto=format&fit=crop&w=1000&q=80',
        text: 'Specter UI',
        description: 'A sleek, glassmorphic design system focused on performance and seamless micro-interactions.'
    }
];

export default function ProjectShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = PROJECTS_DATA[activeIndex];

    return (
        <div className="relative min-h-screen bg-transparent flex flex-col justify-center items-center px-4 py-20 md:px-8 font-jakarta">

            {/* Main Big Box Container */}
            <div className="w-full max-w-7xl p-2 md:p-4 relative z-10">
                <div className="px-6 py-5 md:px-10 md:py-8 text-center">
                    <h2 className="text-4xl sm:text-6xl font-orbitron font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 mb-4 tracking-tighter drop-shadow-sm">Featured Projects</h2>
                    <p className="text-sm sm:text-base font-jakarta text-zinc-400 mb-8 max-w-2xl mx-auto">A curated showcase of projects built with modern frontend and WebGL techniques.</p>
                </div>
                <div className="canvas-container w-full relative h-[45vh] min-h-[350px] max-h-[550px]">
                    <CircularGallery
                        bend={1}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.05}
                        fontUrl=""
                        font="bold 30px Orbitron"
                        scrollSpeed={2}
                        items={PROJECTS_DATA}
                        showCardTitle={false}
                        onItemSelect={setActiveIndex}
                    />
                </div>
                
                {/* Active Project Details */}
                <div className="mt-8 px-6 py-6 text-center max-w-2xl mx-auto min-h-[140px] flex flex-col justify-center items-center transition-all duration-300">
                    <h3 className="text-2xl sm:text-3xl font-orbitron font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-3 transition-all">
                        {activeProject?.text || 'Project Details'}
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base transition-all">
                        {activeProject?.description || 'Hover or scroll through the gallery to see project details.'}
                    </p>
                </div>
            </div>
        </div>
    );
}