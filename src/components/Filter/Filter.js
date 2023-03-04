import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';
export function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={value}
        placeholder="Seach"
        name="filter"
        onChange={onChange}
      />
    </Label>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
