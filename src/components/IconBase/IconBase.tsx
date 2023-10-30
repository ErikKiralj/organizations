import React from 'react'

import { Box } from '../Box'

import { IconBaseProps } from './IconBase.types'

import styles from './IconBase.module.css'

export function IconBase(props: IconBaseProps) {
    const { children, viewBox = '0 0 16 16', ...other } = props

    return (
        <Box
            {...other}
            className={styles.root}
        >
            <svg viewBox={viewBox}>{children}</svg>
        </Box>
    )
}
