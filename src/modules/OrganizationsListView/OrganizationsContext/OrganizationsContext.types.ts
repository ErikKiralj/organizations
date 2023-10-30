import { SelectionTypeEnum } from '../../../shared'

export type OrganizationsContextValue = {
    isSectionSelected(value: number): SelectionTypeEnum | null
    isWebsiteSelected(sectionIds: number[]): SelectionTypeEnum | null
    selectedSectionIds: number[]
    toggleSelectedSectionId(value: number): void
    toggleWebsiteSelectedSectionId(value: number[]): void
}
