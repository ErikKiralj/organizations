import { PageInfo } from '../../types'
import { UseQueryData } from '../useQuery/useQuery.types'

export type UsePaginatedQueryProps = {
    pageSize?: number
    url: string
}

export type UsePaginatedQueryActions = {
    changePageSize(value: number): void
    nextPage(): void
    previousPage(): void
    resetPage(): void
}

export type UsePaginatedQueryResult = {
    actions: UsePaginatedQueryActions
    data: UseQueryData | null
    error: string | null
    loading: boolean
    pageInfo: PageInfo
}
