import PropTypes from 'prop-types';

const Contact = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}:</span>
          <span>{number}</span>

          <button
            onClick={() => {
              onDelete(id);
            }}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Contact;
