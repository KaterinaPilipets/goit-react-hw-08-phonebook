import { Label, Input } from './Filter.styled';
import { selectFilter } from 'redux/selectors';
import { changeValue } from 'redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handlerChange = event => {
    dispatch(changeValue(event.currentTarget.value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        value={filter}
        placeholder="Seach"
        name="filter"
        onChange={handlerChange}
      />
    </Label>
  );
}
export default Filter;
