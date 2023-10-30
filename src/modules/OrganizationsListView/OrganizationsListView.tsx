'use client'

import React from 'react'

import { Box, Checkbox, Table, TableHeaderCell, TableRow, Typography } from '../../components'
import { getDataSelectionType, theme, usePaginatedQuery } from '../../shared'

import { WebsiteDetails } from './components'
import { useOrganizationsContext } from './OrganizationsContext'

import styles from './OrganizationsListView.module.css'

export function OrganizationsListView() {
    const store = useOrganizationsContext()

    const { actions, data, error, loading, pageInfo } = usePaginatedQuery({
        url: 'https://demo-api.dotmetrics.net/v1/public/organizations/list',
    })

    const sectionIds = React.useMemo(
        () =>
            data?.result.flatMap((organization) =>
                organization.websites.flatMap((website) => website.sections.map((section) => section.id)),
            ) ?? [],
        [data],
    )

    const onSelectAll = () => {
        store.toggleWebsiteSelectedSectionId(sectionIds)
    }

    return (
        <Box className={styles.root}>
            <Table
                autoExpandFirstRow
                errorMessage={error}
                gridTemplateColumns="minmax(300px, 2fr) repeat(2, minmax(100px, 1fr))"
                headers={
                    <>
                        <TableHeaderCell>
                            <Checkbox
                                checked={getDataSelectionType(store.selectedSectionIds, sectionIds)}
                                onChange={onSelectAll}
                            />
                            <Typography variant="small">WEBSITE</Typography>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <Typography variant="small">SECTIONS</Typography>
                        </TableHeaderCell>
                        <TableHeaderCell>
                            <Typography variant="small">STATUS</Typography>
                        </TableHeaderCell>
                    </>
                }
                loading={loading}
                onNextPage={actions.nextPage}
                onPageSizeChange={actions.changePageSize}
                onPreviousPage={actions.previousPage}
                pageInfo={pageInfo}
            >
                {data?.result.map((organization) => (
                    <TableRow
                        expandableContent={organization.websites.map((website) => (
                            <WebsiteDetails
                                data={website}
                                key={website.id}
                            />
                        ))}
                        isExpandable
                        key={organization.id}
                        overrideTableTemplateColumns="16px 300px"
                    >
                        <Typography style={{ color: theme.colors.shade1 }}>{organization.name}</Typography>
                    </TableRow>
                ))}
            </Table>
        </Box>
    )
}
