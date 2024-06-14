import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  padding: 1rem;
`;

const Anchor = styled.a`
  color: white;
  margin: 0 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar: React.FC = () => {
  return (
    <>
      <Nav>
        <Anchor href='/'>Home</Anchor>
        <Anchor href='/about'>About</ Anchor>
      </Nav>
    </>
  );
};

export default Navbar;
