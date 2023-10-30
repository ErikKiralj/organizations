import React from 'react'

import { TableContext } from './TableContext'
import { TableContextValue } from './TableContext.types'

export function useTableContext(): TableContextValue {
    const context = React.useContext(TableContext)

    if (!context) {
        throw new Error('Missing TableContext.Provider')
    }

    return context
}
