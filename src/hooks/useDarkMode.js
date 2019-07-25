import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js"

const useDarkMode = () {
  const [on, setOn] = useLocalStorage('darkModeOn')
  useEffect(() => {
    if (useLocalStorage() === 'darkModeOn') {
      document.getElementByTagName("body").classList.add = "dark-mode";
      return T;
    } else {
      document.getElementByTagName("body").classList.remove = "dark-mode";
      return F;
    }
  }, []);

  return [useLocalStorage({name}), useLocalStorage({name.value})
}
