import React, { useState } from 'react'

import { Box } from '../Box'

import { TooltipProps } from './Tooltip.types'

import styles from './Tooltip.module.css'

export function Tooltip(props: TooltipProps) {
    const { children, content } = props

    const [isVisible, setIsVisible] = useState(false)

    const toggleShowHideTooltip = () => {
        setIsVisible((prevState) => !prevState)
    }

    return (
        <Box
            className={styles.root}
            onMouseEnter={toggleShowHideTooltip}
            onMouseLeave={toggleShowHideTooltip}
        >
            {children}
            {isVisible && (
                <Box className={styles.tooltip}>
                    <Box className={styles.arrow} />
                    {content}
                </Box>
            )}
        </Box>
    )
}
