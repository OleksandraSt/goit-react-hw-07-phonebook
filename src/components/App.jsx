import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import {
  PhoneBook,
  PhonebookContainer,
  ContactsTitle,
  EmptyPhonebook,
} from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const normalizedFilter = filter.trim().toLowerCase();
  const filterContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhonebookContainer>
      <PhoneBook>Phonebook</PhoneBook>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      

      {filterContacts.length > 0 && <ContactList />}
      {filterContacts.length === 0 && !isLoading && !error && (
        <EmptyPhonebook>
          Phonebook is empty
        </EmptyPhonebook>
      )}
    </PhonebookContainer>
  );
};

export default App;