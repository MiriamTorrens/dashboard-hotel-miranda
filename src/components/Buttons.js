import styled from 'styled-components';

export const ButtonArchive = styled.button`
    background-color: #135846;
    color: white;
    width: 160px;
    height: 48px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    font-size: 16px;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    ::before{
        content: 'Archive';
    } 
`
export const ButtonNewRoom = styled.button`
    background-color: #135846;
    color: white;
    width: 213px;
    height: 49px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
    ::before{
        content:"+ New Room"
    } 
`
export const ButtonNewEmployee = styled.button`
    background-color: #135846;
    color: white;
    width: 213px;
    height: 49px;
    border-radius: 12px;
    border: none;
    margin-right: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    cursor: pointer;
    ::before{
        content:"+ New Employee"
    } 
`
export const ButtonView = styled.button`
  background-color: #eef9f2;
  width: 160px;
  height: 48px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
  font-size: 16px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  ::before {
    content: "View Notes";
  }
`;