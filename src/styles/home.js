import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 7rem;
  padding: 0;
  background-color: #e6e1dd;
`;

export const ContainerFoto = styled.div`
  height: 36rem;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  position: relative;
  @media screen and (max-width: 600px) {
      text-align: center;
  }
  @media screen and (max-width: 850px) {
      height: 20rem;
  }
`;

export const ContainerValores = styled.div`
  width: 100%;
  margin: 0;
  padding: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const BoxValores = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  text-align: center;
  place-content: center;
  grid-template-columns: 30% 30% 30%;

  @media screen and (max-width: 850px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
  }
`;

export const Valores = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const BoxDados = styled.div`
  width: 100%;
  margin: 0;
  padding: 2rem;
  background-color: #e6e1dd;
  display: flex;
  grid-template-columns: 30% 30% 30%;
  gap: 1rem;
`;

export const ContainerGeral = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 4rem;
  @media screen and (max-width: 850px) {
      display: grid;
      grid-template-columns: 40% 40%;
      place-content: center;
      align-items: center;
      gap: 2rem;
  }

  @media screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
      display: flex;
  }
`;

export const ContainerProduto = styled.div`
  background-color: #000;
  opacity: 1;
  height: auto;
  border-radius: 1.1rem;
  position: relative;
  display: flex;
  text-align: center;

  & img:hover{
    opacity: .7;
    transition: opacity .35s;
  }
  
  @media screen and (max-width: 850px) {
      & img{
        width: 100% !important;
      }
      width: 100%;
  }

  @media screen and (max-width: 600px) {
      & img{
        width: 100% !important;
      }
      width: 80%;
  }
`;

export const SpanProdutos = styled.span`
  font-size: 2.5rem;
  width: 100%;
  color: #fff;
  font-weight: 850;
  z-index: 1;
  position: absolute;
  top: 40%;
`;
export const SpanTitulo = styled.span`
  font-size: 4.2rem;
  width: 25%;
  color: #fff;
  font-weight: 700;
  z-index: 1;
  position: absolute;
  top: 26%;
  left: 13%;

  @media screen and (max-width: 600px) {
      top: 30% !important;
      left: 0 !important;
      width: 100%;
      font-size: 2rem !important;
  }
  
  @media screen and (max-width: 850px) {
      top: 30%;
      left: 5%;
      width: 100%;
      font-size: 3.2rem;
  }
`;


export const TituloValores = styled.h1`
  color: #1e2952;
  z-index: 1;
  font-size: 2.3rem;;
`;

export const DescricaoTitulo = styled.p`
  font-size: 1.2rem;
  width: 25%;
  color: #fff;
  font-weight: 400;
  z-index: 1;
  position: absolute;
  top: 55.5%;
  left: 13%;
  @media screen and (max-width: 600px) {
      top: 45% !important;
      left: 0 !important;
      width: 100%;
      font-size: .8rem !important;
      padding: 0 5% !important;
  }
  @media screen and (max-width: 850px) {
      top: 50%;
      left: 0%;
      width: 100%;
      font-size: 1.2rem;
      padding: 0 5%
  }
`;

