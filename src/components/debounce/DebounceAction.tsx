import { useEffect, useState } from "react";
import Searchbar from "./Searchbar";
import useDebounce from "./useDebounce";
import { fetchUsers, User } from "./utils";

const DebounceAction = () => {
  const [search, setSearch] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const debounceSearch = useDebounce(search);
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const users = await fetchUsers(debounceSearch);
      setUsers(users);
      setLoading(false);
    }
    loadUsers();
  }, [debounceSearch]);

  return (
    <div>
      <Searchbar onChange={setSearch} />
      {loading && <>Loading...</>}
      {!loading &&
          users?.map(u => <div key={u.id}>{u.name}</div>)
      }
    </div>

  );
};

export default DebounceAction;
