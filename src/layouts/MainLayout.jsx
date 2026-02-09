import React from 'react';
import NavBar from 'components/navBar/NavBar';
import "./layout.css"

const MainLayout = ({children, menuOpen, setMenuOpen}) => {
  return (
    <div className='dashboard-layout'>
        <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className='content'>
            {children}
        </main>
    </div>
  )
}

export default MainLayout;