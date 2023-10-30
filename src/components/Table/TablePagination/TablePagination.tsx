import React from 'react'

import { theme, useHandleClickOutside } from '../../../shared'
import { Box } from '../../Box'
import { ArrowDownIcon, PageNextIcon, PagePreviousIcon } from '../../Icons'
import { Typography } from '../../Typography'

import { TablePaginationProps } from './TablePagination.types'

import styles from './TablePagination.module.css'

const PAGE_SIZES = [25, 50, 100, 150]
export function TablePagination(props: TablePaginationProps) {
    const { onNextPage, onPageSizeChange: onPageSizeChangeProp, onPreviousPage, pageData } = props

    const [pageSize, setPageSize] = React.useState(25)
    const [isPageSizeMenuOpen, setIsPageSizeMenuOpen] = React.useState(false)

    const toggleIsPageSizeMenuOpen = () => {
        setIsPageSizeMenuOpen((prevState) => !prevState)
    }

    const { ref } = useHandleClickOutside(toggleIsPageSizeMenuOpen)

    const onPageSizeChange = (value: number) => {
        setPageSize(value)
        onPageSizeChangeProp(value)
    }

    return (
        <Box className={styles.root}>
            <Typography>Show rows:</Typography>
            <Box
                className={styles.pageSelect}
                onClick={toggleIsPageSizeMenuOpen}
            >
                <Typography>{pageSize}</Typography>
                <ArrowDownIcon fill={theme.colors.shade4} />
                {isPageSizeMenuOpen ? (
                    <Box
                        className={styles.pageOptions}
                        ref={ref}
                    >
                        {PAGE_SIZES.map((size) => (
                            <Box
                                className={styles.item}
                                key={size}
                                onClick={() => {
                                    onPageSizeChange(size)
                                }}
                            >
                                <Typography className={styles.itemLabel}>{size}</Typography>
                            </Box>
                        ))}
                    </Box>
                ) : null}
            </Box>
            <Box className={styles.divider} />
            <Typography className={styles.stats}>
                {`${pageData.fromItem} - ${pageData.toItem} of ${pageData.totalCount}`}
            </Typography>
            <Box className={styles.actions}>
                <button
                    className={styles.action}
                    disabled={!pageData.hasPreviousPage}
                    onClick={onPreviousPage}
                    type="button"
                >
                    <PagePreviousIcon fill={theme.colors.shade4} />
                </button>
                <Box className={styles.divider} />
                <button
                    className={styles.action}
                    disabled={!pageData.hasNextPage}
                    onClick={onNextPage}
                    type="button"
                >
                    <PageNextIcon fill={theme.colors.shade4} />
                </button>
            </Box>
        </Box>
    )
}
