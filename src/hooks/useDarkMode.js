import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js"

const useDarkMode = () {
  const [On, setOn] = useLocalStorage('darkModeOn')
  useEffect(() => {
    if (useLocalStorage() === 'darkModeOn') {
      return document.getElementByTagName("body").className = "dark-mode";
    } else {
      return document.getElementByTagName("body").classList.remove = "dark-mode"; 
    }
  })
}

myStyle.insertRule('#blanc { color: white }', 0);
