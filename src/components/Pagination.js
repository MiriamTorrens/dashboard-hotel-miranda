import styled from "styled-components";

const PaginationWrapper = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: "Poppins", sans-serif;
`;
const ButtonPagination = styled.button`
  background-color: white;
  border-color: #135846;
  border-radius: 12px;
  color: #135846;
  width: 70px;
  height: 40px;
  margin-left: 10px;
`;
export default function Pagination() {
  return (
    <PaginationWrapper>
      <span>Showing 10 of 10 Data</span>
      <div>
        <ButtonPagination>Prev</ButtonPagination>
        <ButtonPagination>Next</ButtonPagination>
      </div>
    </PaginationWrapper>
  );
}
