import React from 'react'

import { UseQueryResult } from './useQuery.types'

export const useQuery = (url: string): UseQueryResult => {
    const [data, setData] = React.useState(null)
    const [loading, setLoading] = React.useState(false)
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

    const fetchData = React.useCallback(async () => {
        setLoading(true)

        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error(response.statusText)
            }

            const json = await response.json()

            setLoading(false)
            setData(json)
            setErrorMessage(null)
        } catch (error) {
            setErrorMessage(`Error loading the requested data: ${error}`)
            setLoading(false)
        }
    }, [url])

    React.useEffect(() => {
        Promise.resolve(fetchData())
    }, [url])

    return {
        data,
        error: errorMessage,
        loading,
    }
}
