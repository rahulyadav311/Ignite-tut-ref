import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{margin:0; padding:0; box-sizing:border-box;}
    *::-webkit-scrollbar{width:5px;}
    *::-webkit-scrollbar-thumb{background:#333;}
    html{scroll-behavior:smooth;}
    body{margin:0; padding:0; box-sizing:border-box; background:#f1faee; overflow-x:hidden; font-family:'Poppins', sans-serif;}
    .logo{font-family:'Playfair Display', serif; color:#333; font-size:3.5rem; font-weight:bold; text-align:center; margin:3rem 0;}
    h2, h3{font-family:'Playfair Display', serif; color:#333; font-size:2.5rem; text-align:center;}
    h4, h5, h6{font-family:'Poppins', sans-serif;, color:#333; font-size:1.5rem; font-weight:700;}
    p{color:#696969; font-size:1.2rem;}
`;

export default GlobalStyles;
