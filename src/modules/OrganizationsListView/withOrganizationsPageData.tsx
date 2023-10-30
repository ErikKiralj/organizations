'use client'

import React from 'react'

import { getDataSelectionType, SelectionTypeEnum } from '../../shared'

import { OrganizationsContext } from './OrganizationsContext'

export const withOrganizationsPageData = (WrappedComponent: React.ComponentType) => {
    function WithOrganizationsPageData() {
        const [selectedSectionIds, setSelectedSectionIds] = React.useState<number[]>([])
        const isWebsiteSelected = (sectionIds: number[]): SelectionTypeEnum | null =>
            getDataSelectionType(selectedSectionIds, sectionIds)

        const isSectionSelected = (id: number): SelectionTypeEnum | null => {
            if (selectedSectionIds.includes(id)) {
                return SelectionTypeEnum.COMPLETE
            }

            return null
        }

        const toggleSelectedSectionId = (id: number): void => {
            setSelectedSectionIds((prevState) =>
                prevState.includes(id) ? prevState.filter((sectionId) => sectionId !== id) : [...prevState, id],
            )
        }

        const toggleWebsiteSelectedSectionId = (ids: number[]): void => {
            const newIds = ids.filter((id) => !selectedSectionIds.includes(id))

            if (newIds.length) {
                setSelectedSectionIds((prevState) => [...prevState, ...newIds])

                return
            }

            setSelectedSectionIds((prevState) => prevState.filter((sectionId) => !ids.includes(sectionId)))
        }

        const value = React.useMemo(
            () => ({
                isSectionSelected,
                isWebsiteSelected,
                selectedSectionIds,
                toggleSelectedSectionId,
                toggleWebsiteSelectedSectionId,
            }),
            [selectedSectionIds],
        )

        return (
            <OrganizationsContext.Provider value={value}>
                <WrappedComponent />
            </OrganizationsContext.Provider>
        )
    }

    return <WithOrganizationsPageData />
}
