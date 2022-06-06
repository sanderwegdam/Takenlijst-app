import styled from 'styled-components';
   
export const Container = styled.div`
flex-direction: column;
  justify-content: center;
  padding: 10px 60px;
  background: Gray;
  position: absolute;
  bottom: 0;
  width: 100%;     
  @media (max-width: 1000px) {
    padding: 10px 30px;
  }
`;   
export const FooterLink = styled.a` 
  flex-direction: column;
  justify-content: center;
  color: White;
  font-size: 20px;
  text-align: center;
  width: 200px;
  margin: auto;
  text-decoration: none;
  &:hover {
      color: Black;
      transition: 200ms ease-in;
  }
`;