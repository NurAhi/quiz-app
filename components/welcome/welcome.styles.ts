import styled from 'styled-components';

const enum CSS {
  welcomePadding = '1rem',
  welcomeTitleFontSize = '1.25rem'
}

export const WelcomeStyled = styled.section`
  padding: ${CSS.welcomePadding};
  background-color: #d8effa;
  width: 100%;

  .c-welcome-content {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-between;
  }

  .c-welcome-title {
    font-weight: bold;
    font-size: ${CSS.welcomeTitleFontSize};
  }
`;
