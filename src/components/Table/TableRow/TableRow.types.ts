import React from 'react'

export type TableRowProps = {
    children: React.ReactNode
    expandableContent?: React.ReactNode
    isAutoExpanded?: boolean
    isExpandable?: boolean
    overrideTableTemplateColumns?: string
}
