import styled from 'styled-components';
import { BiBed } from 'react-icons/bi';
import { BsCalendarCheck } from 'react-icons/bs';
import {TbLogout} from 'react-icons/tb';
import {TbLogin} from 'react-icons/tb';

const ContainerKpis = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`
const ContainerKpi = styled.div`
    display: flex;
    align-items: center;
    width: 23%;
    height: 125px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
`
const ContainerIcon = styled.div`
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

export default function Kpis(){
    return (
        <ContainerKpis>
        <ContainerKpi>
        <ContainerIcon><Icon><BiBed/></Icon></ContainerIcon>
        <div style={{display:'block'}}>
            <span style={{fontSize:30, fontWeight:600, fontFamily:'Poppins'}}>8,461</span><br/>
            <span style={{culor:'#787878', fontSize: 14, fontWeight: 300, fontFamily:'Poppins'}}>Total Bookings</span>
        </div>
        </ContainerKpi>
        <ContainerKpi>
        <ContainerIcon><Icon><BsCalendarCheck/></Icon></ContainerIcon>
        <div style={{display:'block'}}>
            <span style={{fontSize:30, fontWeight:600, fontFamily:'Poppins'}}>963</span><br/>
            <span style={{culor:'#787878', fontSize: 14, fontWeight: 300, fontFamily:'Poppins'}}>Scheduled Room</span>
        </div>
        </ContainerKpi>
        <ContainerKpi>
        <ContainerIcon><Icon><TbLogout/></Icon></ContainerIcon>
        <div style={{display:'block'}}>
            <span style={{fontSize:30, fontWeight:600, fontFamily:'Poppins'}}>753</span><br/>
            <span style={{culor:'#787878', fontSize: 14, fontWeight: 300, fontFamily:'Poppins'}}>Check In</span>
        </div>
        </ContainerKpi>
        <ContainerKpi>
        <ContainerIcon><Icon><TbLogin/></Icon></ContainerIcon>
        <div style={{display:'block'}}>
            <span style={{fontSize:30, fontWeight:600, fontFamily:'Poppins'}}>516</span><br/>
            <span style={{culor:'#787878', fontSize: 14, fontWeight: 300, fontFamily:'Poppins'}}>Check Out</span>
        </div>
        </ContainerKpi>
    </ContainerKpis>
    )
}