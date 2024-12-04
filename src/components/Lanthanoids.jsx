import React from 'react';
import { lanthanides } from './PeriodicTable';
import Typewriter from "typewriter-effect";

const Lanthanoids = () => {
    return (
        <div className="text-white mt-6 px-4 sm:px-6 md:px-8">
            {/* Typewriter Effect */}
            <h2 className="text-xl sm:text-3xl md:text-2xl font-bold mb-4 text-center sm:text-left text-white">
                <Typewriter
                    options={{
                        strings: ["Lanthanoids"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </h2>

            {/* Lanthanide Grid Wrapper with Horizontal Scroll */}
            <div className="overflow-x-auto">
                <div className="grid grid-cols-[repeat(15,_minmax(0,_1fr))] gap-2 p-5 min-w-[1200px]">
                    {lanthanides.map((lanthanide) => (
                        <div
                            key={lanthanide.atomicNumber}
                            className="p-4 h-25 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 transform hover:scale-110 hover:shadow-white bg-lanthanide"
                        >
                            <p className="text-sm top-0 left-0 text-white">{lanthanide.atomicNumber}</p>
                            <h2 className="text-sm font-semibold text-black mb-2">{lanthanide.symbol}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Lanthanoids;
