import styled from 'styled-components';

const HeaderTab = styled.div`
    display: flex;
    justify-content: space-between;
  
`
const Tab = styled.div`
  display: flex;
  color: #6e6e6e;
  height: 36px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #0000001a;
`;
const MenuOPtions = styled.span`
    margin-right: 70px;
    &:hover{
        color: #135846;
        cursor: pointer;
        border-bottom: 3px solid #135846;
    }
`
export default function Header(props){
    return(
        <HeaderTab>
            <Tab>
                {props.menuOptions.map(option => (
                    <MenuOPtions key={option}>{option}</MenuOPtions>
                ))}
            </Tab>
        </HeaderTab>
    )
}