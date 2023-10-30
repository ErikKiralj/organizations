import React from 'react'

import { Box } from '../../Box'
import { Typography } from '../../Typography'

import { MenuItemProps } from './MenuItem.types'

import styles from './MenuItem.module.css'

export function MenuItem(props: MenuItemProps) {
    const { label } = props

    return (
        <Box className={styles.root}>
            <Typography
                className={styles.label}
                variant="large"
            >
                {label}
            </Typography>
        </Box>
    )
}
