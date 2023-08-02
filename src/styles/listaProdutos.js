import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  position: relative;
  margin-top: 7rem;
  grid-template-columns: 20% 20% 20% 20% 20%;
  justify-items: center;
  align-items: center;
  place-content: center;
  padding: 2rem 15rem;
  gap: .9rem;
  background-color: #e6e1dd;

  @media screen and (max-width: 1700px) {
    gap: 4rem;
  }
  @media screen and (max-width: 1400px) {
    padding: 2rem 6rem;
    gap: 1rem;
  }

  @media screen and (max-width: 1200px) {
    grid-template-columns: 30% 30% 30%;
    padding: 2rem 6rem
  }
  
  @media screen and (max-width: 1000px) {
      grid-template-columns: 50% 50%;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
`;

export const Produtos = styled.a`
  width: 16rem;
  height: 22rem;
  position: relative;
  display: flex;
  text-align: center;
  background-color: #000;
  opacity: 1;
  border-radius: .4rem;

  &:hover{
    filter: brightness(.7);
    transition: all .35s;
  }

  @media screen and (max-width: 1510px) {
    width: 12rem;
    height: 18rem;
}
  
  @media screen and (max-width: 600px) {
    width: 13rem;
    height: 18rem;
  }
`;


export const SpanProdutos = styled.span`
  font-size: 2.5rem;
  width: 100%;
  color: #fff;
  font-weight: 600;
  z-index: 3;
  position: absolute;
  top: 40%;

  @media screen and (max-width: 600px) {
      font-size: 1.5rem;
  }
`;