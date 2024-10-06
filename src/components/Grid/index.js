import React from "react";
import GridItem from "../GridItem";
import * as S from "./style";

const Grid = ({ itens, setItens }) => {
  const onDelete = (ID) => {
    const newArray = itens.filter((transaction) => transaction.id !== ID);
    setItens(newArray);
    localStorage.setItem("transactions", JSON.stringify(newArray));
  };

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th width={40}>Descrição</S.Th>
          <S.Th width={40}>Valor</S.Th>
          <S.Th width={10} alignCenter>
            Tipo
          </S.Th>
          <S.Th width={10}></S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {itens?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete} />
        ))}
      </S.Tbody>
    </S.Table>
  );
};

export default Grid;