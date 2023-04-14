import { useState } from 'react';
import { Form, Label, Input, ButtonAdd } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleChange = e => {
        const { name, value } = e.target;
    
        switch (name) {
          case 'name':
            setName(value);
            break;
    
          case 'number':
            setNumber(value);
            break;
    
          default:
            throw new Error("There is no such option");
        }
      };

      const handleSubmit = e => {
        e.preventDefault();
        const enterContacts = contacts.some(
          contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number
        );
        enterContacts
          ? alert(`${name} or ${number} is already in contacts`)
          : dispatch(addContact(name, number));
        resetForm();
      };
      
      const resetForm = () => {
        setName('');
        setNumber('');
      };

      return (
        <Form onSubmit={handleSubmit}>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={handleChange}
            />
          </Label>
    
          <Label>
            Number
            <Input
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={handleChange}
            />
          </Label>
    
          <ButtonAdd type="submit">Add contact</ButtonAdd>
        </Form>
      );
    };

    export default ContactForm;