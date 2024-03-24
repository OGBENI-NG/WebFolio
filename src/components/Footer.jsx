import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import data from '../data';

export default function Footer({ themeColor }) {
  const [footerItems, setFooterItems] = useState(data.footerEl);

  const handleIconClick = (id) => {
    const updatedItems = footerItems.map(item => {
      if (item.id === id) {
        return { ...item, isTrue: true };
      } else {
        return { ...item, isTrue: false };
      }
    });
    setFooterItems(updatedItems);
  };

  const footerData = footerItems.map(item => (
    <NavLink
      key={item.id}
      to={item.name.toLowerCase() === 'home' ? '/' : `/${item.name.toLowerCase()}`}
      activeClassName="text-brand"
      className={`flex flex-col items-center font-OpenSan ${item.isTrue ? 'text-brand' : themeColor} transition-all`}
      onClick={() => handleIconClick(item.id)}
    >
      <div>
        {item.isTrue ? item.isFocusedIcon({ size: 25 }) : item.icon({ size: 25 })}
      </div>
      <span className="text-[14px] font-semibold">{item.name}</span>
    </NavLink>

  ));

  return (
    <footer className="flex items-center justify-between py-2 px-5 fixed bottom-0 right-0 left-0 bg-white text-primary border-t-[1px] bg-white/10 backdrop-blur-[100px] border-borderColor">
      {footerData}
    </footer>
  );
}
