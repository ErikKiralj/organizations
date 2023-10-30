import { SelectionTypeEnum } from '../../shared'

export type CheckboxProps = {
    checked: SelectionTypeEnum | null
    onChange(): void
}
