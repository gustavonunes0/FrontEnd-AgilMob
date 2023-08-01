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

export const ImgPrincipal = styled.img`
  width: 37.2rem;
  position: relative;

  
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;
export const ImagemPessoa1 = styled.img`
  width: 22rem; 
  position: absolute;
  left: 16%;
  z-index: 2;
  top: 8.5%;
  
  @media screen and (max-width: 600px) {
    display: none;
  }
  
  @media screen and (max-width: 850px) {
    width: 16rem;
    top: 15%;
    left: 10%
  }
`;
export const ImagemPessoa2 = styled.img`
  width: 24rem; 
  position: absolute;
  left: 63%;
  z-index: 2;
  top: 8.5%;

  @media screen and (max-width: 600px) {    
    display: none;
  }
  
  @media screen and (max-width: 850px) {
    width: 16rem;
    left: 65%;
    top: 15%;
  }
`;

export const BoxValores = styled.div`
  width: 100%;
  margin: 0;
  padding: 0;
  display: grid;
  text-align: center;
  place-content: center;
  grid-template-columns: 30% 30% 30%;

  @media screen and (max-width: 600px) {
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
  display: grid;
  grid-template-columns: 20% 20% 20%;
  place-content: center;
  gap: 1rem;
  
  @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3rem;
  }
  @media screen and (max-width: 850px) {
    grid-template-columns: 25% 25% 25%;
  }
  `;

export const Dados = styled.div`
  z-index: 5;
  width: 100%;
  height: 10rem;
  margin: 0;
  background-color: #1e2952;
  border-radius: .5rem;
  padding: 1rem 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  
  @media screen and (max-width: 600px) {
      width: 70%;
  }
`;

export const TituloValores = styled.h1`
  color: #1e2952;
  z-index: 1;
  font-size: 2.3rem;
`;

export const Infos = styled.h1`
  color: #fff;
  z-index: 1;
  font-size: 2rem;
  @media screen and (max-width: 850px) {
    font-size: 1.5rem;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 1.8rem;
  }
`;

export const Infos2 = styled.h2`
  color: #fff;
  z-index: 1;
  @media screen and (max-width: 850px) {
    font-size: 1rem;
  }
  
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
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
`;

