import React from 'react'

import { getStatusColor, StatusEnum } from '../../shared'
import { Box } from '../Box'
import { Typography } from '../Typography'

import { StatusProps } from './Status.types'

import styles from './Status.module.css'

export function Status(props: StatusProps) {
    const { hideLabel = false, status } = props

    const style = React.useMemo(() => getStatusColor(status), [status])

    return (
        <Box className={styles.root}>
            <Box
                className={styles.indicator}
                style={{
                    backgroundColor: style.backgroundColor,
                    border: `1px solid ${style.borderColor}`,
                }}
            />
            {!hideLabel ? <Typography variant="large">{StatusEnum[status]}</Typography> : null}
        </Box>
    )
}
