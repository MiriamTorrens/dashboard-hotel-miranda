import styled from 'styled-components';

export const ContainerAll = styled.div`
    background-color:#F8F8F8; 
    padding: 5px;
    margin-left: 30px;
`
export const ContainerDashboard = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
`
export const SubContainer = styled.div`
    width: 95%;
    margin: 0 auto;
    margin-top: 50px;
`
export const HeaderTab = styled.div`
    display: flex;
    justify-content: space-between;
  
`
export const Tab = styled.div`
    display: flex;
    color: #6E6E6E;
    height: 36px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    border-bottom: 1px solid #0000001A;
`
export const MenuOPtions = styled.span`
    margin-right: 70px;
    &:hover{
        color: #135846;
        cursor: pointer;
        border-bottom: 3px solid #135846;
    }
`
export const InputText = styled.input`
    border-color: #135846;
    border-radius: 5px;
    width: 200px;
    height: 40px;
    float: right;
    text-align: center;
`
export const SelectDate = styled.select`
    background-color: #135846;
    width: 427px;
    height: 49px;
    border-radius: 12px;
    color: white;
    margin-right: 20px;
    text-align: center;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
`
export const ContainerSelect = styled.div`
    float:right;
`
export const Select = styled.select`
    border-color: #135846;
    color:#135846;
    border-radius: 12px;
    width: 129px;
    height: 49px;
    text-align: center;
    font-size: 16px;
`
export const ButtonNew = styled.button`
    background-color: #135846;
    color: white;
    width: 213px;
    height: 49px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    cursor: pointer;
`
export const ButtonView = styled.button`
    background-color: #EEF9F2;
    width: 160px;
    height: 48px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
`