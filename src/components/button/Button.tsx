import { FC } from 'react';

interface Props {
  disabled?: boolean;
  onClick?: () => void;
  title: string;
  type: 'outlined' | 'primary' | 'secondary' | 'white';
}

const Button: FC<Props> = ({ children, disabled, onClick, title, type }) => {
  const style = {
    outlined: {
      class:
        'border border-white bg-primary text-white hover:bg-white hover:text-primary'
    },
    white: {
      class: 'bg-white text-primary'
    },
    primary: {
      class: 'bg-primary text-white'
    },
    secondary: {
      class: 'bg-secondary text-white'
    }
  };

  const disabledStyle = disabled
    ? 'bg-opacity-50 hover:bg-opacity-50 cursor-not-allowed'
    : '';

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        text-md flex h-10 w-full items-center justify-center rounded-md bg-opacity-80 px-4 py-2
        font-medium hover:bg-opacity-100 focus:outline-none ${style[type].class} ${disabledStyle}
      `}>
      {children ? children : title}
    </button>
  );
};

export default Button;
