import React, { useState } from "react";
import * as S from "./styles";

import fotoAcao1 from "../../../public/imagemProjeto1.jpeg";
import fotoAcao2 from "../../../public/imagemProjeto2.jpeg";
import fotoAcao3 from "../../../public/imagemProjeto3.jpeg";
import fotoAcao4 from "../../../public/imagemProjeto4.jpeg";

const Carrossel = () => {
  const [testee, setTestee] = useState(0);

  const lista2 = [
    fotoAcao1.src,
    fotoAcao2.src,
    fotoAcao3.src,
    fotoAcao4.src
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
