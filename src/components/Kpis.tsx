import styled from 'styled-components';
import { BiBed } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
import {TbLogout} from 'react-icons/tb';
import {TbLogin} from 'react-icons/tb';

const KpisWrapper = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`
const KpiWrapper = styled.div`
    display: flex;
    align-items: center;
    width: 23%;
    height: 125px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
`
const IconWrapper = styled.div`
    display: flex;
    background-color: #FFEDEC;
    width: 65px;
    height: 65px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    margin-right: 20px;
`
const Icon = styled.span`
    font-size:xx-large;
    color: #E23428;
`
const TextWrapper = styled.div`
    display: block;
    font-family: 'Poppins', sans-serif;
`
const SpanNumber = styled.span`
  font-size: 30px;
  font-weight: 600;
`
const SpanTitle = styled.span`
  color: #787878;
  font-size: 14px;
  font-weight: 300;
`

export default function Kpis(){
    return (
      <KpisWrapper>
        <KpiWrapper>
          <IconWrapper>
            <Icon> <BiBed /></Icon>
          </IconWrapper>
          <TextWrapper>
             <SpanNumber>8,461</SpanNumber><br/><SpanTitle>Total Bookings</SpanTitle>
          </TextWrapper>
        </KpiWrapper>
        <KpiWrapper>
          <IconWrapper>
            <Icon><BsCalendarCheck /></Icon>
          </IconWrapper>
             <TextWrapper>
             <SpanNumber>963</SpanNumber><br/><SpanTitle>Scheduled Room</SpanTitle>
          </TextWrapper>
        </KpiWrapper>
        <KpiWrapper>
          <IconWrapper>
            <Icon><TbLogout /></Icon>
          </IconWrapper>
           <TextWrapper>
             <SpanNumber>753</SpanNumber><br/><SpanTitle>Check In</SpanTitle>
          </TextWrapper>
        </KpiWrapper>
        <KpiWrapper>
          <IconWrapper>
            <Icon><TbLogin /></Icon>
          </IconWrapper>
             <TextWrapper>
             <SpanNumber>516</SpanNumber><br/><SpanTitle>Check Out</SpanTitle>
          </TextWrapper>
        </KpiWrapper>
      </KpisWrapper>
    );
}