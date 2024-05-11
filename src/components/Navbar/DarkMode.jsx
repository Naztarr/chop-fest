import React, { useEffect, useState } from 'react'
import lightPng from '../../assets/light-mode-button.png'
import darkPng from '../../assets/dark-mode-button.png'

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  return (
    <>
      {theme === "light" ?
        <div>
          <img
            src={lightPng}
            alt="light"
            onClick={() =>
              setTheme("dark")}
            className='w-12 cursor-pointer '
          />
        </div> :
        <div>
          <img
            src={darkPng}
            alt="dark"
            onClick={() =>
              setTheme("light")}
              className='w-12 cursor-pointer '
          />
        </div>
      }
    </>
  )
}

export default DarkMode