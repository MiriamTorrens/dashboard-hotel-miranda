import styled from "styled-components";

export const ButtonArchive = styled.button`
  background-color: #135846;
  color: white;
  width: 150px;
  height: 48px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  ::before {
    content: "Archive";
  }
`;

export const ButtonArchived = styled.button`
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
  cursor: pointer;
  ::before {
    content: "Archived";
  }
`;

export const ButtonNewBooking = styled.button`
  background-color: #135846;
  color: white;
  width: 150px;
  height: 49px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  cursor: pointer;
  ::before {
    content: "+ New Booking";
  }
`;
export const ButtonNewEmployee = styled.button`
  background-color: #135846;
  color: white;
  width: 150px;
  height: 49px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  cursor: pointer;
  ::before {
    content: "+ New Employee";
  }
`;
export const ButtonView = styled.button`
  background-color: #eef9f2;
  width: 100px;
  height: 48px;
  border-radius: 12px;
  border: none;
  margin-right: 20px;
  font-size: 14px;
  font-weight: 600;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  ::before {
    content: "View Notes";
  }
`;
