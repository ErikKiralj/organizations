import React from 'react'

import { TableContextValue } from './TableContext.types'

export const TableContext = React.createContext<TableContextValue>({
    columns: 'auto',
})
