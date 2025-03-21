import { FC } from 'react';

type TMapPinProps = {
  className?: string;
};

export const MapPin: FC<TMapPinProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width='15'
      height='20'
      viewBox='0 0 15 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M13.5741 7.69231C13.5741 8.63741 13.1761 9.85349 12.5251 11.1885C11.8807 12.5102 11.0163 13.893 10.1442 15.155C9.2733 16.4154 8.40136 17.5457 7.74664 18.3614C7.463 18.7148 7.22051 19.0086 7.03704 19.2279C6.85356 19.0086 6.61107 18.7148 6.32743 18.3614C5.67272 17.5457 4.80077 16.4154 3.92986 15.155C3.05776 13.893 2.19342 12.5102 1.54896 11.1885C0.897993 9.85349 0.5 8.63741 0.5 7.69231C0.5 3.67727 3.4677 0.5 7.03704 0.5C10.6064 0.5 13.5741 3.67727 13.5741 7.69231Z'
        fill='white'
        stroke='black'
      />
      <circle cx='7' cy='7' r='2.5' fill='white' stroke='black' />
    </svg>
  );
};
