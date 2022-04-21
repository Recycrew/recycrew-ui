import { FC } from 'react';
import ICON from '../../assets/icons';

const Icons: FC = () => {
  return (
    <div className="hidden lg:m-auto lg:my-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-8">
      <img src={ICON.icon1} alt="icon" className="animation1 w-28" />
      <img src={ICON.icon2} alt="icon" className="animation2 w-28" />
      <img src={ICON.icon3} alt="icon" className="animation3 w-28" />
      <img src={ICON.icon4} alt="icon" className="animation4 w-28" />

      <img src={ICON.icon5} alt="icon" className="animation3 w-28" />
      <img src={ICON.icon6} alt="icon" className="animation4 w-28" />
      <img src={ICON.icon7} alt="icon" className="animation1 w-28" />
      <img src={ICON.icon8} alt="icon" className="animation2 w-28" />

      <img src={ICON.icon9} alt="icon" className="animation4 w-28" />
      <img src={ICON.icon10} alt="icon" className="animation1 w-28" />
      <img src={ICON.icon11} alt="icon" className="animation2 w-28" />
      <img src={ICON.icon12} alt="icon" className="animation3 w-28" />

      <img src={ICON.icon13} alt="icon" className="animation2 w-28" />
      <img src={ICON.icon14} alt="icon" className="animation3 w-28" />
      <img src={ICON.icon15} alt="icon" className="animation4 w-28" />
      <img src={ICON.icon16} alt="icon" className="animation1 w-28" />
    </div>
  );
};

export default Icons;
