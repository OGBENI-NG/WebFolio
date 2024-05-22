import React from 'react';

export default function CustomButton({ title, children, onClick, type, className, theme }) {
  const buttonStyle = `
    ${theme === 'light' 
      ? `bg-darkest/80 hover:text-darkest border-darkest  
        hover:border-darkest shadow-darkest/40 `
      :`bg-brandDark/40 border-brandDark hover:border-lightest 
        shadow-brand/40 hover:shadow-lightest/30`
    } 
    rounded-lg
    w-full shadow-lg text-lightest lg:shadow-
    border-[1.8px] lg:border-[1px] font-semibold hover:bg-transparent`
  ;
  
  return (
    <button
      title={title}
      type={type}
      onClick={onClick}
      className={` ${buttonStyle} ${className} shadow-lg`}
    >
      {children}
    </button>
  );
}
