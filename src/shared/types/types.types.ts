export type Section = {
    id: number
    name: string
    status: number
}

export type Website = {
    id: number
    name: string
    sections: Section[]
    status: number
}

export type Organization = {
    id: number
    name: string
    websites: Website[]
}

export enum StatusEnum {
    'N/A' = 0,
    Operational = 1,
    'Not Operational' = 2,
    Partial = 3,
    Pending = 4,
    Stopped = 5,
}

export type PageInfo = {
    fromItem: number
    hasNextPage: boolean
    hasPreviousPage: boolean
    toItem: number
    totalCount: number
}

export enum SelectionTypeEnum {
    INDETERMINATE = 'INDETERMINATE',
    COMPLETE = 'COMPLETE',
}
