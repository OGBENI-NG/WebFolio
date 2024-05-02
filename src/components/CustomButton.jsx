import React from 'react';

export default function CustomButton({ children, onClick, type, className }) {
  return (
    <button
      title='main'
      type={type}
      onClick={onClick}
      className={`${className} shadow-lg shadow-brand/25 text-xl text-darkest/90 
      hover:bg-transparent border-[1.5px] border-brand bg-brand/90
      rounded-lg font-bold transition-all duration-500
      hover:text-brand`}
    >
      {children}
    </button>
  );
}
