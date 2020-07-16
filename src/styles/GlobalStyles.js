import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './common.css';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *{
    outline: none;
  }
  /* 320px */
  @media all and (max-width:374px) and (orientation:portrait){html{font-size:12px;}}
  /* 320px */
  @media all and (max-width:666px) and (orientation:landscape){html{font-size:12px;}}

  /* 375px */
  @media all and (min-width:375px) and (max-width:479px) and (orientation:portrait){html{font-size:15px;}}
  /* 375px */
  @media all and (min-width:667px) and (max-width:853px) and (orientation:landscape){html{font-size:24px;}}

  /* 480px */
  @media all and (min-width:480px) and (max-width:539px) and (orientation:portrait){html{font-size:16px;}}
  /* 480px */
  @media all and (min-width:854px) and (max-width:959px) and (orientation:landscape){html{font-size:24px;}}

  /* 540px */
  @media all and (min-width:540px) and (max-width:599px) and (orientation:portrait){html{font-size:17px;}}
  /* 540px */
  @media all and (min-width:960px) and (max-width:1023px) and (orientation:landscape){html{font-size:24px;}}

  /* 600px */
  @media all and (min-width:600px) and (max-width:719px) and (orientation:portrait){html{font-size:19px;}}
  /* 600px */
  @media all and (min-width:1024px) and (max-width:1279px) and (orientation:landscape){html{font-size:24px;}}

  /* 720px */
  @media all and (min-width:720px) and (max-width:767px) and (orientation:portrait){html{font-size:22px }}
  /* 720px */
  @media all and (min-width:1280px) and (max-width:1279px) and (orientation:landscape){html{font-size:24px }}

  /* 768px */
  @media all and (min-width:768px) and (max-width:799px) and (orientation:portrait){html{font-size:23px }}
  /* 768px */
  @media all and (min-width:1280px) and (max-width:1279px) and (orientation:landscape){html{font-size:24px }}

  /* 800px  */
  @media all and (min-width:800px) and (max-width:1023px) and (orientation:portrait){html{font-size:24px }}
  /* 800px */
  @media all and (min-width:1280px) and (max-width:1335px) and (orientation:landscape){html{font-size:24px }}

  /* 1024px */
  @media all and (min-width:1024px) and (orientation:portrait){html{font-size:24px;}}
  /* 1024px */
  @media all and (min-width:1336px) and (orientation:landscape){html{font-size:24px;}}

  body {
    font-family: 'Poppins', 'Noto Sans KR', sans-serif;
  }  

`;

export default GlobalStyles;
