import React from 'react'

import { Box } from '../Box'
import { Typography } from '../Typography'

import { TableProps } from './Table.types'
import { TableContext, TableContextValue } from './TableContext'
import { TablePagination } from './TablePagination'
import { TableRowProps } from './TableRow'

import styles from './Table.module.css'

export function Table(props: TableProps) {
    const {
        autoExpandFirstRow = false,
        children,
        errorMessage,
        gridTemplateColumns,
        headers,
        loading,
        onNextPage,
        onPageSizeChange,
        onPreviousPage,
        pageInfo,
    } = props

    const ref = React.useRef<HTMLDivElement>(null)

    const tableContext: TableContextValue = React.useMemo(
        () => ({
            columns: gridTemplateColumns,
        }),
        [gridTemplateColumns],
    )

    return (
        <TableContext.Provider value={tableContext}>
            <Box className={styles.root}>
                <Box
                    className={styles.table}
                    ref={ref}
                >
                    <Box
                        className={styles.header}
                        style={{ gridTemplateColumns }}
                    >
                        {headers}
                    </Box>
                    <Box className={styles.content}>
                        {loading ? (
                            <Box className={styles.loader} />
                        ) : (
                            React.Children.map(children, (child, index) => {
                                if (index === 0 && React.isValidElement(child)) {
                                    return React.cloneElement(child as React.ReactElement<TableRowProps>, {
                                        isAutoExpanded: autoExpandFirstRow,
                                    })
                                }
                                return child
                            })
                        )}
                        {errorMessage ? <Typography>{errorMessage}</Typography> : null}
                    </Box>
                </Box>
                <TablePagination
                    onNextPage={onNextPage}
                    onPageSizeChange={onPageSizeChange}
                    onPreviousPage={onPreviousPage}
                    pageData={pageInfo}
                />
            </Box>
        </TableContext.Provider>
    )
}
