import React from 'react'

import { SelectionTypeEnum } from '../../shared'
import { Box } from '../Box'
import { CheckIcon } from '../Icons'

import { CheckboxProps } from './Checkbox.types'

import styles from './Checkbox.module.css'

export function Checkbox(props: CheckboxProps) {
    const { checked, onChange } = props

    const toggleChecked = (event: React.MouseEvent) => {
        event.stopPropagation()
        onChange()
    }

    return (
        <Box
            className={styles.root}
            onClick={toggleChecked}
            style={{ backgroundColor: checked === SelectionTypeEnum.COMPLETE ? 'blue' : 'transparent' }}
        >
            {checked === SelectionTypeEnum.COMPLETE ? <CheckIcon fill="white" /> : null}
            {checked === SelectionTypeEnum.INDETERMINATE ? <div className={styles.dash} /> : null}
        </Box>
    )
}
