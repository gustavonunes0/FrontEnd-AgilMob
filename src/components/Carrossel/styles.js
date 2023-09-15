import styled from "styled-components";

export const SCarGalery = styled.div`
  display: flex;
  align-items: center;
`;

export const SCarImg = styled.img`
  width: 56rem;
  height: 32rem;
  border-radius: 0.45rem;
  object-fit: cover;

  @media only screen and (max-width: 1004px) {
    width: 30rem;
    height: 22rem;
    border-radius: 2rem;
    object-fit: cover;
  }

  @media only screen and (max-width: 600px) {
    width: 23rem;
    height: 15rem;
    border-radius: 2rem;
    object-fit: cover;
  }
`;

export const SCarBtn = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  z-index: 7;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 1004px) {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 30%;
    z-index: 7;
  }

  @media only screen and (max-width: 600px) {
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 30%;
    z-index: 7;
  }
`;

export const TrianguloParaEsquerda = styled.div`
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-right: 1rem solid white;

  @media only screen and (max-width: 1004px) {
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-right: 0.5rem solid white;
  }

  @media only screen and (max-width: 600px) {
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-right: 0.5rem solid white;
  }
`;

export const TrianguloParaDireita = styled.div`
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 1rem solid white;

  @media only screen and (max-width: 1004px) {
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid white;
  }

  @media only screen and (max-width: 600px) {
    width: 0;
    height: 0;
    border-top: 0.5rem solid transparent;
    border-bottom: 0.5rem solid transparent;
    border-left: 0.5rem solid white;
  }
`;
