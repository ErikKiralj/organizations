import React from 'react'

import { UseWindowPositionExceededProps, UseWindowPositionExceededResult } from './useWindowPositionExceeded.types'

export const useWindowPositionExceeded = (props: UseWindowPositionExceededProps): UseWindowPositionExceededResult => {
    const { axis, deps, threshold } = props

    const ref = React.useRef<HTMLDivElement>(null)

    const exceedsWindowPosition = React.useMemo(() => {
        if (!ref.current) {
            return false
        }

        return ref.current.getBoundingClientRect().right > threshold * window[axis]
    }, [deps])

    return {
        exceedsWindowPosition,
        ref,
    }
}
