import React from 'react'

import { IconBase, IconBaseProps } from '../../IconBase'

export function CheckIcon(props: IconBaseProps) {
    const { fill = 'currentColor' } = props

    return (
        <IconBase>
            <path
                d="M6.65183 10.8942L4.10636 8.33133C3.96455 8.19032 3.96455 7.96081 4.10636 7.8183L4.62055
                7.30602C4.76237 7.16501 4.99291 7.16501 5.13473 7.30602L6.90929 9.10013L10.8649 5.10613C11.0068
                4.96512 11.2373 4.96512 11.3791 5.10613L11.8933 5.61916C12.0351 5.76017 12.0351 5.99044 11.8933
                6.1307L7.16602 10.8942C7.0242 11.0353 6.79365 11.0353 6.65183 10.8942Z"
                fill={fill}
            />
        </IconBase>
    )
}
