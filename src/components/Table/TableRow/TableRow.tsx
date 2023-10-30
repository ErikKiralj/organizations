import React from 'react'

import { theme } from '../../../shared'
import { Box } from '../../Box'
import { ArrowDownIcon, ArrowRightIcon } from '../../Icons'
import { useTableContext } from '../TableContext'

import { TableRowProps } from './TableRow.types'

import styles from './TableRow.module.css'

export function TableRow(props: TableRowProps) {
    const {
        children,
        expandableContent,
        isAutoExpanded = false,
        isExpandable = false,
        overrideTableTemplateColumns,
    } = props

    const { columns } = useTableContext()

    const [isExpanded, setIsExpanded] = React.useState(isAutoExpanded)

    const onClick = () => {
        setIsExpanded((prevState) => !prevState)
    }

    const ArrowIcon = React.useMemo(() => {
        if (isExpandable) {
            if (isExpanded) {
                return <ArrowDownIcon fill={theme.colors.accentsBlue} />
            }
            return <ArrowRightIcon fill={theme.colors.shade4} />
        }
        return <span />
    }, [isExpandable, isExpanded])

    return (
        <Box className={styles.root}>
            <Box
                className={styles.row}
                onClick={onClick}
                style={{
                    cursor: isExpandable ? 'pointer' : 'default',
                    gridTemplateColumns: overrideTableTemplateColumns ?? columns,
                }}
            >
                {ArrowIcon}
                {children}
            </Box>
            {isExpandable && isExpanded ? expandableContent : null}
        </Box>
    )
}
