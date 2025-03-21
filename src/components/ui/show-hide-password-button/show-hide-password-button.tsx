import { FC } from 'react';

type TShowHidePasswordButtonProps = {
  onClick: () => void;
  className?: string;
};

export const ShowHidePasswordButton: FC<TShowHidePasswordButtonProps> = ({
  onClick,
  className,
}) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width='33'
      height='19'
      viewBox='0 0 33 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M32.5 9.5C32.5 11.8684 30.8285 14.1084 27.9178 15.7842C25.0205 17.4523 20.9848 18.5 16.5 18.5C12.0152 18.5 7.97945 17.4523 5.08222 15.7842C2.17154 14.1084 0.5 11.8684 0.5 9.5C0.5 7.1316 2.17154 4.89164 5.08222 3.2158C7.97945 1.54769 12.0152 0.5 16.5 0.5C20.9848 0.5 25.0205 1.54769 27.9178 3.2158C30.8285 4.89164 32.5 7.1316 32.5 9.5Z'
        fill='#F6F6F6'
        stroke='#4E4E4E'
      />
      <circle cx='16.5' cy='9.5' r='6' fill='#E8E8E8' stroke='#4E4E4E' />
    </svg>
  );
};
