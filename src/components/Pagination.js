import styled from 'styled-components';

const ContainerPagination = styled.div`
width: 100%;
margin-top: 50px;
display: flex;
justify-content: space-between;
font-size: 16px;
font-family: 'Poppins', sans-serif;
`
const ButtonPagination = styled.button`
background-color: white;
border-color:#135846;
border-radius: 12px;
color:#135846;
width: 91px;
height: 52px;
margin-left:10px;
`
export default function Pagination(){
    return(
        <ContainerPagination>
            <span>Showing 10 of 10 Data</span>
            <div>
                <ButtonPagination>Prev</ButtonPagination>
                <ButtonPagination>Next</ButtonPagination>
            </div>
        </ContainerPagination>
    )
}