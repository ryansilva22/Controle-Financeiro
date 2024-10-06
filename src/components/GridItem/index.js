import React from "react";
import * as S from "./style";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <S.Tr>
      <S.Td>{item.desc}</S.Td>
      <S.Td>{item.amount}</S.Td>
      <S.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </S.Td>
      <S.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </S.Td>
    </S.Tr>
  );
};

export default GridItem;