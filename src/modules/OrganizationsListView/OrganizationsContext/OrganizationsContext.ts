import React from 'react'

import { OrganizationsContextValue } from './OrganizationsContext.types'

export const OrganizationsContext = React.createContext<OrganizationsContextValue | null>(null)
