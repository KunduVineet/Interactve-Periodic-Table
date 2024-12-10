const elements = [
    { name: "Hydrogen", symbol: "H", atomicNumber: 1, type: "Non-metal", electronegativity: 2.20, oxidationStates: ['+1, -1'] },
    { name: "Helium", symbol: "He", atomicNumber: 2, type: "Noble gas", electronegativity: null, oxidationStates: ['0'] },
    { name: "Lithium", symbol: "Li", atomicNumber: 3, type: "Alkali metal", electronegativity: 0.98, oxidationStates: ['+1'] },
    { name: "Beryllium", symbol: "Be", atomicNumber: 4, type: "Alkaline earth metal", electronegativity: 1.57, oxidationStates: [+2] },
    { name: "Boron", symbol: "B", atomicNumber: 5, type: "Metalloid", electronegativity: 2.04, oxidationStates: [+3] },
    { name: "Carbon", symbol: "C", atomicNumber: 6, type: "Non-metal", electronegativity: 2.55, oxidationStates: ['-4, +4, +2'] },
    { name: "Nitrogen", symbol: "N", atomicNumber: 7, type: "Non-metal", electronegativity: 3.04, oxidationStates: ['-3, +3, +5'] },
    { name: "Oxygen", symbol: "O", atomicNumber: 8, type: "Non-metal", electronegativity: 3.44, oxidationStates: [-2] },
    { name: "Fluorine", symbol: "F", atomicNumber: 9, type: "Non-metal", electronegativity: 3.98, oxidationStates: [-1] },
    { name: "Neon", symbol: "Ne", atomicNumber: 10, type: "Noble gas", electronegativity: null, oxidationStates: [0] },
    { name: "Sodium", symbol: "Na", atomicNumber: 11, type: "Alkali metal", electronegativity: 0.93, oxidationStates: [+1] },
    { name: "Magnesium", symbol: "Mg", atomicNumber: 12, type: "Alkaline earth metal", electronegativity: 1.31, oxidationStates: [+2] },
    { name: "Aluminum", symbol: "Al", atomicNumber: 13, type: "Post-transition metal", electronegativity: 1.61, oxidationStates: [+3] },
    { name: "Silicon", symbol: "Si", atomicNumber: 14, type: "Metalloid", electronegativity: 1.90, oxidationStates: ['-4, +4'] },
    { name: "Phosphorus", symbol: "P", atomicNumber: 15, type: "Non-metal", electronegativity: 2.19, oxidationStates: ['-3, +3, +5'] },
    { name: "Sulfur", symbol: "S", atomicNumber: 16, type: "Non-metal", electronegativity: 2.58, oxidationStates: ['-2, +4, +6'] },
    { name: "Chlorine", symbol: "Cl", atomicNumber: 17, type: "Non-metal", electronegativity: 3.16, oxidationStates: ['-1, +1, +3, +5, +7'] },
    { name: "Argon", symbol: "Ar", atomicNumber: 18, type: "Noble gas", electronegativity: null, oxidationStates: [0] },
    { name: "Potassium", symbol: "K", atomicNumber: 19, type: "Alkali metal", electronegativity: 0.82, oxidationStates: [+1] },
    { name: "Calcium", symbol: "Ca", atomicNumber: 20, type: "Alkaline earth metal", electronegativity: 1.00, oxidationStates: [+2] },
    { name: "Scandium", symbol: "Sc", atomicNumber: 21, type: "Transition metal", electronegativity: 1.36, oxidationStates: [+3] },
    { name: "Titanium", symbol: "Ti", atomicNumber: 22, type: "Transition metal", electronegativity: 1.54, oxidationStates: ['+4, +3'] },
    { name: "Vanadium", symbol: "V", atomicNumber: 23, type: "Transition metal", electronegativity: 1.63, oxidationStates: ['+5, +4, +3, +2'] },
    { name: "Chromium", symbol: "Cr", atomicNumber: 24, type: "Transition metal", electronegativity: 1.66, oxidationStates: ['+6, +3, +2'] },
    { name: "Manganese", symbol: "Mn", atomicNumber: 25, type: "Transition metal", electronegativity: 1.55, oxidationStates: ['+7, +4, +2'] },
    { name: "Iron", symbol: "Fe", atomicNumber: 26, type: "Transition metal", electronegativity: 1.83, oxidationStates: ['+3, +2'] },
    { name: "Cobalt", symbol: "Co", atomicNumber: 27, type: "Transition metal", electronegativity: 1.88, oxidationStates: ['+3, +2'] },
    { name: "Nickel", symbol: "Ni", atomicNumber: 28, type: "Transition metal", electronegativity: 1.91, oxidationStates: ['+2, +3'] },
    { name: "Copper", symbol: "Cu", atomicNumber: 29, type: "Transition metal", electronegativity: 1.90, oxidationStates: ['+1, +2'] },
    { name: "Zinc", symbol: "Zn", atomicNumber: 30, type: "Transition metal", electronegativity: 1.65, oxidationStates: [+2] },
    { name: "Gallium", symbol: "Ga", atomicNumber: 31, type: "Post-transition metal", electronegativity: 1.81, oxidationStates: [+3] },
    { name: "Germanium", symbol: "Ge", atomicNumber: 32, type: "Metalloid", electronegativity: 2.01, oxidationStates: ['+4, +2'] },
    { name: "Arsenic", symbol: "As", atomicNumber: 33, type: "Metalloid", electronegativity: 2.18, oxidationStates: ['-3, +3, +5'] },
    { name: "Selenium", symbol: "Se", atomicNumber: 34, type: "Non-metal", electronegativity: 2.55, oxidationStates: ['-2, +4, +6'] },
    { name: "Bromine", symbol: "Br", atomicNumber: 35, type: "Non-metal", electronegativity: 2.96, oxidationStates: ['-1, +1, +5'] },
    { name: "Krypton", symbol: "Kr", atomicNumber: 36, type: "Noble gas", electronegativity: null, oxidationStates: [0] },
    { name: "Rubidium", symbol: "Rb", atomicNumber: 37, type: "Alkali metal", electronegativity: 0.82, oxidationStates: [+1] },
    { name: "Strontium", symbol: "Sr", atomicNumber: 38, type: "Alkaline earth metal", electronegativity: 0.95, oxidationStates: [+2] },
    { name: "Yttrium", symbol: "Y", atomicNumber: 39, type: "Transition metal", electronegativity: 1.22, oxidationStates: [+3] },
    { name: "Zirconium", symbol: "Zr", atomicNumber: 40, type: "Transition metal", electronegativity: 1.33, oxidationStates: [+4] },
    { name: "Niobium", symbol: "Nb", atomicNumber: 41, type: "Transition metal", electronegativity: 1.6, oxidationStates: ['+5, +4, +3'] },
    { name: "Molybdenum", symbol: "Mo", atomicNumber: 42, type: "Transition metal", electronegativity: 2.16, oxidationStates: ['+6, +5, +4, +3, +2'] },
    { name: "Technetium", symbol: "Tc", atomicNumber: 43, type: "Transition metal", electronegativity: 1.9, oxidationStates: ['+7, +4, +3, +2'] },
    { name: "Ruthenium", symbol: "Ru", atomicNumber: 44, type: "Transition metal", electronegativity: 2.2, oxidationStates: ['+4, +3, +2'] },
    { name: "Rhodium", symbol: "Rh", atomicNumber: 45, type: "Transition metal", electronegativity: 2.28, oxidationStates: ['+3, +1'] },
    { name: "Palladium", symbol: "Pd", atomicNumber: 46, type: "Transition metal", electronegativity: 2.20, oxidationStates: ['+2, +4'] },
    { name: "Silver", symbol: "Ag", atomicNumber: 47, type: "Transition metal", electronegativity: 1.93, oxidationStates: [+1] },
    { name: "Cadmium", symbol: "Cd", atomicNumber: 48, type: "Transition metal", electronegativity: 1.69, oxidationStates: [+2] },
    { name: "Indium", symbol: "In", atomicNumber: 49, type: "Post-transition metal", electronegativity: 1.78, oxidationStates: ['+3, +1'] },
    { name: "Tin", symbol: "Sn", atomicNumber: 50, type: "Post-transition metal", electronegativity: 1.96, oxidationStates: ['+4, +2'] },
    { name: "Antimony", symbol: "Sb", atomicNumber: 51, type: "Metalloid", electronegativity: 2.05, oxidationStates: ['-3, +3, +5'] },
    { name: "Tellurium", symbol: "Te", atomicNumber: 52, type: "Metalloid", electronegativity: 2.55, oxidationStates: ['-2, +4, +6'] },
    { name: "Iodine", symbol: "I", atomicNumber: 53, type: "Non-metal", electronegativity: 2.66, oxidationStates: ['-1, +1, +3, +5, +7'] },
    { name: "Xenon", symbol: "Xe", atomicNumber: 54, type: "Noble gas", electronegativity: null, oxidationStates: [0] },
    { name: "Cesium", symbol: "Cs", atomicNumber: 55, type: "Alkali metal", electronegativity: 0.79, oxidationStates: [+1] },
    { name: "Barium", symbol: "Ba", atomicNumber: 56, type: "Alkaline earth metal", electronegativity: 0.89, oxidationStates: [+2] },
    { name: "Lanthanum", symbol: "La", atomicNumber: "57-71", type: "Lanthanide", electronegativity: 1.10, oxidationStates: [+3] },
    { name: "Hafnium", symbol: "Hf", atomicNumber: 72, type: "Transition metal", electronegativity: 1.30, oxidationStates: [+4] },
    { name: "Tantalum", symbol: "Ta", atomicNumber: 73, type: "Transition metal", electronegativity: 1.50, oxidationStates: ['+5, +4'] },
    { name: "Tungsten", symbol: "W", atomicNumber: 74, type: "Transition metal", electronegativity: 2.36, oxidationStates: ['+6, +4, +3, +2'] },
    { name: "Rhenium", symbol: "Re", atomicNumber: 75, type: "Transition metal", electronegativity: 1.9, oxidationStates: ['+7, +6, +5, +4, +3, +2'] },
    { name: "Osmium", symbol: "Os", atomicNumber: 76, type: "Transition metal", electronegativity: 2.2, oxidationStates: ['+4, +3, +2'] },
    { name: "Iridium", symbol: "Ir", atomicNumber: 77, type: "Transition metal", electronegativity: 2.20, oxidationStates: ['+4, +3'] },
    { name: "Platinum", symbol: "Pt", atomicNumber: 78, type: "Transition metal", electronegativity: 2.28, oxidationStates: ['+4, +2'] },
    { name: "Gold", symbol: "Au", atomicNumber: 79, type: "Transition metal", electronegativity: 2.54, oxidationStates: ['+3, +1'] },
    { name: "Mercury", symbol: "Hg", atomicNumber: 80, type: "Transition metal", electronegativity: 2.00, oxidationStates: ['+2, +1'] },
    { name: "Thallium", symbol: "Tl", atomicNumber: 81, type: "Post-transition metal", electronegativity: 1.62, oxidationStates: ['+1, +3'] },
    { name: "Lead", symbol: "Pb", atomicNumber: 82, type: "Post-transition metal", electronegativity: 1.87, oxidationStates: ['+4, +2'] },
    { name: "Bismuth", symbol: "Bi", atomicNumber: 83, type: "Post-transition metal", electronegativity: 2.02, oxidationStates: ['+3, +5, +1, -3'] },
    { name: "Polonium", symbol: "Po", atomicNumber: 84, type: "Metalloid", electronegativity: 2.0, oxidationStates: ['+4, +2'] },
    { name: "Astatine", symbol: "At", atomicNumber: 85, type: "Halogen", electronegativity: 2.2, oxidationStates: ['-1, +1, +3, +5, +7'] },
    { name: "Radon", symbol: "Rn", atomicNumber: 86, type: "Noble gas", electronegativity: null, oxidationStates: [0] },
    { name: "Francium", symbol: "Fr", atomicNumber: 87, type: "Alkali metal", electronegativity: 0.7, oxidationStates: [+1] },
    { name: "Radium", symbol: "Ra", atomicNumber: 88, type: "Alkaline earth metal", electronegativity: 0.90, oxidationStates: [+2] },
    { name: "Actinium", symbol: "Ac", atomicNumber: "89-103", type: "Actinide", electronegativity: 1.1, oxidationStates: [+3] },
    { name: "Rutherfordium", symbol: "Rf", atomicNumber: 104, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+4] },
    { name: "Dubnium", symbol: "Db", atomicNumber: 105, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+5] },
    { name: "Seaborgium", symbol: "Sg", atomicNumber: 106, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+6] },
    { name: "Bohrium", symbol: "Bh", atomicNumber: 107, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+7] },
    { name: "Hassium", symbol: "Hs", atomicNumber: 108, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+8] },
    { name: "Meitnerium", symbol: "Mt", atomicNumber: 109, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+9] },
    { name: "Darmstadtium", symbol: "Ds", atomicNumber: 110, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+10] },
    { name: "Roentgenium", symbol: "Rg", atomicNumber: 111, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+11] },
    { name: "Copernicium", symbol: "Cn", atomicNumber: 112, type: "Transition metal", electronegativity: 1.3, oxidationStates: [+12] },
    { name: "Nihonium", symbol: "Nh", atomicNumber: 113, type: "Post-transition metal", electronegativity: 1.3, oxidationStates: [+13] },
    { name: "Flerovium", symbol: "Fl", atomicNumber: 114, type: "Post-transition metal", electronegativity: 1.3, oxidationStates: [+14] },
    { name: "Moscovium", symbol: "Mc", atomicNumber: 115, type: "Post-transition metal", electronegativity: 1.3, oxidationStates: [+15] },
    { name: "Livermorium", symbol: "Lv", atomicNumber: 116, type: "Post-transition metal", electronegativity: 1.3, oxidationStates: [+16] },
    { name: "Tennessine", symbol: "Ts", atomicNumber: 117, type: "Halogen", electronegativity: 1.3, oxidationStates: [+17] },
    { name: "Oganesson", symbol: "Og", atomicNumber: 118, type: "Noble gas", electronegativity: null, oxidationStates: [0] }
];

export default elements;

// Lanthanides data
export const lanthanides = [
    { atomicNumber: 57, symbol: 'La', name: 'Lanthanum', type: 'Lanthanoid', electronegativity: 1.10, oxidationState: '+3' },
    { atomicNumber: 58, symbol: 'Ce', name: 'Cerium', type: 'Lanthanoid', electronegativity: 1.12, oxidationState: '+3' },
    { atomicNumber: 59, symbol: 'Pr', name: 'Praseodymium', type: 'Lanthanoid', electronegativity: 1.13, oxidationState: '+3' },
    { atomicNumber: 60, symbol: 'Nd', name: 'Neodymium', type: 'Lanthanoid', electronegativity: 1.14, oxidationState: '+3' },
    { atomicNumber: 61, symbol: 'Pm', name: 'Promethium', type: 'Lanthanoid', electronegativity: 1.13, oxidationState: '+3' },
    { atomicNumber: 62, symbol: 'Sm', name: 'Samarium', type: 'Lanthanoid', electronegativity: 1.17, oxidationState: '+3' },
    { atomicNumber: 63, symbol: 'Eu', name: 'Europium', type: 'Lanthanoid', electronegativity: 1.20, oxidationState: '+3' },
    { atomicNumber: 64, symbol: 'Gd', name: 'Gadolinium', type: 'Lanthanoid', electronegativity: 1.20, oxidationState: '+3' },
    { atomicNumber: 65, symbol: 'Tb', name: 'Terbium', type: 'Lanthanoid', electronegativity: 1.17, oxidationState: '+3' },
    { atomicNumber: 66, symbol: 'Dy', name: 'Dysprosium', type: 'Lanthanoid', electronegativity: 1.22, oxidationState: '+3' },
    { atomicNumber: 67, symbol: 'Ho', name: 'Holmium', type: 'Lanthanoid', electronegativity: 1.23, oxidationState: '+3' },
    { atomicNumber: 68, symbol: 'Er', name: 'Erbium', type: 'Lanthanoid', electronegativity: 1.24, oxidationState: '+3' },
    { atomicNumber: 69, symbol: 'Tm', name: 'Thulium', type: 'Lanthanoid', electronegativity: 1.25, oxidationState: '+3' },
    { atomicNumber: 70, symbol: 'Yb', name: 'Ytterbium', type: 'Lanthanoid', electronegativity: 1.10, oxidationState: '+3' },
    { atomicNumber: 71, symbol: 'Lu', name: 'Lutetium', type: 'Lanthanoid', electronegativity: 1.27, oxidationState: '+3' }
];

// Actinides data
export const actinides = [
    { atomicNumber: 89, symbol: 'Ac', name: 'Actinium', type: 'Actinoid', electronegativity: 1.1, oxidationState: '+3' },
    { atomicNumber: 90, symbol: 'Th', name: 'Thorium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+4' },
    { atomicNumber: 91, symbol: 'Pa', name: 'Protactinium', type: 'Actinoid', electronegativity: 1.5, oxidationState: '+5' },
    { atomicNumber: 92, symbol: 'U', name: 'Uranium', type: 'Actinoid', electronegativity: 1.38, oxidationState: '+6' },
    { atomicNumber: 93, symbol: 'Np', name: 'Neptunium', type: 'Actinoid', electronegativity: 1.36, oxidationState: '+5' },
    { atomicNumber: 94, symbol: 'Pu', name: 'Plutonium', type: 'Actinoid', electronegativity: 1.28, oxidationState: '+4' },
    { atomicNumber: 95, symbol: 'Am', name: 'Americium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 96, symbol: 'Cm', name: 'Curium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 97, symbol: 'Bk', name: 'Berkelium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 98, symbol: 'Cf', name: 'Californium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 99, symbol: 'Es', name: 'Einsteinium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 100, symbol: 'Fm', name: 'Fermium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 101, symbol: 'Md', name: 'Mendelevium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 102, symbol: 'No', name: 'Nobelium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' },
    { atomicNumber: 103, symbol: 'Lr', name: 'Lawrencium', type: 'Actinoid', electronegativity: 1.3, oxidationState: '+3' }
];

export const electronegativity = [
    // Period 1
    2.20, null, // H, He
  
    // Period 2
    0.98, 1.57, 2.04, 2.55, 3.04, 3.44, 3.98, null, // Li to Ne
  
    // Period 3
    0.93, 1.31, 1.61, 1.90, 2.19, 2.58, 3.16, null, // Na to Ar
  
    // Period 4
    0.82, 1.00, 1.36, 1.54, 1.63, 1.66, 2.16, 1.90, 2.20, 2.28, 2.20, 1.93, 1.69, 2.02, 2.58, null, // K to Kr
  
    // Period 5
    0.82, 0.95, 1.22, 1.33, 1.60, 1.65, 1.81, 1.78, 1.96, 2.05, 2.10, 2.66, 2.18, 1.93, 2.17, null, // Rb to Xe
  
    // Period 6
    0.79, 0.89, 1.10, 1.12, 1.13, 1.17, 1.20, 1.20, 1.22, 1.23, 1.24, 1.25, 1.10, 2.54, 2.00, null, // Cs to Rn
  
    // Period 7
    0.79, 0.89, null, null, null, null, null, null, null, null, null, null, null, null, null, null, // Fr to Og
  
    // Lanthanides
    1.10, 1.12, 1.13, 1.14, 1.17, 1.20, 1.22, 1.23, 1.25, 1.10, 1.27, 1.30, 1.35, 1.38, 1.41, // La to Lu
  
    // Actinides
    1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, null, null, null, null, // Ac to Lr
  ];
  
