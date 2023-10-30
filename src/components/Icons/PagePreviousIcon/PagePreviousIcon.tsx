import React from 'react'

import { IconBase, IconBaseProps } from '../../IconBase'

export function PagePreviousIcon(props: IconBaseProps) {
    const { fill = 'currentColor' } = props

    return (
        <IconBase viewBox="0 0 24 24">
            <path
                d="M15.41 16.59L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.59Z"
                fill={fill}
            />
        </IconBase>
    )
}
