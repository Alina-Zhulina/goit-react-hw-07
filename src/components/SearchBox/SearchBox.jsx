import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);
  const id = useId();

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.searchContainer}>
      <label htmlFor={id} className={css.labelSearch}>
        Find contacts by name
      </label>
      <input
        className={css.inputSearch}
        type="text"
        value={filter}
        onChange={handleFilterChange}
        id={id}
      />
    </div>
  );
};

export default SearchBox;
