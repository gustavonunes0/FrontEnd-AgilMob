import React, { useState } from "react";
import * as S from "./styles";


const Carrossel = () => {
  const [testee, setTestee] = useState(0);

  const lista2 = [
    "/imagemProjeto1.jpeg",
    "/imagemProjeto2.jpeg",
    "/imagemProjeto3.jpeg",
    "/imagemProjeto4.jpeg"
  ];

  const avancar = () => {
    const tamanho = lista2.length - 1;
    if (testee === tamanho) {
      setTestee(testee - tamanho);
    } else {
      setTestee(testee + 1);
    }
  };

  const voltar = () => {
    const tamanho = lista2.length - 1;
    if (testee === 0) {
      setTestee(testee + tamanho);
    } else {
      setTestee(testee - 1);
    }
  };

  return (
    <S.SCarGalery>
      <S.SCarBtn
        id="SCarBtnLeft"
        className="SCarBtn"
        style={{ marginRight: "-2.5rem" }}
        onClick={voltar}
      >
        <S.TrianguloParaEsquerda />
      </S.SCarBtn>
      <S.SCarImg id="SCarImg" src={lista2[testee]} alt="IMGS" />
      <S.SCarBtn
        id="SCarBtnRight"
        className="SCarBtn"
        style={{ marginLeft: "-2.5rem" }}
        onClick={avancar}
      >
        <S.TrianguloParaDireita />
      </S.SCarBtn>
    </S.SCarGalery>
  );
};

export default Carrossel;
