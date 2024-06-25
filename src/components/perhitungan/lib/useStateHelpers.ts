import { useState, useEffect } from 'react'

function useStateHelpers<T>(key: string, initialValue: T): [T, (value: T) => void] {
    // Mendapatkan nilai dari localStorage atau menggunakan nilai awal
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue
        }
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
    })

    // Menyimpan state ke localStorage setiap kali nilai berubah
    useEffect(() => {
        try {
            const valueToStore = JSON.stringify(storedValue)
            window.localStorage.setItem(key, valueToStore)
        } catch (error) {
            console.log(error)
        }
    }, [key, storedValue])

    return [storedValue, setStoredValue]
}

export default useStateHelpers
