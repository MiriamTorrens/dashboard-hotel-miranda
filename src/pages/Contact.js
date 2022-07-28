import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
  SelectDiv,
  HeaderTab,
  Tab,
  MenuOptions,
  Archived,
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
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getContact());
  }, [dispatch]);

  useEffect(() => {
    setContactState(contactList);
  }, [contactList]);

  const handleChange = (order) => {
    setOrder(order);
    const sortedContact = [...contactState];
    const orderKeys = {
      newest: "contact_date",
      guest: "contact_name",
    };
    sortedContact.sort((a, b) => {
      if (a[orderKeys[order]] < b[orderKeys[order]]) {
        return -1;
      } else if (a[orderKeys[order]] > b[orderKeys[order]]) {
        return 1;
      } else {
        return 0;
      }
    });

    setContactState(sortedContact);
  };
  return (
    <AllWrapper>
      <ContactsDiv />
      <SubWrapper>
        <HeaderTableWrapper>
          <HeaderTab>
            <Tab>
              <MenuOptions onClick={() => setContactState(contactList)}>
                All Contacts
              </MenuOptions>
              <MenuOptions
                onClick={() =>
                  setContactState(
                    contactList.filter((contact) => contact.archived === true)
                  )
                }
              >
                Archived
              </MenuOptions>
            </Tab>
          </HeaderTab>
          <SelectDiv
            value={order}
            onChange={(e) => handleChange(e.target.value)}
          >
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
              <tr key={contact._id}>
                <td>
                  {contact._id}
                  <br />
                  {contact.contact_date}
                </td>
                <td>
                  {contact.contact_name}
                  <br />
                  {contact.contact_email}
                  <br />
                  {contact.contact_phone}
                  <br />
                </td>
                <td style={{ width: 600 }}>{contact.comment}</td>
                <td>
                  {contact.archived === true ? <Archived /> : <ButtonArchive />}
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
