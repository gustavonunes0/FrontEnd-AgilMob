import styled from "styled-components";

export const Main = styled.main`
  display: grid;
  position: relative;
  margin-top: 7rem;
  grid-template-columns: 40% 40%;
  align-items: center;
  place-content: center;
  padding: 2rem 0rem;
  gap: .7rem;
  background-color: #e6e1dd;

  
  @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
  }
`;

export const TipoProdutos = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  display: flex;
  text-align: center;
  background-color: #000;
  opacity: 1;
  border-radius: .5rem;

  &:hover{
    filter: brightness(.7);
    transition: all .35s;
  }

  
  @media screen and (max-width: 600px) {
      width: 70%;
  }
`;

export const ContainerHover = styled.div`
  position: absolute;
  background-color: #000;
  opacity:.5;
  z-index: 2 ;
  border-radius: .5rem;
  height:100%;
  width: 100%;

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