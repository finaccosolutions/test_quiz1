import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
  isFullWidth?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  options,
  className = '',
  isFullWidth,
  ...props
}) => {
  const baseStyles = 'block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 sm:text-sm appearance-none pr-10 transition-colors';
  
  const widthStyles = isFullWidth ? 'w-full' : '';
  
  const selectClasses = `
    ${baseStyles}
    ${widthStyles}
    ${className}
  `;
  
  return (
    <div className="relative">
      <select className={selectClasses} {...props}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};