import React from 'react'

import { Box, Checkbox, Menu, MenuItem, Status, Tooltip, Typography } from '../../../../components'
import { StatusEnum } from '../../../../shared'
import { useOrganizationsContext } from '../../OrganizationsContext'

import { SectionsDetailsProps } from './SectionsDetails.types'

import styles from './SectionsDetails.module.css'

export function SectionsDetails(props: SectionsDetailsProps) {
    const { data } = props

    const store = useOrganizationsContext()

    const onSectionSelect = (id: number) => {
        store.toggleSelectedSectionId(id)
    }

    return (
        <Box className={styles.root}>
            {data.map((section) => (
                <Box
                    className={styles.row}
                    key={section.id}
                >
                    <Checkbox
                        checked={store.isSectionSelected(section.id)}
                        onChange={() => {
                            onSectionSelect(section.id)
                        }}
                    />
                    <Typography className={styles.name}>{section.name}</Typography>
                    <Tooltip content={<Typography>{StatusEnum[section.status]}</Typography>}>
                        <Status
                            hideLabel
                            status={section.status}
                        />
                    </Tooltip>
                    <Menu title="Generate tags as">
                        <MenuItem label="Numeric ID" />
                        <MenuItem label="Amp Code" />
                        <MenuItem label="String Code" />
                    </Menu>
                </Box>
            ))}
        </Box>
    )
}
