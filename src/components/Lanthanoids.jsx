import React from 'react';
import { lanthanides } from './PeriodicTable';
import Typewriter from "typewriter-effect";


const Lanthanoids = () => {
    return (
        <div className="text-white mt-6">
            <h2 className="text-2xl font-bold mb-4 text-left ml-6 text-yellow-400">
                <Typewriter
                    options={{
                        strings: ["Lanthanoids"],
                        autoStart: true,
                        loop: true,
                        deleteSpeed: 50,
                    }}
                />
            </h2>            <div className="grid grid-cols-[repeat(15,_minmax(0,_1fr))] gap-2 p-5">
                {lanthanides.map((lanthanides) => (
                    <div
                        key={lanthanides.atomicNumber}
                        className={`p-4 h-25 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl 
                            transition-shadow duration-200 transform hover:scale-110 hover:shadow-white bg-lanthanide
                            `}
                    >
                        <p className="text-sm top-0 left-0 text-white">{lanthanides.atomicNumber}</p>
                        <h2 className="text-sm font-semibold text-black mb-2">{lanthanides.symbol}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Lanthanoids;
