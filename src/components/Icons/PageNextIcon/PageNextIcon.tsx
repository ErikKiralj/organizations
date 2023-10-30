import React from 'react'

import { IconBase, IconBaseProps } from '../../IconBase'

export function PageNextIcon(props: IconBaseProps) {
    const { fill = 'currentColor' } = props

    return (
        <IconBase viewBox="0 0 24 24">
            <path
                d="M8.58997 16.59L13.17 12L8.58997 7.41L9.99997 6L16 12L9.99997 18L8.58997 16.59Z"
                fill={fill}
            />
        </IconBase>
    )
}
