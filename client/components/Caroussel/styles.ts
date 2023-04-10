import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
  border: 1px solid #000;
  @media (max-width: 865px) {
  display: none;
  }
`;

export const SlideContainer = styled.div<{ slideIndex: number;}>`
  display: flex;

  width: 50vw;
  height: 13rem;
  transition: transform 0.3s ease-in-out;
  transform: translateX(${props => props.slideIndex * -25}%)
`;

export const Slide = styled.img`

  width: 100%;
  height: 80%;
  object-fit: contain;
`;
export const SlideWrapper = styled.div`
  flex: 0 0 43%; /* 1/4 do container */
  padding: 1rem;
  box-sizing: border-box;
`;
export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 6rem;
`;

export const Text = styled.p`
  margin-top: 0.5rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
`;
export const PrevButton = styled(Button)`
  left: 0;
`;

export const NextButton = styled(Button)`
  right: 0;
`;