import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({
      theme: {
        default: { font }
      }
    }) => `${font.Poppins}, sans-serif`};
    font-size: ${({ theme }) => theme.default.font.fontSize};
  }

  body {
    width: 100;
    height: 100vh;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: ${({
      theme: {
        default: { font }
      }
    }) => `${font.Poppins}, sans-serif`};
  }



  button {
    cursor: pointer;
    border: none;
    margin: 0;
    text-decoration: none;
    color: #ffffff;
    font-size: 1rem;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out,
                transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

/* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: blue orange;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: none;
}

*::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.default.colors.forBlack};
  border-radius: 20px;
}
`;
