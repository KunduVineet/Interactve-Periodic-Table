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
export const meltingPoint = [
    { atomicNumber: 1, name: "Hydrogen", meltingPoint: 14.01, boilingPoint: 20.28 },
    { atomicNumber: 2, name: "Helium", meltingPoint: null, boilingPoint: 4.22 },
    { atomicNumber: 3, name: "Lithium", meltingPoint: 453.65, boilingPoint: 1603 },
    { atomicNumber: 4, name: "Beryllium", meltingPoint: 1560, boilingPoint: 2742 },
    { atomicNumber: 5, name: "Boron", meltingPoint: 2349, boilingPoint: 4200 },
    { atomicNumber: 6, name: "Carbon", meltingPoint: 3823, boilingPoint: 4300 },
    { atomicNumber: 7, name: "Nitrogen", meltingPoint: 63.15, boilingPoint: 77.36 },
    { atomicNumber: 8, name: "Oxygen", meltingPoint: 54.36, boilingPoint: 90.20 },
    { atomicNumber: 9, name: "Fluorine", meltingPoint: 53.53, boilingPoint: 85.03 },
    { atomicNumber: 10, name: "Neon", meltingPoint: 24.56, boilingPoint: 27.07 },
    { atomicNumber: 11, name: "Sodium", meltingPoint: 370.87, boilingPoint: 1156 },
    { atomicNumber: 12, name: "Magnesium", meltingPoint: 923, boilingPoint: 1363 },
    { atomicNumber: 13, name: "Aluminum", meltingPoint: 933.47, boilingPoint: 2792 },
    { atomicNumber: 14, name: "Silicon", meltingPoint: 1687, boilingPoint: 3538 },
    { atomicNumber: 15, name: "Phosphorus", meltingPoint: 317.30, boilingPoint: 553.65 },
    { atomicNumber: 16, name: "Sulfur", meltingPoint: 388.36, boilingPoint: 717.87 },
    { atomicNumber: 17, name: "Chlorine", meltingPoint: 171.65, boilingPoint: 239.11 },
    { atomicNumber: 18, name: "Argon", meltingPoint: 83.81, boilingPoint: 87.30 },
    { atomicNumber: 19, name: "Potassium", meltingPoint: 336.53, boilingPoint: 1032 },
    { atomicNumber: 20, name: "Calcium", meltingPoint: 1115, boilingPoint: 1757 },
    { atomicNumber: 21, name: "Scandium", meltingPoint: 1814, boilingPoint: 3109 },
    { atomicNumber: 22, name: "Titanium", meltingPoint: 1941, boilingPoint: 3560 },
    { atomicNumber: 23, name: "Vanadium", meltingPoint: 2183, boilingPoint: 3680 },
    { atomicNumber: 24, name: "Chromium", meltingPoint: 2180, boilingPoint: 2944 },
    { atomicNumber: 25, name: "Manganese", meltingPoint: 1519, boilingPoint: 2334 },
    { atomicNumber: 26, name: "Iron", meltingPoint: 1811, boilingPoint: 3134 },
    { atomicNumber: 27, name: "Cobalt", meltingPoint: 1768, boilingPoint: 3200 },
    { atomicNumber: 28, name: "Nickel", meltingPoint: 1728, boilingPoint: 3186 },
    { atomicNumber: 29, name: "Copper", meltingPoint: 1357.77, boilingPoint: 2835 },
    { atomicNumber: 30, name: "Zinc", meltingPoint: 692.68, boilingPoint: 1180 },
    { atomicNumber: 31, name: "Gallium", meltingPoint: 302.91, boilingPoint: 2477 },
    { atomicNumber: 32, name: "Germanium", meltingPoint: 1211.40, boilingPoint: 3106 },
    { atomicNumber: 33, name: "Arsenic", meltingPoint: 1090, boilingPoint: 887 },
    { atomicNumber: 34, name: "Selenium", meltingPoint: 494, boilingPoint: 958 },
    { atomicNumber: 35, name: "Bromine", meltingPoint: 265.8, boilingPoint: 332 },
    { atomicNumber: 36, name: "Krypton", meltingPoint: 115.79, boilingPoint: 119.93 },
    { atomicNumber: 37, name: "Rubidium", meltingPoint: 312.46, boilingPoint: 961 },
    { atomicNumber: 38, name: "Strontium", meltingPoint: 1050, boilingPoint: 1655 },
    { atomicNumber: 39, name: "Yttrium", meltingPoint: 1799, boilingPoint: 3609 },
    { atomicNumber: 40, name: "Zirconium", meltingPoint: 2128, boilingPoint: 4682 },
    { atomicNumber: 41, name: "Niobium", meltingPoint: 2750, boilingPoint: 5017 },
    { atomicNumber: 42, name: "Molybdenum", meltingPoint: 2896, boilingPoint: 4912 },
    { atomicNumber: 43, name: "Technetium", meltingPoint: 2430, boilingPoint: 4538 },
    { atomicNumber: 44, name: "Ruthenium", meltingPoint: 2607, boilingPoint: 4423 },
    { atomicNumber: 45, name: "Rhodium", meltingPoint: 2237, boilingPoint: 3968 },
    { atomicNumber: 46, name: "Palladium", meltingPoint: 1828.05, boilingPoint: 3236 },
    { atomicNumber: 47, name: "Silver", meltingPoint: 1234.93, boilingPoint: 2435 },
    { atomicNumber: 48, name: "Cadmium", meltingPoint: 594.22, boilingPoint: 1040 },
    { atomicNumber: 49, name: "Indium", meltingPoint: 429.75, boilingPoint: 2345 },
    { atomicNumber: 50, name: "Tin", meltingPoint: 505.08, boilingPoint: 2875 },
    { atomicNumber: 51, name: "Antimony", meltingPoint: 903.78, boilingPoint: 1860 },
    { atomicNumber: 52, name: "Tellurium", meltingPoint: 722.66, boilingPoint: 1261 },
    { atomicNumber: 53, name: "Iodine", meltingPoint: 386.85, boilingPoint: 457.55 },
    { atomicNumber: 54, name: "Xenon", meltingPoint: 161.36, boilingPoint: 165.03 },
    { atomicNumber: 55, name: "Cesium", meltingPoint: 301.59, boilingPoint: 944 },
    { atomicNumber: 56, name: "Barium", meltingPoint: 1000, boilingPoint: 2170 },
    { atomicNumber: 57, name: "Lanthanum", meltingPoint: 1193, boilingPoint: 3737 },
    { atomicNumber: 58, name: "Cerium", meltingPoint: 1068, boilingPoint: 3716 },
    { atomicNumber: 59, name: "Praseodymium", meltingPoint: 1208, boilingPoint: 3793 },
    { atomicNumber: 60, name: "Neodymium", meltingPoint: 1297, boilingPoint: 3347 },
    { atomicNumber: 61, name: "Promethium", meltingPoint: 1315, boilingPoint: 3273 },
    { atomicNumber: 62, name: "Samarium", meltingPoint: 1345, boilingPoint: 2173 },
    { atomicNumber: 63, name: "Europium", meltingPoint: 1099, boilingPoint: 1802 },
    { atomicNumber: 64, name: "Gadolinium", meltingPoint: 1585, boilingPoint: 3546 },
    { atomicNumber: 65, name: "Terbium", meltingPoint: 1629, boilingPoint: 3503 },
    { atomicNumber: 66, name: "Dysprosium", meltingPoint: 1680, boilingPoint: 2840 },
    { atomicNumber: 67, name: "Holmium", meltingPoint: 1734, boilingPoint: 2993 },
    { atomicNumber: 68, name: "Erbium", meltingPoint: 1802, boilingPoint: 3141 },
    { atomicNumber: 69, name: "Thulium", meltingPoint: 1818, boilingPoint: 2223 },
    { atomicNumber: 70, name: "Ytterbium", meltingPoint: 1097, boilingPoint: 1469 },
    { atomicNumber: 71, name: "Lutetium", meltingPoint: 1925, boilingPoint: 3675 },
    { atomicNumber: 72, name: "Hafnium", meltingPoint: 2506, boilingPoint: 4876 },
    { atomicNumber: 73, name: "Tantalum", meltingPoint: 3290, boilingPoint: 5731 },
    { atomicNumber: 74, name: "Tungsten", meltingPoint: 3695, boilingPoint: 5828 },
    { atomicNumber: 75, name: "Rhenium", meltingPoint: 3459, boilingPoint: 5869 },
    { atomicNumber: 76, name: "Osmium", meltingPoint: 3306, boilingPoint: 5285 },
    { atomicNumber: 77, name: "Iridium", meltingPoint: 2719, boilingPoint: 4701 },
    { atomicNumber: 78, name: "Platinum", meltingPoint: 2041.4, boilingPoint: 4098 },
    { atomicNumber: 79, name: "Gold", meltingPoint: 1337.33, boilingPoint: 3129 },
    { atomicNumber: 80, name: "Mercury", meltingPoint: 234.32, boilingPoint: 629.88 },
    { atomicNumber: 81, name: "Thallium", meltingPoint: 577, boilingPoint: 1746 },
    { atomicNumber: 82, name: "Lead", meltingPoint: 600.61, boilingPoint: 2022 },
    { atomicNumber: 83, name: "Bismuth", meltingPoint: 544.7, boilingPoint: 1837 },
    { atomicNumber: 84, name: "Polonium", meltingPoint: 527, boilingPoint: 1235 },
    { atomicNumber: 85, name: "Astatine", meltingPoint: 575, boilingPoint: 610 },
    { atomicNumber: 86, name: "Radon", meltingPoint: 202, boilingPoint: 211.3 },
    { atomicNumber: 87, name: "Francium", meltingPoint: 300, boilingPoint: 950 },
    { atomicNumber: 88, name: "Radium", meltingPoint: 973, boilingPoint: 2010 },
    { atomicNumber: 89, name: "Actinium", meltingPoint: 1500, boilingPoint: 3500 },
    { atomicNumber: 90, name: "Thorium", meltingPoint: 2115, boilingPoint: 5061 },
    { atomicNumber: 91, name: "Protactinium", meltingPoint: 1841, boilingPoint: 4300 },
    { atomicNumber: 92, name: "Uranium", meltingPoint: 1405.3, boilingPoint: 4404 },
    { atomicNumber: 93, name: "Neptunium", meltingPoint: 917, boilingPoint: 4175 },
    { atomicNumber: 94, name: "Plutonium", meltingPoint: 913, boilingPoint: 3505 },
    { atomicNumber: 95, name: "Americium", meltingPoint: 1449, boilingPoint: 2880 },
    { atomicNumber: 96, name: "Curium", meltingPoint: 1613, boilingPoint: 3383 },
    { atomicNumber: 97, name: "Berkelium", meltingPoint: 1323, boilingPoint: 2900 },
    { atomicNumber: 98, name: "Californium", meltingPoint: 1173, boilingPoint: 1743 },
    { atomicNumber: 99, name: "Einsteinium", meltingPoint: 1133, boilingPoint: null },
    { atomicNumber: 100, name: "Fermium", meltingPoint: 1800, boilingPoint: null },
    { atomicNumber: 101, name: "Mendelevium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 102, name: "Nobelium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 103, name: "Lawrencium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 104, name: "Rutherfordium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 105, name: "Dubnium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 106, name: "Seaborgium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 107, name: "Bohrium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 108, name: "Hassium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 109, name: "Meitnerium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 110, name: "Darmstadtium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 111, name: "Roentgenium", meltingPoint: null, boilingPoint: null },
    { atomicNumber: 112, name: "Copernicium", meltingPoint: "Unknown", boilingPoint: "Unknown" },
    { atomicNumber: 113, name: "Nihonium", meltingPoint: "Unknown", boilingPoint: "Unknown" },
    { atomicNumber: 114, name: "Flerovium", meltingPoint: "Unknown", boilingPoint: "Unknown" },
    { atomicNumber: 115, name: "Moscovium", meltingPoint: "Unknown", boilingPoint: "Unknown" },
    { atomicNumber: 116, name: "Livermorium", meltingPoint: "Unknown", boilingPoint: "Unknown" },
    { atomicNumber: 117, name: "Tennessine", meltingPoint: "Unknown", boilingPoint: "Unknown" },
    { atomicNumber: 118, name: "Oganesson", meltingPoint: "Unknown", boilingPoint: "Unknown" }
];
export const ionizationData = [
    { atomicNumber: 1, name: 'Hydrogen', ionizationEnergies: [13.6, 0, 0, 0] },
    { atomicNumber: 2, name: 'Helium', ionizationEnergies: [24.6, 54.4, 0, 0] },
    { atomicNumber: 3, name: 'Lithium', ionizationEnergies: [5.4, 75.6, 122, 200] },
    { atomicNumber: 4, name: 'Beryllium', ionizationEnergies: [9.3, 18.2, 246, 450] },
    { atomicNumber: 5, name: 'Boron', ionizationEnergies: [8.3, 25.9, 40.1, 63.5] },
    { atomicNumber: 6, name: 'Carbon', ionizationEnergies: [11.3, 24.4, 47.2, 71.6] },
    { atomicNumber: 7, name: 'Nitrogen', ionizationEnergies: [14.5, 29.6, 47.1, 65.2] },
    { atomicNumber: 8, name: 'Oxygen', ionizationEnergies: [13.6, 35.1, 52.0, 71.0] },
    { atomicNumber: 9, name: 'Fluorine', ionizationEnergies: [17.4, 34.8, 50.0, 70.0] },
    { atomicNumber: 10, name: 'Neon', ionizationEnergies: [21.6, 40.0, 60.0, 80.0] },
    { atomicNumber: 11, name: 'Sodium', ionizationEnergies: [5.1, 47.3, 71.6, 99.0] },
    { atomicNumber: 12, name: 'Magnesium', ionizationEnergies: [7.6, 15.0, 75.6, 112.0] },
    { atomicNumber: 13, name: 'Aluminum', ionizationEnergies: [5.99, 18.9, 28.4, 48.4] },
    { atomicNumber: 14, name: 'Silicon', ionizationEnergies: [8.15, 16.3, 33.5, 56.0] },
    { atomicNumber: 15, name: 'Phosphorus', ionizationEnergies: [10.5, 19.8, 32.0, 50.0] },
    { atomicNumber: 16, name: 'Sulfur', ionizationEnergies: [10.4, 23.3, 34.3, 56.0] },
    { atomicNumber: 17, name: 'Chlorine', ionizationEnergies: [12.97, 24.98, 38.5, 61.0] },
    { atomicNumber: 18, name: 'Argon', ionizationEnergies: [15.8, 27.7, 40.0, 63.0] },
    { atomicNumber: 19, name: 'Potassium', ionizationEnergies: [4.34, 23.3, 34.0, 48.0] },
    { atomicNumber: 20, name: 'Calcium', ionizationEnergies: [6.1, 11.9, 50.0, 70.0] },
    { atomicNumber: 21, name: 'Scandium', ionizationEnergies: [6.56, 12.9, 26.4, 50.0] },
    { atomicNumber: 22, name: 'Titanium', ionizationEnergies: [6.82, 13.6, 27.0, 54.3] },
    { atomicNumber: 23, name: 'Vanadium', ionizationEnergies: [6.74, 15.0, 30.0, 55.0] },
    { atomicNumber: 24, name: 'Chromium', ionizationEnergies: [6.76, 16.2, 29.0, 58.0] },
    { atomicNumber: 25, name: 'Manganese', ionizationEnergies: [7.43, 15.0, 30.0, 60.0] },
    { atomicNumber: 26, name: 'Iron', ionizationEnergies: [7.87, 16.2, 30.0, 60.0] },
    { atomicNumber: 27, name: 'Cobalt', ionizationEnergies: [7.88, 17.0, 31.0, 62.0] },
    { atomicNumber: 28, name: 'Nickel', ionizationEnergies: [7.63, 18.2, 32.0, 64.0] },
    { atomicNumber: 29, name: 'Copper', ionizationEnergies: [7.72, 20.3, 38.5, 68.0] },
    { atomicNumber: 30, name: 'Zinc', ionizationEnergies: [9.39, 17.9, 36.0, 72.0] },
    { atomicNumber: 31, name: 'Gallium', ionizationEnergies: [5.99, 18.8, 30.0, 55.0] },
    { atomicNumber: 32, name: 'Germanium', ionizationEnergies: [7.9, 15.5, 34.0, 58.0] },
    { atomicNumber: 33, name: 'Arsenic', ionizationEnergies: [9.8, 20.0, 34.0, 60.0] },
    { atomicNumber: 34, name: 'Selenium', ionizationEnergies: [9.8, 21.1, 34.5, 62.0] },
    { atomicNumber: 35, name: 'Bromine', ionizationEnergies: [11.8, 23.5, 39.1, 63.0] },
    { atomicNumber: 36, name: 'Krypton', ionizationEnergies: [14.0, 24.9, 40.0, 62.0] },
    { atomicNumber: 37, name: 'Rubidium', ionizationEnergies: [4.18, 26.0, 39.0, 58.0] },
    { atomicNumber: 38, name: 'Strontium', ionizationEnergies: [5.7, 11.0, 48.0, 68.0] },
    { atomicNumber: 39, name: 'Yttrium', ionizationEnergies: [6.2, 14.0, 28.0, 52.0] },
    { atomicNumber: 40, name: 'Zirconium', ionizationEnergies: [6.63, 13.1, 28.5, 53.0] },
    { atomicNumber: 41, name: 'Niobium', ionizationEnergies: [6.76, 14.0, 29.2, 54.0] },
    { atomicNumber: 42, name: 'Molybdenum', ionizationEnergies: [7.10, 15.0, 30.5, 56.0] },
    { atomicNumber: 43, name: 'Technetium', ionizationEnergies: [7.28, 15.6, 32.1, 57.0] },
    { atomicNumber: 44, name: 'Ruthenium', ionizationEnergies: [7.37, 16.0, 32.4, 58.0] },
    { atomicNumber: 45, name: 'Rhodium', ionizationEnergies: [7.46, 16.6, 33.0, 60.0] },
    { atomicNumber: 46, name: 'Palladium', ionizationEnergies: [8.34, 18.3, 35.0, 62.0] },
    { atomicNumber: 47, name: 'Silver', ionizationEnergies: [7.57, 19.0, 38.0, 68.0] },
    { atomicNumber: 48, name: 'Cadmium', ionizationEnergies: [8.99, 17.9, 38.0, 70.0] },
    { atomicNumber: 49, name: 'Indium', ionizationEnergies: [5.79, 17.4, 30.2, 52.0] },
    { atomicNumber: 50, name: 'Tin', ionizationEnergies: [7.3, 14.0, 31.0, 56.0] },
    { atomicNumber: 51, name: 'Antimony', ionizationEnergies: [8.6, 18.0, 33.0, 58.0] },
    { atomicNumber: 52, name: 'Tellurium', ionizationEnergies: [9.0, 19.0, 34.0, 60.0] },
    { atomicNumber: 53, name: 'Iodine', ionizationEnergies: [10.4, 20.6, 35.5, 62.0] },
    { atomicNumber: 54, name: 'Xenon', ionizationEnergies: [12.1, 22.5, 39.0, 62.0] },
    { atomicNumber: 55, name: 'Cesium', ionizationEnergies: [3.89, 23.6, 35.0, 55.0] },
    { atomicNumber: 56, name: 'Barium', ionizationEnergies: [5.2, 10.0, 45.0, 65.0] },
    { atomicNumber: 57, name: 'Lanthanum', ionizationEnergies: [5.576, 10.1, 35.6, 55.0] },
    { atomicNumber: 58, name: 'Cerium (Ce)', ionizationEnergies: [5.538, 10.646, 20.49, 40.31] },
    { atomicNumber: 59, name: 'Praseodymium (Pr)', ionizationEnergies: [5.473, 10.526, 20.2, 40.4] },
    { atomicNumber: 60, name: 'Neodymium (Nd)', ionizationEnergies: [5.525, 10.474, 20.4, 40.8] },
    { atomicNumber: 61, name: 'Promethium (Pm)', ionizationEnergies: [5.582, 10.521, 20.9, 42.1] },
    { atomicNumber: 62, name: 'Samarium (Sm)', ionizationEnergies: [5.643, 10.850, 21.5, 42.3] },
    { atomicNumber: 63, name: 'Europium (Eu)', ionizationEnergies: [5.670, 10.889, 21.2, 41.7] },
    { atomicNumber: 64, name: 'Gadolinium (Gd)', ionizationEnergies: [6.150, 12.16, 24.0, 48.2] },
    { atomicNumber: 65, name: 'Terbium (Tb)', ionizationEnergies: [5.863, 10.833, 22.0, 44.8] },
    { atomicNumber: 66, name: 'Dysprosium (Dy)', ionizationEnergies: [5.938, 11.139, 22.5, 45.5] },
    { atomicNumber: 67, name: 'Holmium (Ho)', ionizationEnergies: [6.020, 11.331, 22.9, 46.0] },
    { atomicNumber: 68, name: 'Erbium (Er)', ionizationEnergies: [5.736, 10.953, 22.0, 45.1] },
    { atomicNumber: 69, name: 'Thulium (Tm)', ionizationEnergies: [6.183, 11.457, 23.4, 46.6] },
    { atomicNumber: 70, name: 'Ytterbium (Yb)', ionizationEnergies: [6.254, 11.480, 23.7, 47.0] },
    { atomicNumber: 71, name: 'Lutetium (Lu)', ionizationEnergies: [5.426, 10.154, 21.4, 43.5] },
    { atomicNumber: 72, name: 'Hafnium (Hf)', ionizationEnergies: [6.825, 13.1, 25.0, 50.0] },
    { atomicNumber: 73, name: 'Tantalum (Ta)', ionizationEnergies: [7.549, 14.0, 25.5, 51.0] },
    { atomicNumber: 74, name: 'Tungsten (W)', ionizationEnergies: [7.978, 14.1, 26.0, 52.0] },
    { atomicNumber: 75, name: 'Rhenium (Re)', ionizationEnergies: [7.833, 14.2, 26.1, 53.0] },
    { atomicNumber: 76, name: 'Osmium (Os)', ionizationEnergies: [8.438, 15.2, 27.0, 54.0] },
    { atomicNumber: 77, name: 'Iridium (Ir)', ionizationEnergies: [8.967, 15.8, 28.0, 56.0] },
    { atomicNumber: 78, name: 'Platinum (Pt)', ionizationEnergies: [8.958, 15.6, 27.0, 55.0] },
    { atomicNumber: 79, name: 'Gold (Au)', ionizationEnergies: [9.225, 18.0, 30.0, 58.0] },
    { atomicNumber: 80, name: 'Mercury (Hg)', ionizationEnergies: [10.437, 18.6, 30.5, 60.0] },
    { atomicNumber: 81, name: 'Thallium (Tl)', ionizationEnergies: [6.108, 13.4, 24.0, 50.0] },
    { atomicNumber: 82, name: 'Lead (Pb)', ionizationEnergies: [7.416, 14.0, 25.0, 51.0] },
    { atomicNumber: 83, name: 'Bismuth (Bi)', ionizationEnergies: [7.289, 13.9, 24.0, 50.0] },
    { atomicNumber: 84, name: 'Polonium (Po)', ionizationEnergies: [8.417, 14.4, 25.5, 51.5] },
    { atomicNumber: 85, name: 'Astatine (At)', ionizationEnergies: [9.298, 15.2, 27.0, 52.0] },
    { atomicNumber: 86, name: 'Radon (Rn)', ionizationEnergies: [10.748, 17.9, 30.0, 60.0] },
    { atomicNumber: 87, name: 'Francium (Fr)', ionizationEnergies: [4.070, 10.0, 18.0, 35.0] },
    { atomicNumber: 88, name: 'Radium (Ra)', ionizationEnergies: [5.279, 12.0, 20.5, 40.0] },
    { atomicNumber: 89, name: 'Actinium (Ac)', ionizationEnergies: [5.17, 12.3, 21.0, 42.0] },
    { atomicNumber: 90, name: 'Thorium (Th)', ionizationEnergies: [6.306, 13.7, 24.0, 48.0] },
    { atomicNumber: 91, name: 'Protactinium (Pa)', ionizationEnergies: [5.889, 13.0, 22.0, 44.0] },
    { atomicNumber: 92, name: 'Uranium (U)', ionizationEnergies: [6.194, 14.0, 24.0, 48.0] },
    { atomicNumber: 93, name: 'Neptunium (Np)', ionizationEnergies: [6.265, 14.3, 25.0, 50.0] },
    { atomicNumber: 94, name: 'Plutonium (Pu)', ionizationEnergies: [6.060, 14.2, 25.0, 50.0] },
    { atomicNumber: 95, name: 'Americium (Am)', ionizationEnergies: [5.973, 13.9, 24.0, 48.0] },
    { atomicNumber: 96, name: 'Curium (Cm)', ionizationEnergies: [6.030, 14.0, 25.0, 49.0] },
    { atomicNumber: 97, name: 'Berkelium (Bk)', ionizationEnergies: [6.160, 14.4, 26.0, 50.0] },
    { atomicNumber: 98, name: 'Californium (Cf)', ionizationEnergies: [6.280, 14.5, 26.0, 51.0] },
    { atomicNumber: 99, name: 'Einsteinium (Es)', ionizationEnergies: [6.420, 14.7, 27.0, 52.0] },
    { atomicNumber: 100, name: 'Fermium (Fm)', ionizationEnergies: [6.440, 14.8, 27.0, 53.0] },
    { atomicNumber: 101, name: 'Mendelevium (Md)', ionizationEnergies: [6.570, 15.0, 28.0, 54.0] },
    { atomicNumber: 102, name: 'Nobelium (No)', ionizationEnergies: [6.580, 15.1, 28.0, 55.0] },
    { atomicNumber: 103, name: 'Lawrencium (Lr)', ionizationEnergies: [6.870, 15.3, 29.0, 56.0] },
    { atomicNumber: 104, name: 'Rutherfordium (Rf)', ionizationEnergies: [6.800, 15.4, 29.0, 57.0] },
    { atomicNumber: 105, name: 'Dubnium (Db)', ionizationEnergies: [7.000, 15.6, 30.0, 58.0] },
    { atomicNumber: 106, name: 'Seaborgium (Sg)', ionizationEnergies: [7.200, 15.8, 31.0, 59.0] },
    { atomicNumber: 107, name: 'Bohrium (Bh)', ionizationEnergies: [7.500, 16.0, 32.0, 60.0] },
    { atomicNumber: 108, name: 'Hassium (Hs)', ionizationEnergies: [7.600, 16.2, 33.0, 61.0] },
    { atomicNumber: 109, name: 'Meitnerium (Mt)', ionizationEnergies: [7.900, 16.4, 34.0, 62.0] },
    { atomicNumber: 110, name: 'Darmstadtium (Ds)', ionizationEnergies: [8.100, 16.6, 35.0, 63.0] },
    { atomicNumber: 111, name: 'Roentgenium (Rg)', ionizationEnergies: [8.400, 16.8, 36.0, 64.0] },
    { atomicNumber: 112, name: 'Copernicium (Cn)', ionizationEnergies: [8.600, 17.0, 37.0, 65.0] },
    { atomicNumber: 113, name: 'Nihonium (Nh)', ionizationEnergies: [8.800, 17.2, 38.0, 66.0] },
    { atomicNumber: 114, name: 'Flerovium (Fl)', ionizationEnergies: [9.000, 17.4, 39.0, 67.0] },
    { atomicNumber: 115, name: 'Moscovium (Mc)', ionizationEnergies: [9.200, 17.6, 40.0, 68.0] },
    { atomicNumber: 116, name: 'Livermorium (Lv)', ionizationEnergies: [9.400, 17.8, 41.0, 69.0] },
    { atomicNumber: 117, name: 'Tennessine (Ts)', ionizationEnergies: [9.600, 18.0, 42.0, 70.0] },
    { atomicNumber: 118, name: 'Oganesson (Og)', ionizationEnergies: [9.800, 18.2, 43.0, 71.0] }
];
export const atomicRadii = [
    { element: "H", atomicNumber: 1, radius: 53 },
    { element: "He", atomicNumber: 2, radius: 31 },
    { element: "Li", atomicNumber: 3, radius: 167 },
    { element: "Be", atomicNumber: 4, radius: 112 },
    { element: "B", atomicNumber: 5, radius: 87 },
    { element: "C", atomicNumber: 6, radius: 67 },
    { element: "N", atomicNumber: 7, radius: 56 },
    { element: "O", atomicNumber: 8, radius: 48 },
    { element: "F", atomicNumber: 9, radius: 42 },
    { element: "Ne", atomicNumber: 10, radius: 38 },
    { element: "Na", atomicNumber: 11, radius: 190 },
    { element: "Mg", atomicNumber: 12, radius: 145 },
    { element: "Al", atomicNumber: 13, radius: 118 },
    { element: "Si", atomicNumber: 14, radius: 111 },
    { element: "P", atomicNumber: 15, radius: 98 },
    { element: "S", atomicNumber: 16, radius: 88 },
    { element: "Cl", atomicNumber: 17, radius: 79 },
    { element: "Ar", atomicNumber: 18, radius: 71 },
    { element: "K", atomicNumber: 19, radius: 243 },
    { element: "Ca", atomicNumber: 20, radius: 194 },
    { element: "Sc", atomicNumber: 21, radius: 184 },
    { element: "Ti", atomicNumber: 22, radius: 176 },
    { element: "V", atomicNumber: 23, radius: 171 },
    { element: "Cr", atomicNumber: 24, radius: 166 },
    { element: "Mn", atomicNumber: 25, radius: 161 },
    { element: "Fe", atomicNumber: 26, radius: 156 },
    { element: "Co", atomicNumber: 27, radius: 152 },
    { element: "Ni", atomicNumber: 28, radius: 149 },
    { element: "Cu", atomicNumber: 29, radius: 145 },
    { element: "Zn", atomicNumber: 30, radius: 142 },
    { element: "Ga", atomicNumber: 31, radius: 136 },
    { element: "Ge", atomicNumber: 32, radius: 125 },
    { element: "As", atomicNumber: 33, radius: 114 },
    { element: "Se", atomicNumber: 34, radius: 103 },
    { element: "Br", atomicNumber: 35, radius: 94 },
    { element: "Kr", atomicNumber: 36, radius: 88 },
    { element: "Rb", atomicNumber: 37, radius: 265 },
    { element: "Sr", atomicNumber: 38, radius: 219 },
    { element: "Y", atomicNumber: 39, radius: 212 },
    { element: "Zr", atomicNumber: 40, radius: 206 },
    { element: "Nb", atomicNumber: 41, radius: 198 },
    { element: "Mo", atomicNumber: 42, radius: 190 },
    { element: "Tc", atomicNumber: 43, radius: 183 },
    { element: "Ru", atomicNumber: 44, radius: 178 },
    { element: "Rh", atomicNumber: 45, radius: 173 },
    { element: "Pd", atomicNumber: 46, radius: 169 },
    { element: "Ag", atomicNumber: 47, radius: 165 },
    { element: "Cd", atomicNumber: 48, radius: 161 },
    { element: "In", atomicNumber: 49, radius: 156 },
    { element: "Sn", atomicNumber: 50, radius: 145 },
    { element: "Sb", atomicNumber: 51, radius: 133 },
    { element: "Te", atomicNumber: 52, radius: 123 },
    { element: "I", atomicNumber: 53, radius: 115 },
    { element: "Xe", atomicNumber: 54, radius: 108 },
    { element: "Cs", atomicNumber: 55, radius: 298 },
    { element: "Ba", atomicNumber: 56, radius: 253 },
    { element: "La", atomicNumber: 57, radius: 195 },
    { element: "Ce", atomicNumber: 58, radius: 185 },
    { element: "Pr", atomicNumber: 59, radius: 247 },
    { element: "Nd", atomicNumber: 60, radius: 206 },
    { element: "Pm", atomicNumber: 61, radius: 205 },
    { element: "Sm", atomicNumber: 62, radius: 238 },
    { element: "Eu", atomicNumber: 63, radius: 231 },
    { element: "Gd", atomicNumber: 64, radius: 233 },
    { element: "Tb", atomicNumber: 65, radius: 225 },
    { element: "Dy", atomicNumber: 66, radius: 228 },
    { element: "Ho", atomicNumber: 67, radius: 226 },
    { element: "Er", atomicNumber: 68, radius: 225 },
    { element: "Tm", atomicNumber: 69, radius: 220 },
    { element: "Yb", atomicNumber: 70, radius: 218 },
    { element: "Lu", atomicNumber: 71, radius: 217 },
    { element: "Hf", atomicNumber: 72, radius: 208 },
    { element: "Ta", atomicNumber: 73, radius: 200 },
    { element: "W", atomicNumber: 74, radius: 193 },
    { element: "Re", atomicNumber: 75, radius: 188 },
    { element: "Os", atomicNumber: 76, radius: 185 },
    { element: "Ir", atomicNumber: 77, radius: 180 },
    { element: "Pt", atomicNumber: 78, radius: 177 },
    { element: "Au", atomicNumber: 79, radius: 174 },
    { element: "Hg", atomicNumber: 80, radius: 171 },
    { element: "Tl", atomicNumber: 81, radius: 156 },
    { element: "Pb", atomicNumber: 82, radius: 154 },
    { element: "Bi", atomicNumber: 83, radius: 143 },
    { element: "Po", atomicNumber: 84, radius: 135 },
    { element: "At", atomicNumber: 85, radius: 127 },
    { element: "Rn", atomicNumber: 86, radius: 120 },
    { element: "Fr", atomicNumber: 87, radius: 348 },
    { element: "Ra", atomicNumber: 88, radius: 283 },
    { element: "Ac", atomicNumber: 89, radius: 195 },
    { element: "Th", atomicNumber: 90, radius: 180 },
    { element: "Pa", atomicNumber: 91, radius: 161 },
    { element: "U", atomicNumber: 92, radius: 175 },
    { element: "Np", atomicNumber: 93, radius: 171 },
    { element: "Pu", atomicNumber: 94, radius: 157 },
    { element: "Am", atomicNumber: 95, radius: 166 },
    { element: "Cm", atomicNumber: 96, radius: 165 },
    { element: "Bk", atomicNumber: 97, radius: 170 },
    { element: "Cf", atomicNumber: 98, radius: 186 },
    { element: "Es", atomicNumber: 99, radius: 186 },
    { element: "Fm", atomicNumber: 100, radius: 200 },
    { element: "Md", atomicNumber: 101, radius: 200 },
    { element: "No", atomicNumber: 102, radius: 200 },
    { element: "Lr", atomicNumber: 103, radius: 200 },
    { element: "Rf", atomicNumber: 104, radius: 157 }, // Rutherfordium
    { element: "Db", atomicNumber: 105, radius: 149 }, // Dubnium
    { element: "Sg", atomicNumber: 106, radius: 143 }, // Seaborgium
    { element: "Bh", atomicNumber: 107, radius: 141 }, // Bohrium
    { element: "Hs", atomicNumber: 108, radius: 134 }, // Hassium
    { element: "Mt", atomicNumber: 109, radius: 129 }, // Meitnerium
    { element: "Ds", atomicNumber: 110, radius: 128 }, // Darmstadtium
    { element: "Rg", atomicNumber: 111, radius: 121 }, // Roentgenium
    { element: "Cn", atomicNumber: 112, radius: 122 }, // Copernicium
    { element: "Nh", atomicNumber: 113, radius: 136 }, // Nihonium
    { element: "Fl", atomicNumber: 114, radius: 143 }, // Flerovium
    { element: "Mc", atomicNumber: 115, radius: 162 }, // Moscovium
    { element: "Lv", atomicNumber: 116, radius: 175 }, // Livermorium
    { element: "Ts", atomicNumber: 117, radius: 165 }, // Tennessine
    { element: "Og", atomicNumber: 118, radius: 157 }, // Oganesson
];

export const quizData = {
    easy: [
        {
            id: 1,
            question: "What is the chemical symbol for Hydrogen?",
            options: ["H", "O", "He", "N"],
            answer: "H"
        },
        {
            id: 2,
            question: "Which element has the atomic number 1?",
            options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
            answer: "Hydrogen"
        },
        {
            id: 3,
            question: "Which element is represented by the symbol 'O'?",
            options: ["Oxygen", "Osmium", "Oganesson", "Opium"],
            answer: "Oxygen"
        },
        {
            id: 4,
            question: "What is the chemical symbol for Helium?",
            options: ["H", "He", "Li", "Be"],
            answer: "He"
        },
        {
            id: 5,
            question: "Which element has the atomic number 2?",
            options: ["Helium", "Hydrogen", "Lithium", "Beryllium"],
            answer: "Helium"
        },
        {
            id: 6,
            question: "Which element is represented by the symbol 'Na'?",
            options: ["Sodium", "Neon", "Nickel", "Noble gas"],
            answer: "Sodium"
        },
        {
            id: 7,
            question: "Which element has the atomic number 3?",
            options: ["Lithium", "Sodium", "Magnesium", "Potassium"],
            answer: "Lithium"
        },
        {
            id: 8,
            question: "What is the chemical symbol for Nitrogen?",
            options: ["N", "Ne", "Na", "Ni"],
            answer: "N"
        },
        {
            id: 9,
            question: "Which element is represented by the symbol 'C'?",
            options: ["Carbon", "Calcium", "Copper", "Chlorine"],
            answer: "Carbon"
        },
        {
            id: 10,
            question: "What is the chemical symbol for Oxygen?",
            options: ["O", "O2", "Ox", "Os"],
            answer: "O"
        },
        {
            id: 11,
            question: "What is the atomic number of Carbon?",
            options: [6, 12, 8, 14],
            answer: 6
        },
        {
            id: 12,
            question: "Which element is represented by the symbol 'Ca'?",
            options: ["Calcium", "Carbon", "Cobalt", "Chromium"],
            answer: "Calcium"
        },
        {
            id: 13,
            question: "What is the chemical symbol for Iron?",
            options: ["Fe", "Ir", "In", "I"],
            answer: "Fe"
        },
        {
            id: 14,
            question: "Which element is represented by the symbol 'Mg'?",
            options: ["Magnesium", "Manganese", "Mercury", "Molybdenum"],
            answer: "Magnesium"
        },
        {
            id: 15,
            question: "Which element has the atomic number 10?",
            options: ["Neon", "Nitrogen", "Noble gas", "Nihonium"],
            answer: "Neon"
        },
        {
            id: 16,
            question: "Which element is represented by the symbol 'P'?",
            options: ["Phosphorus", "Platinum", "Polonium", "Protactinium"],
            answer: "Phosphorus"
        },
        {
            id: 17,
            question: "What is the atomic number of Oxygen?",
            options: [8, 10, 6, 4],
            answer: 8
        },
        {
            id: 18,
            question: "Which element is represented by the symbol 'K'?",
            options: ["Potassium", "Krypton", "Kelvin", "Kali"],
            answer: "Potassium"
        },
        {
            id: 19,
            question: "Which element has the atomic number 12?",
            options: ["Magnesium", "Sodium", "Potassium", "Calcium"],
            answer: "Magnesium"
        },
        {
            id: 20,
            question: "What is the chemical symbol for Neon?",
            options: ["Ne", "Ni", "Na", "N"],
            answer: "Ne"
        },
        {
            id: 21,
            question: "Which element has the atomic number 14?",
            options: ["Silicon", "Carbon", "Oxygen", "Nitrogen"],
            answer: "Silicon"
        },
        {
            id: 22,
            question: "What is the chemical symbol for Copper?",
            options: ["Cu", "Co", "Cr", "Ca"],
            answer: "Cu"
        },
        {
            id: 23,
            question: "What is the atomic number of Nitrogen?",
            options: [7, 6, 8, 9],
            answer: 7
        },
        {
            id: 24,
            question: "Which element has the symbol 'S'?",
            options: ["Sulfur", "Silicon", "Sodium", "Scandium"],
            answer: "Sulfur"
        },
        {
            id: 25,
            question: "Which element has the atomic number 15?",
            options: ["Phosphorus", "Sulfur", "Silicon", "Chlorine"],
            answer: "Phosphorus"
        },
        {
            id: 26,
            question: "What is the chemical symbol for Potassium?",
            options: ["K", "P", "Na", "C"],
            answer: "K"
        },
        {
            id: 27,
            question: "Which element has the symbol 'Cl'?",
            options: ["Chlorine", "Calcium", "Chromium", "Cobalt"],
            answer: "Chlorine"
        },
        {
            id: 28,
            question: "Which element has the atomic number 19?",
            options: ["Potassium", "Calcium", "Magnesium", "Sodium"],
            answer: "Potassium"
        },
        {
            id: 29,
            question: "What is the chemical symbol for Argon?",
            options: ["Ar", "Ag", "Al", "Au"],
            answer: "Ar"
        },
        {
            id: 30,
            question: "Which element is represented by the symbol 'Zn'?",
            options: ["Zinc", "Zirconium", "Zodium", "Zetium"],
            answer: "Zinc"
        },
        {
            id: 31,
            question: "What is the chemical symbol for Hydrogen?",
            options: ["H", "O", "He", "N"],
            answer: "H"
        },
        {
            id: 32,
            question: "Which element has the atomic number 1?",
            options: ["Hydrogen", "Oxygen", "Carbon", "Nitrogen"],
            answer: "Hydrogen"
        },
        {
            id: 33,
            question: "Which element is represented by the symbol 'O'?",
            options: ["Oxygen", "Osmium", "Oganesson", "Opium"],
            answer: "Oxygen"
        }
    ],
    medium: [
        {
            id: 34,
            question: "Which element is the most abundant in the Earth's crust?",
            options: ["Oxygen", "Silicon", "Aluminum", "Iron"],
            answer: "Oxygen"
        },
        {
            id: 35,
            question: "What is the atomic number of Neon?",
            options: [8, 10, 12, 14],
            answer: 10
        },
        {
            id: 36,
            question: "Which of the following elements is a transition metal?",
            options: ["Zinc", "Carbon", "Helium", "Fluorine"],
            answer: "Zinc"
        },
        {
            id: 37,
            question: "Which element is represented by the symbol 'Na'?",
            options: ["Sodium", "Nitrogen", "Nickel", "Neon"],
            answer: "Sodium"
        },
        {
            id: 38,
            question: "Which element is commonly used in the production of semiconductors?",
            options: ["Silicon", "Iron", "Copper", "Aluminum"],
            answer: "Silicon"
        },
        {
            id: 39,
            question: "Which of the following elements is a halogen?",
            options: ["Chlorine", "Oxygen", "Argon", "Sodium"],
            answer: "Chlorine"
        },
        {
            id: 40,
            question: "Which of these elements is a metalloid?",
            options: ["Boron", "Carbon", "Helium", "Neon"],
            answer: "Boron"
        },
        {
            id: 41,
            question: "Which element has the highest atomic weight?",
            options: ["Uranium", "Gold", "Plutonium", "Thorium"],
            answer: "Uranium"
        },
        {
            id: 42,
            question: "Which of the following elements is most commonly found in the human body?",
            options: ["Oxygen", "Carbon", "Nitrogen", "Calcium"],
            answer: "Oxygen"
        },
        {
            id: 43,
            question: "What is the atomic number of Potassium?",
            options: [19, 20, 21, 18],
            answer: 19
        },
        {
            id: 44,
            question: "Which element is represented by the symbol 'Au'?",
            options: ["Silver", "Gold", "Iron", "Copper"],
            answer: "Gold"
        },
        {
            id: 45,
            question: "Which element is found in the fourth period and is a noble gas?",
            options: ["Argon", "Krypton", "Neon", "Xenon"],
            answer: "Krypton"
        },
        {
            id: 46,
            question: "Which element is known as the 'King of Chemicals'?",
            options: ["Sulfuric Acid", "Nitric Acid", "Hydrochloric Acid", "Hydrofluoric Acid"],
            answer: "Sulfuric Acid"
        },
        {
            id: 47,
            question: "Which of these elements has a full outer electron shell?",
            options: ["Helium", "Sodium", "Chlorine", "Calcium"],
            answer: "Helium"
        },
        {
            id: 48,
            question: "What is the atomic number of Iron?",
            options: [26, 28, 30, 32],
            answer: 26
        },
        {
            id: 49,
            question: "Which element is known for its strong magnetic properties?",
            options: ["Iron", "Copper", "Silver", "Gold"],
            answer: "Iron"
        },
        {
            id: 50,
            question: "Which element is commonly used in the production of batteries?",
            options: ["Lithium", "Iron", "Magnesium", "Zinc"],
            answer: "Lithium"
        },
        {
            id: 51,
            question: "What is the atomic number of Carbon?",
            options: [6, 12, 14, 16],
            answer: 6
        },
        {
            id: 52,
            question: "Which element is the main component of natural gas?",
            options: ["Methane", "Hydrogen", "Oxygen", "Carbon Dioxide"],
            answer: "Methane"
        },
        {
            id: 53,
            question: "Which of the following elements is a noble gas?",
            options: ["Helium", "Neon", "Argon", "All of the above"],
            answer: "All of the above"
        },
        {
            id: 54,
            question: "Which element has the atomic number 79?",
            options: ["Gold", "Silver", "Platinum", "Copper"],
            answer: "Gold"
        },
        {
            id: 55,
            question: "Which element is used in the manufacturing of light bulbs?",
            options: ["Tungsten", "Copper", "Silicon", "Iron"],
            answer: "Tungsten"
        },
        {
            id: 56,
            question: "What is the atomic number of Calcium?",
            options: [18, 20, 22, 24],
            answer: 20
        },
        {
            id: 57,
            question: "Which of these elements is a gas at room temperature?",
            options: ["Oxygen", "Mercury", "Bromine", "Sulfur"],
            answer: "Oxygen"
        },
        {
            id: 58,
            question: "Which element is known for its role in photosynthesis?",
            options: ["Chlorophyll", "Magnesium", "Oxygen", "Nitrogen"],
            answer: "Magnesium"
        },
        {
            id: 59,
            question: "Which element has the atomic number 12?",
            options: ["Magnesium", "Calcium", "Sodium", "Potassium"],
            answer: "Magnesium"
        },
        {
            id: 60,
            question: "Which element is used as a fuel in nuclear reactors?",
            options: ["Uranium", "Thorium", "Plutonium", "Radium"],
            answer: "Uranium"
        },
        {
            id: 61,
            question: "What is the atomic number of Sulfur?",
            options: [16, 18, 20, 22],
            answer: 16
        },
        {
            id: 62,
            question: "Which element is commonly used as a catalyst in the automotive industry?",
            options: ["Platinum", "Gold", "Silver", "Copper"],
            answer: "Platinum"
        },
        {
            id: 63,
            question: "Which of the following elements is a noble gas?",
            options: ["Helium", "Oxygen", "Carbon", "Nitrogen"],
            answer: "Helium"
        },
        {
            id: 64,
            question: "What is the atomic number of Carbon?",
            options: [6, 12, 14, 16],
            answer: 6
        },
        {
            id: 65,
            question: "Which element is found in the second period and is a halogen?",
            options: ["Fluorine", "Neon", "Oxygen", "Lithium"],
            answer: "Fluorine"
        }
    ],    
    hard: [
        {
            id: 66,
            question: "Which element has the highest atomic number?",
            options: ["Oganesson", "Uranium", "Neptunium", "Plutonium"],
            answer: "Oganesson"
        },
        {
            id: 67,
            question: "Which element is named after the Greek word for 'stranger'?",
            options: ["Xenon", "Ytterbium", "Yttrium", "Zinc"],
            answer: "Xenon"
        },
        {
            id: 68,
            question: "Which of these elements is part of the Lanthanide series?",
            options: ["Cerium", "Zirconium", "Gallium", "Boron"],
            answer: "Cerium"
        },
        {
            id: 69,
            question: "What is the atomic number of Neptunium?",
            options: [93, 94, 95, 96],
            answer: 93
        },
        {
            id: 70,
            question: "Which element has the chemical symbol 'Pu'?",
            options: ["Plutonium", "Polonium", "Palladium", "Phosphorus"],
            answer: "Plutonium"
        },
        {
            id: 71,
            question: "What is the atomic mass of Thorium?",
            options: [232.038, 238.028, 244.070, 249.070],
            answer: 232.038
        },
        {
            id: 72,
            question: "Which element was named after the country France?",
            options: ["Francium", "Gallium", "Polonium", "Berkeleyium"],
            answer: "Francium"
        },
        {
            id: 73,
            question: "Which element is known as 'the element of life'?",
            options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
            answer: "Carbon"
        },
        {
            id: 74,
            question: "What is the most reactive element in the periodic table?",
            options: ["Fluorine", "Francium", "Cesium", "Oxygen"],
            answer: "Fluorine"
        },
        {
            id: 75,
            question: "Which of these is a synthetic element?",
            options: ["Plutonium", "Uranium", "Thorium", "Radon"],
            answer: "Plutonium"
        },
        {
            id: 76,
            question: "Which element is used in nuclear reactors as a fuel?",
            options: ["Uranium", "Lithium", "Boron", "Manganese"],
            answer: "Uranium"
        },
        {
            id: 77,
            question: "What is the name of the element with the symbol 'Rn'?",
            options: ["Radon", "Rhenium", "Ruthenium", "Rubidium"],
            answer: "Radon"
        },
        {
            id: 78,
            question: "Which element has the highest electronegativity?",
            options: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
            answer: "Fluorine"
        },
        {
            id: 79,
            question: "What is the atomic number of Copernicium?",
            options: [112, 114, 116, 118],
            answer: 112
        },
        {
            id: 80,
            question: "Which element is named after the planet Uranus?",
            options: ["Uranium", "Neptunium", "Plutonium", "Saturnium"],
            answer: "Uranium"
        },
        {
            id: 81,
            question: "Which element was first synthesized in a cyclotron?",
            options: ["Technetium", "Francium", "Plutonium", "Curium"],
            answer: "Technetium"
        },
        {
            id: 82,
            question: "Which noble gas is used in neon signs?",
            options: ["Neon", "Argon", "Krypton", "Helium"],
            answer: "Neon"
        },
        {
            id: 83,
            question: "What element is the heaviest naturally occurring element?",
            options: ["Uranium", "Thorium", "Plutonium", "Neptunium"],
            answer: "Uranium"
        },
        {
            id: 84,
            question: "Which element has the symbol 'W'?",
            options: ["Tungsten", "Wolfram", "Vanadium", "Magnesium"],
            answer: "Tungsten"
        },
        {
            id: 85,
            question: "Which element was named after the scientist Marie Curie?",
            options: ["Curium", "Polonium", "Radium", "Francium"],
            answer: "Curium"
        },
        {
            id: 86,
            question: "What is the only metal that is liquid at room temperature?",
            options: ["Mercury", "Gallium", "Francium", "Cesium"],
            answer: "Mercury"
        },
        {
            id: 87,
            question: "Which element is named after the American scientist Albert Einstein?",
            options: ["Einsteinium", "Curium", "Berkelium", "Fermium"],
            answer: "Einsteinium"
        },
        {
            id: 88,
            question: "Which element has the highest melting point?",
            options: ["Tungsten", "Rhenium", "Carbon", "Osmium"],
            answer: "Tungsten"
        },
        {
            id: 89,
            question: "Which element was first isolated from the mineral pitchblende?",
            options: ["Radium", "Polonium", "Uranium", "Beryllium"],
            answer: "Radium"
        },
        {
            id: 90,
            question: "Which element is used in the production of semiconductors?",
            options: ["Silicon", "Germanium", "Gallium", "Arsenic"],
            answer: "Silicon"
        },
        {
            id: 91,
            question: "What is the only element that can form a stable bond with itself to create a molecule?",
            options: ["Carbon", "Oxygen", "Nitrogen", "Sulfur"],
            answer: "Carbon"
        },
        {
            id: 92,
            question: "Which element has the shortest half-life?",
            options: ["Polonium", "Francium", "Radon", "Astatine"],
            answer: "Francium"
        },
        {
            id: 93,
            question: "What is the atomic number of Flerovium?",
            options: [113, 114, 115, 116],
            answer: 114
        },
        {
            id: 94,
            question: "Which element was discovered by the scientist Lavoisier?",
            options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon"],
            answer: "Oxygen"
        },
        {
            id: 95,
            question: "Which element was first identified by its spectral lines?",
            options: ["Helium", "Hydrogen", "Neon", "Oxygen"],
            answer: "Helium"
        }
    ]
    
};




