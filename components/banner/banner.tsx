import { Button } from "../button";
import { BannerStyled } from "./banner.styles";

export const Banner = () => {
  return (
    <BannerStyled>
      <h3 className="c-banner-title">Places to 
        <span className="c-banner-important-title"> Scuba Diving</span>
      </h3>
      <p className="c-banner-paragraph">Discover where to go diving</p>
      <Button text='Views'/>
    </BannerStyled>
  );
};
