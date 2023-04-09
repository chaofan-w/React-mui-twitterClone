import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

/* Customize the appearance of the scrollbar */

*,
  *:before,
  *:after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: 'Roboto'
  }

  html, body {
    max-width: 100vw;
  }


@supports (overflow:overlay){
  body {
    overflow:overlay;
  --scrollbar-color: #1DA1F2;
  /* --display-bar:none; */
}

body.scrolling {
  --scrollbar-color: #1DA1F2;
  
  
  /* --display-bar:block !important; */
}

  ::-webkit-scrollbar {
    display: block;
    /* display: var(--display-bar); */
    width: 8px;
    
    transition: background-color 2s ease-in-out 0.5s;
  }
  ::-webkit-scrollbar-button {
  display:none;
  }
  
  ::-webkit-scrollbar-track {
    background-color: rgba(254, 254, 254, 0.7);
  }
  
  ::-webkit-scrollbar-track-piece {
    background-color: #1DA1F250;
}
  
  ::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    border-radius: 5px;
    border: 5px solid transparent;
    box-shadow: 4px 0px 0px 4px var(--scrollbar-color) inset;
  }
  
  /* Hide the scrollbar when not in use */
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--scrollbar-color);
    /* background-color: rgba(29,31,33,0.8); */
    border: 0px solid transparent;
    box-shadow: none;
  }
}


`;
