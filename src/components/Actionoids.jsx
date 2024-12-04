import React from "react";
import Typewriter from "typewriter-effect";
import { actinides } from "./PeriodicTable";

const Actinoids = () => {
    return (
        <div className="text-white mt-6">
            {/* Typewriter Effect */}
            <h2 className="text-2xl font-bold mb-4 text-left ml-6 text-yellow-400">
                <Typewriter
                    options={{
                        strings: ["Actinoids"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </h2>

            {/* Actinide Grid */}
            <div className="grid grid-cols-[repeat(15,_minmax(0,_1fr))] gap-2 p-5">
                {actinides.map((actinide) => (
                    <div
                        key={actinide.atomicNumber}
                        className={`p-4 h-25 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl 
                            transition-shadow duration-200 transform hover:scale-110 hover:shadow-white bg-actinide
                            `}
                    >
                        <p className="text-sm top-0 left-0 text-white">{actinide.atomicNumber}</p>
                        <h2 className="text-sm font-semibold text-black mb-2">{actinide.symbol}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Actinoids;
