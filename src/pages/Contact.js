import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
  HeaderTab,
  Tab,
  MenuOPtions,
  SelectDiv,
} from "../styles/Styles";
import ContactsDiv from "../components/ContactsDiv";
import Pagination from "../components/Pagination";
import { ButtonArchive, ButtonArchived } from "../components/Buttons";
import {
  getContact,
  allContact,
  updateContact,
} from "../features/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Contact() {
  const dispatch = useDispatch();
  const contactList = useSelector(allContact);
  const [contactState, setContactState] = useState([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("newest");

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  useEffect(() => {
    const keysOrder = {
      newest: "date",
      guest: "customer.fullName",
    };
    const filteredOrderContact = contactList.filter((user) =>
      user.archived.includes(filter)
    );
    filteredOrderContact.sort((a, b) => {
      if (a[keysOrder[order]] > b[keysOrder[order]]) {
        return 1;
      } else if (a[keysOrder[order]] < b[keysOrder[order]]) {
        return -1;
      } else {
        return 0;
      }
    });
    setContactState(filteredOrderContact);
  }, [contactList, filter, order]);

  const handleClick = (contact) => {
    dispatch(
      updateContact({
        id: contact.id,
        date: contact.date,
        customer: {
          fullName: contact.customer.fullName,
          email: contact.customer.email,
          phoneNumber: contact.customer.phoneNumber,
        },
        subject: contact.subject,
        comment: contact.comment,
        viewed: contact.viewed,
        archived: "true",
      })
    );
  };

  return (
    <AllWrapper>
      <ContactsDiv />
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOPtions onClick={(e) => setFilter("")}>
                All Contacts
              </MenuOPtions>
              <MenuOPtions onClick={(e) => setFilter("true")}>
                Archived
              </MenuOPtions>
            </Tab>
          </HeaderTab>
          <SelectDiv value={order} onChange={(e) => setOrder(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="guest">Guest</option>
          </SelectDiv>
        </HeaderTableWrapper>
        <Table style={{ borderSpacing: "40px 5px" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Customer</th>
              <th>Comment</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody style={{ verticalAlign: "top" }}>
            {contactState.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.date}</td>
                <td>
                  {contact.customer.fullName}
                  <br />
                  {contact.customer.email}
                  <br />
                  {contact.customer.phoneNumber}
                  <br />
                </td>
                <td>{contact.comment}</td>
                <td>
                  {contact.archived === "true" ? (
                    <ButtonArchived />
                  ) : (
                    <ButtonArchive onClick={() => handleClick(contact)} />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Pagination />
      </SubWrapper>
    </AllWrapper>
  );
}
