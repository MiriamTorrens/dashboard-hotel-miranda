import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import user from '../img/user.png';

export const Container = styled.div`
  width: 350px;
  background-color: white;
`
export const Nav = styled.nav`
    margin-top: 40px;
`
export const DivLink = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 67px;
    margin-bottom: 10px;
    border-left: 10px solid white;
    color: #799283;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    &:hover{
        color: #E23428;
        border-left: 10px solid #E23428;
        border-radius: 5px;
        a:visited{
            color:red;
        }
    }

`
export const StyledNavLink = styled(NavLink)`
    font-size: 18px;
    margin-left: 20px;
    text-decoration: none;
    color: #799283;
    margin-top: 5;
`
export const ContainerUser = styled.div`
    width: 233px;
    height: 221px;
    margin-left:46px;
    margin-top: 50px;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 20px 30px #00000014;
    border-radius: 18px;
    text-align: center;
`
export const ImgUser = styled.div`
    background-image: url(${user});
    background-repeat: no-repeat;
    background-size: cover;
    background-size: 100% 100%;
    background-position: center;
    width: 70px;
    height: 70px;
    margin: 0 auto;
    background-color: #C5C5C5;
    border-radius: 8px;
    margin-bottom: 10px;
`
export const ButtonContact = styled.button`
    font-size: 14px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    width: 158px;
    height: 47px;
    background: #ebf1ee;
    color: #135846;
    border-radius: 8px;
    border: none;
    margin-top: 20px;
    &:hover{
        filter: brightness(0.97);
    };
`
export const UserName = styled.span`
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
`
export const UserEmail = styled.span`
    font-size: 12px;
    font-weight: 300;
    font-family: 'Poppins', sans-serif;
`
export const Texts = styled.div`
    width: 260px;
    margin-left: 50px;
    margin-top: 55px;
    font-family: 'Poppins', sans-serif;
`
export const StyleIcons = {
    marginLeft: 63,
    fontSize: 'xx-large'
}
export const StyleSubtitle = {
    fontSize: 14, 
    color: '#799283',
}