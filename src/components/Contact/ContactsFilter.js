import PropTypes from 'prop-types';

const ContactsFilter = ({ value, onChange }) => {
  return (
    <label>
      Filter contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

ContactsFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactsFilter;
