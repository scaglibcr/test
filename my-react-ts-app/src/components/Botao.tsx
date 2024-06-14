import React, { useState } from 'react';
import styled from 'styled-components';
    
  const colorSchemes: string[] = ['red', 'blue']

  const StyledButton = styled.button<{ bgColor: string }>`
    background: ${props => props.bgColor};
    color: white;
    margin: 1em;
    border: 2px solid;
    border-radius: 3px;
    cursor: pointer;
  `;
  
  const ToggleButton: React.FC = () => {
    const [color, setColor] = useState(colorSchemes[0])
  
    const handleClick = () => {
      setColor(prevColor => (prevColor === 'blue' ? 'red' : 'blue'));
    }
  
    return (
      <StyledButton bgColor={color} onClick={handleClick}>
        Clique para mudar a cor
      </StyledButton>
    );
  };
  
  export default ToggleButton;