import React from 'react'

import { useHandleClickOutside, useWindowPositionExceeded } from '../../shared'
import { Box } from '../Box'
import { Typography } from '../Typography'

import { MenuProps } from './Menu.types'

import styles from './Menu.module.css'

export function Menu(props: MenuProps) {
    const { children, title } = props

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const toggleMenuOpen = () => {
        setIsMenuOpen((prevState) => !prevState)
    }

    const { ref } = useHandleClickOutside(toggleMenuOpen)

    const { exceedsWindowPosition, ref: menuRef } = useWindowPositionExceeded({
        axis: 'innerWidth',
        deps: [isMenuOpen],
        threshold: 0.5,
    })

    return (
        <Box
            className={styles.root}
            ref={menuRef}
        >
            <Box
                className={styles.dots}
                onClick={toggleMenuOpen}
            >
                <Box className={styles.dot} />
                <Box className={styles.dot} />
                <Box className={styles.dot} />
            </Box>
            {isMenuOpen ? (
                <Box
                    className={`${styles.menu} ${exceedsWindowPosition ? styles.right : styles.left}`}
                    ref={ref}
                >
                    <Box className={styles.menuTitle}>
                        <Typography className={styles.title}>{title.toUpperCase()}</Typography>
                    </Box>
                    {children}
                </Box>
            ) : null}
        </Box>
    )
}
