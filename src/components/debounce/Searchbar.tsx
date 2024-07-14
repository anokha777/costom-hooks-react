interface ISearchbarProps {
  onChange: (value: string) => void;
}

const Searchbar = ({onChange}: ISearchbarProps) => {
  return (
    <div>
      <label htmlFor="search">Search</label>
      <input type="text" id="search" name="search" onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

export default Searchbar;
