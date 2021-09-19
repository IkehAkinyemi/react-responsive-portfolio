import React from 'react';
import {
  twitterURL,
  gitHubURL,
  linkedInURL,
  personalLocation,
  personalEmail,
  personalPhoneNumber,
  appTitle,
} from '../config';

const Item = ({ title, value, href, iconName }: any) => (
  <div
    className="flex flex-col justify-center items-center mb-12 md:mb-0 mr-0 md:mx-6"
    style={{
      fontFamily: 'Source Sans Pro',
    }}
  >
    <div className="text-4xl -mb-2 md:-mb-4">
      <ion-icon name={iconName}></ion-icon>
    </div>
    <div className="text-center">
      <h6 className="text-2xl hidden md:block">{title}</h6>
      <a
        href={href}
        title={value}
        className="text-2xl mt-2 text-white text-opacity-75 md-text-opacity-50 hover:text-opacity-100 focus:text-opacity-100"
      >
        {value}
      </a>
    </div>
  </div>
);

const Contact = () => {
  window.document.title = `${appTitle}: Contact`;

  return (
    <div className="container max-w-screen-lg mx-auto">
      <div className="flex flex-col md:flex-row justify-center max-w-screen-md mx-auto items-center mt-8 md:mt-12">
        <Item title="E-mail" value={personalEmail} href={`mailto:${personalEmail}`} iconName="mail-outline" />
        <Item title="Phone" value={personalPhoneNumber} href={`tel:${personalPhoneNumber}`} iconName="call-outline" />
        <Item title="Location" value={personalLocation} iconName="location-outline" />
      </div>
      <ul className="flex flex-row justify-center m-0 mt-2 md:mt-8 list-none w-full p-8">
        <li className="mr-2">
          <a
            className="p-4 text-2xl hover:opacity-75"
            href={linkedInURL}
            title="LinkedIn – Opengravitas"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin fa-lg" />
          </a>
        </li>
        <li>
          <a
            className="p-4 text-2xl hover:opacity-75"
            href={gitHubURL}
            title="GitHub – Nojze"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github fa-lg" />
          </a>
        </li>
        <li className="ml-2">
          <a
            className="p-4 text-2xl hover:opacity-75"
            href={twitterURL}
            title="Twitter – @Niklaass"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter fa-lg" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
