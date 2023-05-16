import { WelcomeStyled } from './welcome.styles';

export const WelcomePage = () => {
  return (
    <WelcomeStyled>
      <div className="c-welcome-content">
        <h3 className="c-welcome-subtitle">Welcome subtitle</h3>
        <h1 className="c-welcome-title">Welcome title</h1>
        <p className="c-welcome-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi minima, impedit pariatur labore eaque a
          quae ex. Ullam quasi quod esse magnam a labore amet temporibus numquam sed fugiat?
        </p>
      </div>
    </WelcomeStyled>
  );
};
