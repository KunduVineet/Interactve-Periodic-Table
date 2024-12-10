import React from 'react'
import ElectronegativityGraph from "./Electronegativity";
import { electronegativity } from "./PeriodicTable";
import Typewriter from "typewriter-effect";

const Trends = () => {
  return (
    <div>
        <div className="chart-container">
        <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-4 text-center sm:text-left px-4 text-white">
          <Typewriter
            options={{
              strings: ["Electronegativity of Elements"],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h2>{" "}
        <ElectronegativityGraph data={electronegativity} />
      </div>
    </div>
  )
}

export default Trends;