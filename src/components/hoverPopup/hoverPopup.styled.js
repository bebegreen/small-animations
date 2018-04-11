import styled from 'styled-components'; 
import hover1 from '../../assets/hover/hover1.png';
import hover2 from '../../assets/hover/hover2.png';

export const HoverPopupContainer = styled.div`
  position: absolute; 
  background: ${({ jeansHovered }) => `url(${jeansHovered ? hover2 : hover1}) no-repeat center center`}; 
  width: 120%; 
  height: 120%; 
  left: -10%; 
  top: -10%; 
  background-size: cover; 
  box-shadow: 0 0 50px rgba(0,0,0,0.2); 
`;

export const Turquoise = styled.div`
  background: #80A8B9; 
  border-radius: 50%; 
  width: 10px; 
  height: 10px; 
  border: 1px solid white; 
`;

export const Blue = Turquoise.extend`
  background: #2F318E; 
`;

export const Black = Turquoise.extend`
  background: #2C2C2E; 
`;

export const Dots = styled.div`
  display: flex; 
  justify-content: space-between; 
  width: 40px; 
  position: absolute; 
  left: 25px; 
  bottom: 30px; 
`;

export const Price = styled.div`
  position: absolute; 
  bottom: 30px; 
  right: 25px;
  color: ${({ jeansHovered }) => jeansHovered ? 'white' : 'black'}; 
`;

export const HoverImage = styled.div`
  background: ${({ jeansHovered }) => `url(${jeansHovered ? hover2 : hover1}) no-repeat center center`};
  width: ${({ jeansHovered }) => jeansHovered ? '100%' : '50%'};
  height: 100%;
  margin: 0 auto;
  background-size: cover;
`;

export const ZoomZone = styled.div`
  width: 40%; 
  height: 80%;
  margin: 0 auto;  
`;
