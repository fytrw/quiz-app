import { useEffect } from 'react';
import '../styles/ColorSwitcher.css';
import sunIcon from '../assets/icon-sun-light.svg';
import moonIcon from '../assets/icon-moon-light.svg';
import sunIconDark from '../assets/icon-sun-dark.svg';
import moonIconDark from '../assets/icon-moon-dark.svg';

const ColorSwitcher = ({isDarkMode, setIsDarkMode}) => {

    useEffect(() => {
        const root = document.documentElement;
        if(isDarkMode) {
            root.style.setProperty('--background', '#313E51');
            root.style.setProperty('--dark-navy', '#FFFFFF');
            root.style.setProperty('--gray-navy', '#ABC1E1');
            root.style.setProperty('--navy', '#FFFFFF');
            root.style.setProperty('--white', '#3B4D66');
        } else {
            root.style.setProperty('--background', '#F4F6FA');
            root.style.setProperty('--dark-navy', '#313E51');
            root.style.setProperty('--gray-navy', '#626C7F');
            root.style.setProperty('--navy', '#3B4D66');
            root.style.setProperty('--white', '#FFFFFF');
        }
    }, [isDarkMode]);

    const handleModeToggle = () => {
        setIsDarkMode(prevMode => !prevMode);
    };



    return (
        <div className='color-switcher-wrapper'>
            <img src={isDarkMode ? sunIcon : sunIconDark} alt="Sun Icon" />
            <div className={`color-switcher ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
                <input className='color-switcher-input' type="checkbox" id="switch" checked={isDarkMode} onChange={handleModeToggle} />
                <label className='color-switcher-label' htmlFor="switch"></label>
            </div>
            <img src={isDarkMode ? moonIcon : moonIconDark} alt="Moon Icon" />
        </div>
    );
};

export default ColorSwitcher;
