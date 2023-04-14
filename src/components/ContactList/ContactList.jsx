import {
    ListItem,
    ContactContainer,
  } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';

const ContactList = () => {
    const visibleContacts = useSelector(selectVisibleContacts);
  
    return (
      <ContactContainer>
        {visibleContacts.map(({ id, name, phone }) => (
          <ListItem key={id}>
            <ContactItem id={id} name={name} phone={phone} />
          </ListItem>
        ))}
      </ContactContainer>
    );
  };
  
  export default ContactList;