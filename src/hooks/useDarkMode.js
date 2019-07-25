import React, { useEffect } from "react";
import useLocalStorage from "./useLocalStorage.js"

const useDarkMode = () {
  const [On, setOn] = useLocalStorage('darkModeOn')
  useEffect(() => {
    if (useLocalStorage() === 'darkModeOn') {
      return styles.insertRule(body { .darkmode });
    } else {
      
    }
  })
}

myStyle.insertRule('#blanc { color: white }', 0);
