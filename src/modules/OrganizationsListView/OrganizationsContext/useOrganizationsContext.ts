'use client'

import React from 'react'

import { OrganizationsContext } from './OrganizationsContext'

export function useOrganizationsContext() {
    const context = React.useContext(OrganizationsContext)

    if (!context) {
        throw new Error('Missing OrganizationsContext.Provider')
    }

    return context
}
