import { HeaderStyled } from './header.styles'

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="c-header-content">
          <h1 className='c-header-title'>Scuba diving 🤿</h1>
          <div className='c-header-menu'>menu</div>
      </div>
    </HeaderStyled>
  );
};
