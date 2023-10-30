import React from 'react'

import { Box } from '../../Box'

import { TableHeaderCellProps } from './TableHeaderCell.types'

import styles from './TableHeaderCell.module.css'

export function TableHeaderCell(props: TableHeaderCellProps) {
    const { children } = props

    return <Box className={styles.root}>{children}</Box>
}
