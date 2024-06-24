import { useState, useEffect } from 'react'

function useTableData(key: string) {
    const [data, setData] = useState<{
        nama?: string
        volume?: string
        semen?: string
        pasir?: string
        kerikil?: string
        air?: string
    } | null>(null)

    useEffect(() => {
        const storedData = localStorage.getItem(key)
        if (storedData) {
            setData(JSON.parse(storedData))
        }
    }, [key])

    useEffect(() => {
        if (data !== null) {
            localStorage.setItem(key, JSON.stringify(data))
        }
    }, [data, key])

    return [data, setData] as const
}

export default useTableData
