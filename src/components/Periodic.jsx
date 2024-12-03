import React from 'react';
import elements from './PeriodicTable';

const Periodic = () => {

    // Define the size of the grid
    const rows = 7;
    const cols = 18;

    // Function to determine if a cell should be empty
    const isEmptyCell = (row, col) => {
        // Add logic for which cells should be empty, e.g., cells where the sum of row and col is even
        return (row === 1 && col === 2) || (row === 1 && col === 3) || (row === 1 && col === 4) ||
            (row === 1 && col === 5) || (row === 1 && col === 6) || (row === 1 && col === 7) ||
            (row === 1 && col === 8) || (row === 1 && col === 9) || (row === 1 && col === 10) ||
            (row === 1 && col === 11) || (row === 1 && col === 12) || (row === 1 && col === 13) ||
            (row === 1 && col === 14) || (row === 1 && col === 15) || (row === 1 && col === 16) ||
            (row === 1 && col === 17) || (row === 2 && col === 3) || (row === 2 && col === 4) ||
            (row === 2 && col === 5) || (row === 2 && col === 6) || (row === 2 && col === 7) ||
            (row === 2 && col === 8) || (row === 2 && col === 9) || (row === 2 && col === 10) ||
            (row === 2 && col === 11) || (row === 2 && col === 12) || (row === 3 && col === 3) ||
            (row === 3 && col === 4) || (row === 3 && col === 5) || (row === 3 && col === 6) ||
            (row === 3 && col === 7) || (row === 3 && col === 8) || (row === 3 && col === 9) ||
            (row === 3 && col === 10) || (row === 3 && col === 11) || (row === 3 && col === 12);
    };
    

    // Render the grid
    let elementIndex = 0; // Index to keep track of elements
    return (
        <div className='text-black'>
            <h1 className='text-center text-2xl font-bold mb-4'>Periodic Table</h1>
            <div className='grid grid-cols-[repeat(18,_minmax(0,_1fr))] grid-rows-7 w-auto gap-2 p-5'>
                {Array.from({ length: rows }).map((_, row) => (
                    Array.from({ length: cols }).map((_, col) => {
                        if (isEmptyCell(row + 1, col + 1)) {
                            return (
                                <div key={`${row}-${col}`} className=''></div>
                            );
                        } else {
                            if (elementIndex < elements.length) {
                                const element = elements[elementIndex];
                                elementIndex++;
                                console.log(`bg-${element.type.toLowerCase().replace(/ /g, '-')}`);
                                return (
                                    <div
                                    key={`${row}-${col}`}
                                    className={`p-4 h-25 border border-gray-300 rounded-lg shadow-lg hover:shadow-xl 
                                               transition-shadow duration-200 transform hover:scale-105
                                                ${element.type.toLowerCase().replace(/ /g, '-') ? `bg-${element.type.toLowerCase().replace(/ /g, '-')}` : 'bg-gray-200'}`}
                                >
                                        <p className='text-sm top-0 left-0 text-gray-600'>{element.atomicNumber}</p>
                                        <h2 className='text-sm font-semibold text-gray-800 mb-2'>{element.symbol}</h2>
                                    </div>
                                );

                            }
                            return (
                                <div key={`${row}-${col}`} className='p-2 border border-gray-300 rounded bg-gray-200'></div>
                            );
                        }
                    })
                ))}
            </div>
        </div>
    );
};

export default Periodic;
