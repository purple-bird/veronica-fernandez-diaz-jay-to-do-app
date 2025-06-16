import { NavLink, useLocation } from 'react-router';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

function Header() {
  const location = useLocation();
  const [title, setTitle] = useState('');

  useEffect(() => {
    let newTitle;
    switch (location.pathname) {
      case '/':
        newTitle = 'Todo List';
        break;
      case '/about':
        newTitle = 'About';
        break;
      default:
        newTitle = 'Not Found';
        break;
    }

    setTitle(newTitle);
    document.title = newTitle;
  }, [location]);

  return (
    <div>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles.active : styles.inactive
          }
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
