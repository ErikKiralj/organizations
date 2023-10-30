import { Section, Website } from '../../../../shared'

export type WebsiteDetailsProps = {
    data: Website
}

export type ChunkSection = {
    chunk: Section[]
    id: number
}
