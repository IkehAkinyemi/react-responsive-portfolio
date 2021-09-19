import React from 'react';
import styled from 'styled-components';

type ChevronProps = {
  width: number;
  variant?: 'fat' | 'thin';
  color?: string;
  direction?: 'upward' | 'downward' | 'left' | 'right';
};

const RotateWrapper = styled.div<any>`
  flex-shrink: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  transform: rotate(${props => props.direction}deg);
`;

const Chevron = ({ width, variant = 'fat', color = 'white', direction = 'right' }: ChevronProps) => {
  let degrees = 0;
  if (direction == 'downward') {
    degrees = 0;
  } else if (direction == 'left') {
    degrees = 90;
  } else if (direction == 'upward') {
    degrees = 180;
  } else if (direction == 'right') {
    degrees = 270;
  }
  return (
    <RotateWrapper direction={degrees}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={Math.round(0.666 * width)}
        viewBox={variant === 'fat' ? '0 0 12 8' : variant === 'thin' ? '0 0 9 6' : '0 0 12 8'}
      >
        <g fill={color}>
          <path
            fillRule="evenodd"
            d={
              variant === 'fat'
                ? 'M9.951.365c.47-.487 1.229-.487 1.698 0 .439.457.466 1.18.082 1.67l-.082.094L6 8 .351 2.13C-.117 1.641-.117.851.351.364.791-.09 1.486-.12 1.957.28l.092.085L6 4.473 9.951.365z'
                : 'M.146.146C.32-.027.59-.046.784.09l.07.057L4.5 3.792 8.146.146c.174-.173.443-.192.638-.057l.07.057c.173.174.192.443.057.638l-.057.07L4.5 5.207.146.854C-.049.658-.049.342.146.146z'
            }
          />
        </g>
      </svg>
    </RotateWrapper>
  );
};

export default Chevron;
