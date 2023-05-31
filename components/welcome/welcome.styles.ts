import styled from 'styled-components';

const enum CSS {
  welcomePadding = '2rem',
  welcomeTitleFontSize = '1.25rem',
  backgroundColor = '#B398F7',
  textColor = '#FFF'
}

export const WelcomeStyled = styled.section`
  padding: ${CSS.welcomePadding};
  background-color: ${CSS.backgroundColor};
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;

  .c-welcome-content {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    width: 500px;
    color: ${CSS.textColor};
  }

  .c-welcome-title {
    font-weight: bold;
    font-size: ${CSS.welcomeTitleFontSize};
  }

  .c-welcome-description {
    display: flex;
    flex-direction: row;
    align-content: center;
    text-align: center;
  }
`;
