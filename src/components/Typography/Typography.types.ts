import React from 'react'

type TypographyVariant = 'small' | 'medium' | 'large'

export type TypographyProps = React.HTMLAttributes<HTMLSpanElement> & {
    children?: React.ReactNode
    color?: string
    variant?: TypographyVariant
}
