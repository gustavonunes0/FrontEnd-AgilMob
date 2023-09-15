import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 7rem;
  padding: 0;
  background-color: #e6e1dd;
  @media screen and (max-width: 700px) {
    justify-content: center;
  }
`;

export const BoxPrincipal = styled.div`
  display: flex;
  padding: 3% 0%;
  justify-content: center;

  @media screen and (max-width: 1000px) {
    padding: 2%;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 3% 0%;
  }
`;

export const ContainerFotos = styled.div`
  display: grid;
  grid-template-columns: 17% 80%;
  gap: 2%;

  @media screen and (max-width: 1400px) {
  }

  @media screen and (max-width: 1200px) {
  }
  
  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const InfosPrincipais = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem !important;
  white-space: break-spaces;
  gap: .5rem;
  
  @media screen and (max-width: 700px) {
    text-align: center !important;
  }
`;

export const Input1 = styled.input`
    width: 60%;
    background-color: transparent;
    height: 2rem;
    border: 1px solid #000;
    font-size: .8rem;
    padding-left: 1%;

    &:focus{
        outline-color: #202b50;
    }
    &::placeholder{
        color: #a6a9aa;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
    }
`;
export const Botao = styled.button`
    width:40%;
    font-size: .6rem;
    height: 2rem;
    background-color: #202b50;
    color: #e6e1dd;
    border: none;
    cursor: pointer;

    
    @media screen and (max-width: 800px) {
        width: 50%;
    }
`;

export const ColunaFotosSecundarias = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40rem;
  gap: 2%;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 5.5rem;
    overflow-x: scroll;
    width: 90vw;
    padding-left: 4rem;
  }
`;

export const ColunaFotoPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40rem;
  
  @media screen and (max-width: 700px) {
    height: 20rem;
  }
`;

export const ImagemPrincipal = styled.img`
  height: 100%;
  width: 95%;
  object-fit: cover; 

  @media screen and (max-width: 700px) {
    width: 90vw;
  }
`;
export const FotosSecundarias = styled.img`
  height: 18.4%;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    height: 98%;
  }
`;