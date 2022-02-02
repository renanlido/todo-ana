import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: ${({
      theme: {
        default: { font }
      }
    }) => `${font.fontWeight} ${font.fontSize} ${font.Poppins}`} sans-serif
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
    font: ${({
      theme: {
        default: { font }
      }
    }) => `${font.fontWeight} ${font.fontSize} ${font.Poppins}`} sans-serif
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
`;
