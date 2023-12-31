import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'MaplestoryOTFBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/MaplestoryOTFBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
*{
  box-sizing:border-box;
	overflow:hidden;
  font-family: 'MaplestoryOTFBold';
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
	margin: 0;
}
ul {
	margin: 0;
	padding: 0;
  list-style: none;
}
body {
	width:100%;
	height:100%;
	margin: 0;
  padding: 0;
}
a {
	text-decoration: none;
}
button {
  box-sizing:border-box;
	background: inherit; 
	border:none; 
	box-shadow:none; 
	border-radius:0; 
	padding:0; 
	cursor:pointer
}
`;

export default GlobalStyle;
