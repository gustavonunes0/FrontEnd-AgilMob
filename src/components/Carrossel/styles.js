import styled from "styled-components";

export const SCarGalery = styled.div`
  display: flex;
  align-items: center;
`;

export const SCarImg = styled.img`
  width: 56rem;
  height: 32rem;
  border-radius: .45rem;
  object-fit: cover;
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
`;

export const TrianguloParaEsquerda = styled.div`
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-right: 1rem solid white;
`;

export const TrianguloParaDireita = styled.div`
  width: 0;
  height: 0;
  border-top: 1rem solid transparent;
  border-bottom: 1rem solid transparent;
  border-left: 1rem solid white;
`;

// Add media queries here if needed
