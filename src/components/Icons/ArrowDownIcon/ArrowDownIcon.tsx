import React from 'react'

import { IconBase, IconBaseProps } from '../../IconBase'

export function ArrowDownIcon(props: IconBaseProps) {
    const { fill = 'currentColor' } = props

    return (
        <IconBase>
            <path
                d="M12 5.5007L7.92571 10.5007L4 5.49902L12 5.5007Z"
                fill={fill}
            />
        </IconBase>
    )
}
