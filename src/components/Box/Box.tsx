import React from 'react'

import { BoxProps } from './Box.types'

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    const { children, ...other } = props

    return (
        <div
            ref={ref}
            {...other}
        >
            {children}
        </div>
    )
})
