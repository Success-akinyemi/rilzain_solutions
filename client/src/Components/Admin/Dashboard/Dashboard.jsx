import React, { useEffect, useState, useRef } from 'react';
import './Dashboard.css';
import NewHouse from '../NewHouse/NewHouse';
import ViewHouses from '../ViewHouses/ViewHouses';
import EditHouse from '../EditHouse/EditHouse';
import Profile from '../Profile/Profile';
import Signup from '../Signup/Signup';

function Dashboard() {
  const [activeSection, setActiveSection] = useState('viewHouses');
  const [isNavOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setNavOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);


  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={`dashboard ${isNavOpen ? 'open' : ''}`}>

      <div className="navbar" ref={navRef}>
        <button className="navbar-toggle" onClick={toggleNav}>
          <span className="toggle-icon"></span>
        </button>
      </div>

      <div className="sidebar">
        <div className="nav">
          <a onClick={() => handleSectionChange('viewHouses')}>View Houses</a>
          {/* <a onClick={() => handleSectionChange('editHouse')}>Edit House</a> */}
          <a onClick={() => handleSectionChange('newHouse')}>Add New House</a>
          <a onClick={() => handleSectionChange('profile')}>Profile</a>
          <a onClick={() => handleSectionChange('signup')}>Add New User</a>
        </div>
      </div>

      <div className="content">
        <section className={activeSection === 'viewHouses' ? 'active' : ''}>
          <ViewHouses />
        </section>

        <section className={activeSection === 'editHouse' ? 'active' : ''}>
          <EditHouse />
        </section>

        <section className={activeSection === 'newHouse' ? 'active' : ''}>
          <NewHouse />
        </section>

        <section className={activeSection === 'profile' ? 'active' : ''}>
          <Profile />
        </section>

        <section className={activeSection === 'signup' ? 'active' : ''}>
          <Signup />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
