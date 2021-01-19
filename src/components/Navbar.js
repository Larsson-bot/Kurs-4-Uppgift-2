import React from 'react'

const Navbar = () => {
    return (     
            <nav className="navbar navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <i class="fas fa-dragon"></i>
                        <span className="ms-2">Task manager</span>
                    </a>
                </div>
            </nav>    
    )
}

export default Navbar
