export const Filter = ({ filter, onFilterChange }) => {
  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={onFilterChange} />
    </label>
  );
};
