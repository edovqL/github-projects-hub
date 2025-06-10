import React, { useState } from 'react';

interface DropdownProps {
    options: number[];
    selectedOption: number;
    onChange: (value: number) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, selectedOption, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: number) => {
        onChange(option);
        setIsOpen(false);
    };

    return (
        <div className="relative w-25 text-sm h-10">
            {/* Button */}
            <button
                className="w-full h-full text-[15px] flex justify-between items-center px-2 py-1 bg-[#2c9cdb] text-white rounded-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                {selectedOption}
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? 'M19 9l-7 7-7-7' : 'M19 15l-7-7-7 7'} />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute right-0 mt-1 w-full bg-white rounded-sm shadow max-h-40 overflow-y-auto z-20">
                    {options.map((option) => (
                        <button
                            key={option}
                            onClick={() => handleSelect(option)}
                            className={`block w-full text-left px-2 py-1 hover:bg-gray-100 ${option === selectedOption ? 'bg-gray-200' : ''}`}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dropdown;
