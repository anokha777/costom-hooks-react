import { useState } from "react";
import useLocalstorage from "./useLocalstore";

const LocalstorageActions = () => {
  const [ value, setValue ] = useState<string>('');
  const { deleteItem, getItem, setItem } = useLocalstorage('key');

  return (
    <>
      <div>
        <label htmlFor="store">Store</label>
        <input type="text" id="store" name="store" onChange={(e: any) => setValue(e.target.value)} />
      </div>
      <button onClick={() => setItem(value)}>Set</button>
      <button onClick={() => console.log(getItem())}>Get</button>
      <button onClick={() => deleteItem()}>Remove</button>
    </>
  );
}

export default LocalstorageActions;