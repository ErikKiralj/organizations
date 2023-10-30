'use client'

import { OrganizationsListView, withOrganizationsPageData } from '../modules'

export default function Home() {
    return withOrganizationsPageData(OrganizationsListView)
}
