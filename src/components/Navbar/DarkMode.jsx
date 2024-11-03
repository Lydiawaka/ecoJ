import React from 'react';
import LightButton from '../../assets/light.jpeg';
import DarkButton from '../../assets/Dark.jpeg';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
  const element = document.documentElement; // html element

  React.useEffect(() => {
    element.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleLightMode = () => {
    setTheme("light");
  };

  const toggleDarkMode = () => {
    setTheme("dark");
  };

 
  return (
    <div className="relative">
      <img src={LightButton} alt="Light Mode" className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10" onClick={toggleLightMode} />
      <img src={DarkButton} alt="Dark Mode" className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300" onClick={toggleDarkMode} />
    </div>
  );
};

export default DarkMode;
