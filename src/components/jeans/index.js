import React from 'react';
import styled from 'styled-components';

import HoverPopup from '../hoverPopup';


const JeansContainer = styled.div`
  width: 100%; 
  height: 100%;
  display: flex; 
  justify-content: center; 
  align-items: center; 
  position: relative; 
`;



const Jeans = ({ id, hoverHandler, exitHandler, itemHovered }) => (
  <JeansContainer
    onMouseEnter={hoverHandler.bind(null, id)}
    onMouseLeave={exitHandler.bind(null, id)}
  >
    <img
      style={{ width: '50%', height: '80%' }}
      src={require(`../../assets/jeans/${id}.png`)}
      alt='jeans'
    />
    {
      itemHovered === id &&
      <HoverPopup />

    }
  </JeansContainer>
)

export default Jeans; 