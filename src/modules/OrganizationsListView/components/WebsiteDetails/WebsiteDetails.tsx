import React from 'react'
import Image from 'next/image'

import {
    ArrowDownIcon,
    ArrowRightIcon,
    Box,
    Checkbox,
    Status,
    Typography,
    useTableContext,
} from '../../../../components'
import { theme } from '../../../../shared'
import { useOrganizationsContext } from '../../OrganizationsContext'
import { SectionsDetails } from '../SectionsDetails'

import { ChunkSection, WebsiteDetailsProps } from './WebsiteDetails.types'

import styles from './WebsiteDetails.module.css'

const NO_SECTIONS_IN_CARD = 4

export function WebsiteDetails(props: WebsiteDetailsProps) {
    const { data } = props

    const store = useOrganizationsContext()
    const { columns } = useTableContext()

    const [isExpanded, setIsExpanded] = React.useState(false)

    const sectionIds = React.useMemo(() => data.sections.map((section) => section.id), [data.sections])

    const onExpandClick = () => {
        setIsExpanded((prevState) => !prevState)
    }

    const onWebsiteSelect = () => {
        store.toggleWebsiteSelectedSectionId(sectionIds)
    }

    const chunkedSections = React.useMemo(
        () =>
            data.sections.reduce((accumulator: ChunkSection[], currentValue, index) => {
                const chunkIndex = Math.floor(index / NO_SECTIONS_IN_CARD)

                accumulator[chunkIndex] = {
                    ...accumulator[chunkIndex],
                    chunk: [...(accumulator[chunkIndex]?.chunk ?? []), currentValue],
                    id: chunkIndex + 1,
                }

                return accumulator
            }, []),
        [data.sections],
    )

    return (
        <Box className={styles.root}>
            <Box
                className={styles.row}
                onClick={onExpandClick}
                style={{
                    gridTemplateColumns: columns,
                }}
            >
                <Box className={styles.cell}>
                    <Box className={styles.name}>
                        <Checkbox
                            checked={store.isWebsiteSelected(sectionIds)}
                            onChange={onWebsiteSelect}
                        />
                        {isExpanded ? (
                            <ArrowDownIcon fill={theme.colors.accentsBlue} />
                        ) : (
                            <ArrowRightIcon fill={theme.colors.shade4} />
                        )}
                        <Image
                            alt="website-placeholder"
                            height={16}
                            src="/images/website-placeholder.png"
                            width={16}
                        />
                        <Typography variant="large">{data.name}</Typography>
                    </Box>
                </Box>
                <Box className={styles.cell}>
                    <Typography variant="large">{data.sections.length}</Typography>
                </Box>
                <Box className={styles.cell}>
                    <Status status={data.status} />
                </Box>
            </Box>
            {isExpanded ? (
                <Box className={styles.sections}>
                    <Box className={styles.sectionsTitle}>
                        <Typography className={styles.title}>WEBSITE SECTIONS</Typography>
                    </Box>
                    <Box className={styles.sectionsContainer}>
                        {chunkedSections.map((chunk) => (
                            <SectionsDetails
                                data={chunk.chunk}
                                key={chunk.id}
                            />
                        ))}
                    </Box>
                </Box>
            ) : null}
        </Box>
    )
}
