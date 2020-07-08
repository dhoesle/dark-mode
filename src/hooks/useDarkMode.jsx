import { useLocalStorage } from './useLocalStorage'
import { useEffect } from 'react'

export const useDarkMode = (key) => {
    const [darkMode, setDarkMode] = useLocalStorage(key)

    useEffect(() => {

    })
  

    return [darkMode]
}