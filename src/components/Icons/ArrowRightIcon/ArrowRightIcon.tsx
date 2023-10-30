import React from 'react'

import { IconBase, IconBaseProps } from '../../IconBase'

export function ArrowRightIcon(props: IconBaseProps) {
    const { fill = 'currentColor' } = props

    return (
        <IconBase>
            <path
                d="M6.00168 4L11.0017 8.07429L6 12L6.00168 4Z"
                fill={fill}
            />
        </IconBase>
    )
}
