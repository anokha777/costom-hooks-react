const useLocalstorage = (key: string) => {
  const setItem = (value: unknown) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch(e) {
      console.error("Error: ", e);
    }
  }
  const getItem = () => {
    try {
      return window.localStorage.getItem(key);
    }  catch(e) {
      console.error("Error: ", e);
    }
  }

  const deleteItem = () => {
    try{
      window.localStorage.removeItem(key);
    } catch(e) {
      console.error("Error: ", e);
    }
  }

  return { deleteItem, getItem, setItem };
};

export default useLocalstorage;