import React from 'react'

import { PageInfo } from '../../shared'

export type TableProps = {
    autoExpandFirstRow?: boolean
    children: React.ReactNode
    errorMessage?: string | null
    gridTemplateColumns: string
    headers: React.ReactNode
    loading?: boolean
    onNextPage(): void
    onPageSizeChange(value: number): void
    onPreviousPage(): void
    pageInfo: PageInfo
}
