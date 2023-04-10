import styled from "styled-components";

export const Header = styled.header`
font-size: 2.4rem;
font-weight: bold;
padding-left: 1.5rem;
padding-top: 1rem;
border: 8px solid #000;
border-bottom: 0;
text-align: center;
`;

export const ContainerBody = styled.div`
 display: flex; 
 border: 8px solid #000;
 > aside {
  padding: 1rem;
  border: 8px solid #000;
  border-top: 0px;
  border-bottom: 0px;
  border-left: 0;
  min-height: 100vh;
  ul {
    list-style: none;
  }
  li {
  margin-bottom: 0.5rem;
:before {
  content: "-";
  margin-right: 5px;
}
}

  h4 {
    font-weight: normal;
  text-decoration: underline;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  }
  @media (max-width: 865px) {
     display: none;
  }
 }
 > div {
  flex: 1 0;

 }
`;