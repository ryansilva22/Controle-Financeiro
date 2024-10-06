import React from 'react'
import * as S from "./style"
import ResumeItem from '../Resumeitem';
import { FaDollarSign, FaRegArrowAltCircleDown, FaRegArrowAltCircleUp } from 'react-icons/fa';

const Resume = ({income, expense, total}) => {
  return (
    <S.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense} />
        <ResumeItem title="Total" Icon={FaDollarSign} value={total} />
    </S.Container>
  )
}

export default Resume;
