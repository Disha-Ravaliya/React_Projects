import CircularGallery from './CircularGallery';

const PROJECTS_DATA = [
    {
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80',
        text: 'Aether AI'
    },
    {
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
        text: 'Helios VR'
    },
    {
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80',
        text: 'Nova Engine'
    },
    {
        image: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1000&q=80',
        text: 'Prism Audio'
    },
    {
        image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1000&q=80',
        text: 'Krypton Web3'
    },
    {
        image: 'https://images.unsplash.com/photo-1618005198143-e528346d9a50?auto=format&fit=crop&w=1000&q=80',
        text: 'Specter UI'
    }
];

export default function ProjectShowcase() {
    return (
        <div className="relative min-h-screen bg-transparent flex flex-col justify-center items-center p-4 md:p-8 font-jakarta">
            {/* Decorative ambient background glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full filter blur-[120px] pointer-events-none animate-pulse-glow" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/8 rounded-full filter blur-[130px] pointer-events-none animate-pulse-glow" style={{ animationDelay: '3s' }} />

            {/* Main Big Box Container */}
            <div className="w-full max-w-7xl rounded-2xl overflow-hidden glass-card p-2 md:p-4 shadow-2xl relative z-10">
                <div className="px-6 py-5 md:px-10 md:py-8">
                    <h2 className="text-3xl sm:text-5xl font-orbitron font-bold text-white mb-3">Featured Projects</h2>
                    <p className="text-sm text-gray-400 mb-8">A curated showcase of projects built with modern frontend and WebGL techniques.</p>
                </div>
                <div style={{ height: '600px', position: 'relative' }} className="canvas-container rounded-xl overflow-hidden bg-black/40">
                    <CircularGallery
                        bend={1}
                        textColor="#ffffff"
                        borderRadius={0.05}
                        scrollEase={0.05}
                        fontUrl=""
                        font="bold 30px Orbitron"
                        scrollSpeed={2}
                        items={PROJECTS_DATA}
                    />
                </div>
            </div>
        </div>
    );
}