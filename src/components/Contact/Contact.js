import PropTypes from 'prop-types';

const Contact = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}:</span>
          <span>{number}</span>

          <button type="button">Delete</button>
        </li>
      ))}
    </ul>
  );
};

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Contact;
