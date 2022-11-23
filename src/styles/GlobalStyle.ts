import { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: sans-serif;
  }
`
export const colors = {
  primary: "#d0b2e8",
  secondary: "#9c30cf",
  third: "#c179ed",
  thirdLight: "#64448c",
  white: "#ffffff",
  black: "#000000",
  success: "#50ba9e",
  danger: "#ba3847"
}
