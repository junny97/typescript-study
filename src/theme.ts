import React from 'react';
import { DefaultTheme } from 'styled-components';
//DefaultTheme로 정의한 interface 타입들을 theme.ts에서 사용
export const lightTheme: DefaultTheme = {
  bgColor: 'white',
  textColor: 'black',
  btnColor: 'tomato',
};

export const darkTheme: DefaultTheme = {
  bgColor: 'black',
  textColor: 'white',
  btnColor: 'teal',
};
