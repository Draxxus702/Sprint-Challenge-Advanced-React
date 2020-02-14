import React from 'react'
import {useDarkMode} from '../Hooks/useDarkMode'


function Header(){
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    };
    return(
        <div>
            <h1>Women's World Cup Players</h1>
            <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          data-testid='darkmodess'
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
        </div>
    )
}

export default Header