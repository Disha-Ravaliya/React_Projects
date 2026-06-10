import { useState } from 'react'
import './App.css'
import LandingPage from './components/LandingPage/LandingPage'
import ElasticSquareGrid from './components/Background/ElasticSquareGrid' // <-- CRITICAL: Ensure this path correctly points to your background component!
import LeetcodeProfile from './components/LeetcodeProfile/LeetcodeProfile'
import MonthDays from './components/monthday/monthdate'
function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0c10] overflow-hidden">

      
      <div className="absolute inset-0 z-0">
        
        <ElasticSquareGrid
          gridSize={80}  
          lineColor="rgba(255, 255, 255, 0.08)"  
          lineWidth={1}  
          interactionRadius={150}
          pullStrength={0.4}
          springFactor={0.05}
          friction={0.8}
        />
      </div>


      <div className="relative z-10 ">
        <LandingPage  />
        <LeetcodeProfile/>
        
      </div>

    </div>
  );
}

export default App;