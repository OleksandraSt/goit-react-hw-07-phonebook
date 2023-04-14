import PropTypes from 'prop-types';
import {
    Contact,
    ButtonDelete
  } from './ContactItem.styled';
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/operations";

export const ContactItem = ({ id, name, phone }) => {
    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));
    return (
      <>    <Contact>
              {name}: {phone}{' '}
            </Contact>{' '}
            <ButtonDelete onClick={handleDelete}  >
              Delete
            </ButtonDelete>{' '}</>
    )
  
  }
  export default ContactItem;
  
  ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  };