import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={style.contactsList}>
        {contacts.map(({ id, name, phone }) => (
          <li className={style.contactsListItem} key={id}>
            {name}: {phone}
            <button
              className={style.btn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
