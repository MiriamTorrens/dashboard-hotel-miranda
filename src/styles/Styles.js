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
export const SelectDiv = styled.select`
  border-color: #135846;
  color: #135846;
  border-radius: 12px;
  width: 150px;
  height: 49px;
  text-align: center;
  font-size: 14px;
`;
export const InputText = styled.input`
  border-color: #135846;
  border-radius: 5px;
  width: 200px;
  height: 40px;
  text-align: center;
  margin-left: 15px;
`;
export const HeaderTab = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Tab = styled.div`
  display: flex;
  color: #6e6e6e;
  height: 36px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  border-bottom: 1px solid #0000001a;
`;
export const MenuOptions = styled.span`
  margin-right: 70px;
  &:hover {
    color: #135846;
    cursor: pointer;
    border-bottom: 3px solid #135846;
  }
`;

export const Archived = styled.button`
  background-color: white;
  color: #135846;
  width: 150px;
  height: 48px;
  border-radius: 12px;
  border: 1px solid #135846;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  ::before {
    content: "Archived";
  }
`;
