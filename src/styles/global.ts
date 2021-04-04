import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        --color-white: #fff;
        --color-blue:  #2D9CDB;
        --color-green: #27AE60;
        --color-dark-blue: #100E1D;
        --color-red: #EB5757;
        --color-grey-1: #4F4F4F;
        --color-grey-2: #828282;
        --color-grey-3: #BDBDBD;
        --color-grey-4: #F2F2F2;
        --color-button-disabled: #E0E0E0;
        --color-text: #333333;
    }


    *, input, button, textarea {
        font: 500 1rem 'Poppins', sans-serif;
    }

    body {
      color: var(---color-text);
      background: var(--color-white);
    }


    button {cursor: pointer;}
    a {text-decoration: none; color: inherit;}
    ul {list-style: none;}


    
  @media(max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }
  
  @media(max-width: 720px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }
`;