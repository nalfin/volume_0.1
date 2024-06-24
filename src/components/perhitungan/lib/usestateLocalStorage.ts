import { useEffect, useState } from 'react'

const useStateLocalStorage = () => {
    const [namaPilecap, setNamaPilecap] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('namaPilecap') || ''
        }
        return ''
    })
    useEffect(() => {
        localStorage.setItem('namaPilecap', namaPilecap)
    }, [namaPilecap])

    const [namaPedestal, setNamaPedestal] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('namaPedestal') || ''
        }
        return ''
    })
    useEffect(() => {
        localStorage.setItem('namaPedestal', namaPedestal)
    }, [namaPedestal])

    return {
        namaPilecap,
        setNamaPilecap,
        namaPedestal,
        setNamaPedestal
    }
}

export default useStateLocalStorage
