import PropTypes from 'prop-types';
import React from 'react';
// import { Link } from 'react-router-dom';

// export default function Navbar(props){
const Navbar = (props) => {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}
      >
        <div className='container-fluid'>
          {/* <Link className='navbar-brand' to='/'>
            {props.title}
          </Link> */}
          <a className='navbar-brand' href='#'>
            {props.title}
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                {/* <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link> */}
                <a className='nav-link active' aria-current='page' href='#'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                {/* <a className='nav-link' href='/about'>
                  {props.aboutTest}
                </a> */}
                {/* <Link className='nav-link' to='/about'>
                  {props.aboutTest}
                </Link> */}
              </li>
            </ul>
            <form className='d-flex' role='search'>
              <div
                className={`form-check form-switch text-${
                  props.mode === 'light' ? 'Dark' : 'light'
                }`}
              >
                <input
                  className='form-check-input'
                  onClick={props.toggleMode}
                  type='checkbox'
                  role='switch'
                  id='flexSwitchCheckDefault'
                />
                <label
                  className='form-check-label'
                  htmlFor='flexSwitchCheckDefault'
                >
                  Enable dark mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  //  give prop type like number string boolean etc.
  title: PropTypes.string.isRequired,
  aboutTest: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  // default title when are you not giving props then these execute
  title: ' Title ',
  // aboutTest: 'About',
};
export default Navbar;
