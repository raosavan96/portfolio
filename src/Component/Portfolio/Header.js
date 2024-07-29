import React from 'react'
import folkk from './Images/aroww.png'

function Header() {
  return (
    <>
      <header className='mt-sm-0'>
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand logo" href="/">
            Sawan Kumar Yadav
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse mb-md-0 mb-4 navbar-collapse" id="navbarSupportedContent">
            <ul className="snip1135 m-0 me-auto">
              <li className="current"><a href="#home-sec" data-hover="Home">Home</a></li>
              <li><a href="#about_me" data-hover="About me">About me</a></li>
              <li><a href="#skills-sec" data-hover="My Skills">My Skills</a></li>
              <li><a href="/" data-hover="Projects">Projects</a></li>
              <li><a href="#contact_me" data-hover="Contact">Contact</a></li>
            </ul>


            <a href='/' className="contact-btn">
              Contact Me
            </a>

          </div>
        </nav>
      </header>

      

    </>
  )
}

export default Header;
