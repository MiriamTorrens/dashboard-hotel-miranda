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
import { ButtonArchive } from "../components/Buttons";
import { getContact, allContact } from "../features/slices/contactSlice";
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
        <Table>
          <thead>
            <tr>
              <th>ID / Date</th>
              <th>Customer</th>
              <th>Comment</th>
              <th>Archive</th>
            </tr>
          </thead>
          <tbody style={{ verticalAlign: "top" }}>
            {contactState.map((contact) => (
              <tr key={contact.id}>
                <td>
                  {contact.id}
                  <br />
                  {contact.date}
                </td>
                <td>
                  {contact.customer.fullName}
                  <br />
                  {contact.customer.email}
                  <br />
                  {contact.customer.phoneNumber}
                  <br />
                </td>
                <td style={{ width: 600 }}>{contact.comment}</td>
                <td>
                  <ButtonArchive />
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
