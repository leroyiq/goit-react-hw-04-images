import styled from 'styled-components';
import { ColorRing } from 'react-loader-spinner';

export const Spinner = styled(ColorRing)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
