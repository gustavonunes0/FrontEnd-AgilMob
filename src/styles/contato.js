import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 7rem;
  align-items: center;
  justify-content: center;
  padding: 2rem 0rem;
  gap: 2rem;
  background-color: #202b50;
`;

export const Titulo = styled.h1`
  font-size: 2.3rem;
  width: 100%;
  color: #e6e1dd;
  font-weight: 850;
`;

export const Botao = styled.button`
    width:20%;
    font-size: 1rem;
    height: 2rem;
    margin-top: 1rem;
    background-color: transparent;
    color: #e6e1dd;
    border: 1px solid #e6e1dd;
    border-radius: 3rem;
    cursor: pointer;

    &:hover{      
      background-color: #e6e1dd;
      color: #202b50;
    }
    
    @media screen and (max-width: 800px) {
        width: 50%;
    }
`;

export const linkA = styled.a`
    width: 20%;
    text-decoration: none;
    color: #adbfd0;
    &:hover{
        color: #6c808c;
    }
`;
export const Forms = styled.div`
    width: 70%;
    margin-top: 2%;
    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
    }
`;

export const Input1 = styled.input`
    width: 50%;
    height: 3rem;
    border: 3px solid #202b50;
    font-size: 1.1rem;
    padding-left: 1%;

    &:focus{
        outline-color: aliceblue;
    }
    &::placeholder{
        color: #a6a9aa;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
    }
`;

export const Input3 = styled.textarea`
    margin-top: 3%;
    width: 100%;
    height: 19rem;
    border: 3px solid #202b50;
    font-size: 1.1rem;
    padding-left: 1%;

    &:focus{
        outline-color: aliceblue;
    }

    &::placeholder{
        color: #a6a9aa;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        font-size: 1rem;
    }
`;