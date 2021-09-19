import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaMax } from '../../utils';
import { homeURL, contactURL, experienceURL } from '../../config';
import theme from '../../styles';
import logo from "../../assets/images/bunny.png"
import MobileNavigationBar from './MobileNavigationBar';

const activeStyle = {
  borderColor: theme.colors.white,
};

const NavigationBar = () => {
  const isMobile = useMediaMax(theme.breakpoints.md);

  const StyledNavLink = ({ href, title }: any) => (
    <li className="flex items-center m-0 mr-8">
      <NavLink
        className={`border-b border-transparent hover:border-white`}
        style={{ padding: '0rem 0.125rem', fontFamily: 'Source Sans Pro' }}
        activeStyle={activeStyle}
        to={href}
        title={title}
      >
        {title}
      </NavLink>
    </li>
  );

  return isMobile ? (
    <MobileNavigationBar />
  ) : (
    <header
      className="m-0 py-4"
      style={{
        color: theme.colors.white,
      }}
    >
      <nav className="relative flex justify-around items-center" role="navigation">
        <NavLink
          className="inline-flex text-white hover:text-opacity-75"
          to={homeURL}
          title="Home"
          role="img"
          aria-label="opengravitas"
        >
          <img
            className="w-12 h-12 border rounded-full mr-4 "
            src={logo}
            alt="opengravitas.png"
          />
          <span className="text-xl self-center uppercase tracking-widest ">Opengravitas</span>
        </NavLink>

        <ul className="flex flex-row m-0 p-0 list-none">
          <StyledNavLink href={homeURL} title="Home" />
          <StyledNavLink href={experienceURL} title="Experience" />
          <StyledNavLink href={contactURL} title="Contact" />
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
