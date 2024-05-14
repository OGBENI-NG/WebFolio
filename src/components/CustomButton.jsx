import React from 'react';

export default function CustomButton({ title, children, onClick, type, className, theme }) {
  const buttonStyle = `
    ${theme === 'light' 
      ? `bg-darkest/80 hover:text-darkest border-darkest  
        hover:border-darkest shadow-darkest/40 `
      :`bg-brand/50 border-brand hover:border-lightest 
        shadow-brand/40 hover:shadow-lightest/30`
    } 
    rounded-lg font-bold
    w-full py-2 md:py-4 text-xl md:text-[2rem] md:mt-3 shadow-lg text-lightest
    border-[1.5px] font-semibold md:text-[2rem] hover:bg-transparent`
  ;
  
  return (
    <button
      title={title}
      type={type}
      onClick={onClick}
      className={` ${buttonStyle} ${className} `}
    >
      {children}
    </button>
  );
}
