import styled from "styled-components";

export const Container = styled.div`
  width: 96%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media (max-width: 865px) {
  padding:0;
  }
  `;

export const Banner = styled.section`
  display: flex;
  flex-wrap: wrap;
  img {
    width: 500px;
    @media (max-width: 865px) {
  width: 292px
  }
  }
  hr {
    width: 100%;
    border: 1px solid #000;
    background-color: #000;
    margin: 2rem 0;
  }
  > div {
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 90%;
    h1 {
      margin-top: 1rem;
      font-size: 2.8rem;
    }
    p {
      text-align: start;
      max-width: 28rem;
    }
    button {
      cursor: pointer;
      max-width: 10rem;
      background-color: #fff;
      font-size: 3rem;
      font-weight: bold;
      border: 1px solid #000;
      padding: 1 0rem;
      :hover {
        background-color: #000;
        transition: .2s ease-in-out;
        color: #fff;
      }
    }
  }
`;

export const LastOffers = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 865px) {
        flex-direction: column;
        justify-content: center;
  }
  hr {
    display: none;
    width: 100%;
    border: 1px solid #000;
    background-color: #000;
    margin: 2rem 0;
    @media (max-width: 865px) {
     display: block;
  }
  }
  flex-wrap: wrap;
  margin-top: 2rem;
  .wrapper {
    flex-direction: column;
    
    display: flex;
    width: 45%;
    @media (max-width: 865px) {
     width: 90%;
  }
    button {
      background-color: #fff;
      border: 1px solid #000;
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      font-style: italic;
      width: 50%;
      margin: 0 auto;
      margin-top: 2rem;
      cursor: pointer;
      :hover {
        background-color: #000;
        transition: .2s ease-in-out;
        color: #fff;
      }
    }
    a { margin-left: 1rem;
          max-width: 12rem;
        }
    > div {
      display: flex;
      align-items: center;
      justify-content: start;
      margin-top: 1rem;
      flex-wrap: wrap;

      > div.left {
        max-width: 15em;
        margin-left: 1rem;
        p {
          :first-child {
            font-size: 1.2rem;
          }
          font-weight: bold;
        }
        span {
          display: block;
          margin: 0.6rem 0;
        }
      }
      > div.right {
        margin-left: 1rem;
        h4 {
          font-size: 1.5rem;
        }
        button {
          font-size: 1.8rem;
          color: red;
          border: 1px solid #000;
          padding: 0 1rem;
          font-weight: bolder;
          width: 10rem;
          margin-bottom: 1rem;
        }
      
      }
    }
  }
`;

export const VerticalLine = styled.div`
  border-left: 1px solid #000; 
  color: black;
  margin: 0.1rem 0;
  width: 3px;
  margin: 0 2rem;
  @media (max-width: 865px) {
  display: none
  }
`;