import { Label, Input } from './Filter.styled';

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
