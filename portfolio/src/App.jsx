import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import ElasticSquareGrid from './components/Background/ElasticSquareGrid' // <-- CRITICAL: Ensure this path correctly points to your background component!
import LeetcodeProfile from './components/LeetcodeProfile/LeetcodeProfile'
function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0c10] overflow-hidden">

      {/* 1. BACKGROUND LAYER:
        This div is absolutely positioned (absolute inset-0) to cover the entire viewport.
        It sits furthest back (z-0), serving as the interactive background behind all content.
      */}
      <div className="absolute inset-0 z-0">
        {/*
          THE ELASTIC SQUARE GRID:
          Here we call the grid component and pass the props to make it a visible,
          interactive blue mesh, just as you requested:
          - gridSize: Controls the size of each square.
          - lineColor: Sets the grid color with an alpha channel for subtle visibility (blue shade).
          - lineWidth: Makes the borders distinctly visible (2px).
          - Other props (interactionRadius, pullStrength, etc.) control the elastic animation.
        */}
        <ElasticSquareGrid
          gridSize={80} /* Increased size for fewer nodes (better performance & less clutter) */
          lineColor="rgba(255, 255, 255, 0.08)" /* Sleek, subtle white/grey to match the website's white border theme */
          lineWidth={1} /* 1px thinner border */
          interactionRadius={150}
          pullStrength={0.4}
          springFactor={0.05}
          friction={0.8}
        />
      </div>


      <div className=" relative z-10 pointer-events-none">
        <LandingPage  />
        <LeetcodeProfile/>
      </div>

    </div>
  );
}

export default App;