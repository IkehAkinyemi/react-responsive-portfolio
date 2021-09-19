import React from 'react';
import styled from 'styled-components';

const StyledText = styled.p<any>`
  font-size: 18px;
  font-weight: 400;
  color: #7e7e7e;
`;

const Text = ({ children }: any) => {
  return <StyledText>{children}</StyledText>;
};
export default Text;
