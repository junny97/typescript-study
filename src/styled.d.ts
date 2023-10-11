import 'styled-components';
// ts styled-components 에서 다크모드 사용법
//1.styled.d.ts 파일을 만들고 기존 styled-components의 모듈 확장
//2. DefaultTheme로 정의한 interface 타입들을 theme.ts에서 사용
//3. styled-components에서 제공하는 ThemeProvider를 import후 theme props로 다크,라이트 모드 선택
declare module 'styled-components' {
  export interface DefaultTheme {
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
