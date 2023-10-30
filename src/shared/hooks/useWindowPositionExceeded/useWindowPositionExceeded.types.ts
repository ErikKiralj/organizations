import React from 'react'

export type UseWindowPositionExceededProps = {
    axis: 'innerWidth' | 'innerHeight'
    deps?: React.DependencyList
    threshold: number
}

export type UseWindowPositionExceededResult = {
    exceedsWindowPosition: boolean
    ref: React.RefObject<HTMLDivElement>
}
