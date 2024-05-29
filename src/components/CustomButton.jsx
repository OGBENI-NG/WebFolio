import React from 'react';

export default function CustomButton({ title, children, onClick, type, className, theme }) {
  const buttonStyle = `
    ${theme === 'light' 
      ? `bg-darkest/80 hover:text-darkest border-darkest  
        hover:border-darkest shadow-darkest/40 `
      :`bg-brandDark/40 border-brandDark hover:border-lightest 
        shadow-brand/80 hover:shadow-lightest/30`
    } 
    rounded-md
    w-full shadow-lg text-lightest
    border-[1px] font-semibold hover:bg-transparent`
  ;
  
  return (
    <button
      title={title}
      type={type}
      onClick={onClick}
      className={` ${className} ${buttonStyle}`}
    >
      {children}
    </button>
  );
}
