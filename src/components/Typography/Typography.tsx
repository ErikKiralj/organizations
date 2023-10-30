import React from 'react'

import type { TypographyProps } from './Typography.types'

import styles from './Typography.module.css'

export function Typography(props: TypographyProps) {
    const { children, className, variant = 'medium', ...other } = props

    return (
        <span
            {...other}
            className={`${styles[variant]} ${styles.root} ${className}`}
        >
            {children}
        </span>
    )
}
