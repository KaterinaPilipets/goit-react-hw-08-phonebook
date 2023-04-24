import { Label, Input } from './Filter.styled';
import { selectFilter } from 'redux/contacts/selectors';
import { changeValue } from 'redux/contacts/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handlerChange = event => {
    dispatch(changeValue(event.currentTarget.value));
  };

  return (
    <Label>
      <Input
        type="text"
        value={filter}
        placeholder="Find contacts by name"
        name="filter"
        onChange={handlerChange}
      />
    </Label>
  );
}
export default Filter;
