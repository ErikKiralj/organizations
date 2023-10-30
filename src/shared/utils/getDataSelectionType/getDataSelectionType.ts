import { SelectionTypeEnum } from '../../types'

import { GetDataSelectionTypeType } from './getDataSelectionType.types'

export function getDataSelectionType(source: number[], destination: number[]): GetDataSelectionTypeType {
    if (!destination.length) {
        return null
    }

    const isAllDataInSource = destination.every((number) => source.includes(number))

    if (isAllDataInSource) {
        return SelectionTypeEnum.COMPLETE
    }

    const isSomeDataInSource = destination.some((number) => source.includes(number))

    if (isSomeDataInSource) {
        return SelectionTypeEnum.INDETERMINATE
    }

    return null
}
