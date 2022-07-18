import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
`;
export const RoutesWrapper = styled.div`
  display: block;
  width: 100%;
`;
export const AllWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 5px;
`;
export const LogoWrapper = styled.div`
  width: 400px;
  height: 350px;
  text-align: center;
  box-shadow: 5px 10px 20px 30px #00000014;
  margin: 0 auto;
  margin-top: 150px;
  border-radius: 18px;
`;
export const DashboardWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
`;
export const SubWrapper = styled.div`
  width: 95%;
  margin: 0 auto;
  margin-top: 50px;
`;
export const HeaderTableWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
`;
export const SelectDate = styled.select`
  background-color: #135846;
  width: 300px;
  height: 49px;
  border-radius: 12px;
  color: white;
  margin-right: 20px;
  text-align: center;
  font-size: 12px;
  font-family: "Poppins", sans-serif;
`;
export const Table = styled.table`
  margin-top: 30px;
  width: 100%;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  color: #393939;
  background-color: #ffffff;
  border-radius: 20px;
  text-align: left;
  border-spacing: 40px 5px;
  & tr {
    height: 65px;
  }
  & td {
    height: 121px;
  }
`;
