import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;
export const ButtonLoad = styled.button`
  box-shadow: inset 0px 1px 0px 0px #bee2f9;
  background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
  background-color: #63b8ee;
  border-radius: 6px;
  border: 1px solid #3866a3;
  display: inline-block;
  cursor: pointer;
  color: #14396a;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #7cacde;

  transition: background-color 250ms ease-in, color 250ms ease-in,
    scale 250ms ease-in;

  &:hover {
    background: linear-gradient(to bottom, #468ccf 5%, #63b8ee 100%);
    background-color: #ffffff;
    color: #000000;
    scale: 1.1;
  }
`;
