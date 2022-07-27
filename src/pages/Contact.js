import {
  AllWrapper,
  SubWrapper,
  HeaderTableWrapper,
  Table,
} from "../styles/Styles";
import ContactsDiv from "../components/ContactsDiv";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Select from "../components/Select";
import { ButtonArchive } from "../components/Buttons";
import {
  getContact,
  allContact,
  createContact,
} from "../features/slices/contactSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Contact() {
  const menuOptions = ["All Contacts", "Archived"];
  const selectOptions = ["Newest", "Guest"];

  const dispatch = useDispatch();
  const contactList = useSelector(allContact);

  useEffect(() => {
    dispatch(getContact());
  }, []);

  return (
    <AllWrapper>
      <ContactsDiv />
      <SubWrapper>
        <HeaderTableWrapper>
          <Header menuOptions={menuOptions} />
          <Select selectOptions={selectOptions} />
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
            {contactList.map((contact) => (
              <tr key={contact._id}>
                <td>
                  {contact._id}
                  <br />
                  {contact.date}
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
