import { Organization } from '../../types'

export type UseQueryResult = {
    data: UseQueryData | null
    error: string | null
    loading: boolean
}

export type UseQueryData = {
    result: Organization[]
    'total-count': number
}
