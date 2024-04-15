import React from 'react';

export default function CustomButton({ children, onClick, type, className }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} shadow-lg shadow-brand/25 text-xl text-mainBg 
      hover:bg-transparent border hover:border-brand bg-brand
      rounded-lg font-bold transition-all duration-500
      hover:text-brand`}
    >
      {children}
    </button>
  );
}
