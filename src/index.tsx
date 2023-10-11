import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';

//styled-components에서 제공하는 ThemeProvider를 import후 theme props로 다크,라이트 모드 선택

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <ThemeProvider theme={darkTheme}>
    <App />
  </ThemeProvider>
);
