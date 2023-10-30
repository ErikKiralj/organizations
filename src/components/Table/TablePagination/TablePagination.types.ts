import { PageInfo } from '../../../shared'

export type TablePaginationProps = {
    onNextPage(): void
    onPageSizeChange(value: number): void
    onPreviousPage(): void
    pageData: PageInfo
}
