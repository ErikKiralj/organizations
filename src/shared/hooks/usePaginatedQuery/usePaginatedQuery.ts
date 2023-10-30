import React from 'react'

import { PageInfo } from '../../types'
import { useQuery } from '../useQuery'

import { UsePaginatedQueryProps, UsePaginatedQueryResult } from './usePaginatedQuery.types'

export const usePaginatedQuery = (props: UsePaginatedQueryProps): UsePaginatedQueryResult => {
    const { pageSize: pageSizeProp = 25, url } = props

    const [page, setPage] = React.useState(1)
    const [pageSize, setPageSize] = React.useState(pageSizeProp)

    const { data, error, loading } = useQuery(`${url}?pageSize=${pageSize}&page=${page}`)

    const pageInfo = React.useMemo((): PageInfo => {
        if (!data) {
            return {
                fromItem: 0,
                hasNextPage: false,
                hasPreviousPage: false,
                toItem: 0,
                totalCount: 0,
            }
        }

        const hasNextPage = !(data.result.length < pageSize) || pageSize * page === data['total-count']
        const hasPreviousPage = page !== 1

        return {
            fromItem: page === 1 ? 1 : pageSize * (page - 1),
            hasNextPage,
            hasPreviousPage,
            toItem: hasNextPage ? pageSize * page : data['total-count'],
            totalCount: data['total-count'],
        }
    }, [data])

    const resetPage = () => {
        setPage(1)
    }
    const changePageSize = (size: number) => {
        if (error) {
            return
        }

        setPageSize(size)
        resetPage()
    }

    const nextPage = () => {
        if (!pageInfo.hasNextPage) {
            return
        }

        setPage((prevState) => prevState + 1)
    }

    const previousPage = () => {
        if (!pageInfo.hasPreviousPage) {
            return
        }
        setPage((prevState) => prevState - 1)
    }

    return {
        actions: {
            changePageSize,
            nextPage,
            previousPage,
            resetPage,
        },
        data,
        error,
        loading,
        pageInfo,
    }
}
