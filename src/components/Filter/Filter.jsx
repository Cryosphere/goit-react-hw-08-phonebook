import style from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <label className={style.label}>
      Find contacts by name
      <input
        className={style.input}
        type="name"
        value={filter}
        onChange={handleChangeFilter}
      />
    </label>
  );
};
