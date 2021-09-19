import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`   
html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  font-family: "Lato", "Source Sans Pro", "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body {
  margin: 0;
  padding: 0;
  background: linear-gradient(
    90deg,
    rgba(66, 171, 232, 1) 0%,
    rgba(58, 168, 180, 1) 50%,
    rgba(58, 180, 151, 1) 100%
  );
}  

canvas {
  display: block !important;
  vertical-align: bottom !important;
}

#tsparticles {
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

`;
