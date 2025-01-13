import React, { useState } from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  const [NavStyle, setIsNavStyle] = useState({
    backgroundColor: '#2b3035',
    color: '#E0E0E0	'
  });
  const [ModeStyle, setIsModeStyle] = useState({
    backgroundColor: '#2b3035',
    border: '1px solid #2b3035',
  });
  const [Mode, setMode] = useState(<svg height={36} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
  </svg>);
  const ToggleDark = () => {
    if (NavStyle.backgroundColor === '#2b3035') {
      setIsNavStyle({
        backgroundColor: '#171717',
        color: '#E0E0E0'
      })
      setMode(<svg xmlns="http://www.w3.org/2000/svg" height={36} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
      </svg>
      );
      setIsModeStyle({
        backgroundColor: '#171717',
        border: '1px solid #171717'
      })
    }
    props.ToggleDark();
  }

  const ToggleLight = () => {
    setIsNavStyle({
      backgroundColor: '#2b3035',
      color: '#E0E0E0',
    });
  
    setMode(
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={36}
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>
    );
  
    setIsModeStyle({
      backgroundColor: '#2b3035',
      border: '1px solid #2b3035',
    });
  
    props.ToggleLight();
  };
  
  return (
    <nav style={NavStyle} className="navbar navbar-expand-lg   px-3">
      <a style={NavStyle} className="navbar-brand" href="\">{props.title}</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" style={NavStyle} aria-current="page" href="\">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" style={NavStyle} aria-current="page" href="\">{props.about}</a>
          </li>



        </ul>
        <div className="dropdown mx-2 ">
          <button style={ModeStyle} className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {Mode}
          </button>
          <ul className="dropdown-menu">
            <li onClick={ToggleDark }  className="dropdown-item"><svg height={36} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg> Dark</li>
            <li onClick={ToggleLight} className="dropdown-item"><svg height={36} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </svg> Light</li>
          </ul>
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-primary" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>

  );
}


Navbar.defaultProps = {
  title: "Set title here",
  about: "About"
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}
