import { theme } from '../../styles'

import { GetStatusColor } from './getStatusColor.types'

export function getStatusColor(status: number): GetStatusColor {
    switch (status) {
        case 0:
            return {
                backgroundColor: 'transparent',
                borderColor: theme.colors.shade10,
            }
            break
        case 1:
            return {
                backgroundColor: theme.colors.accentsGreen,
                borderColor: theme.colors.accentsGreen,
            }
            break
        case 2:
            return {
                backgroundColor: theme.colors.accentsRed,
                borderColor: theme.colors.accentsRed,
            }
            break
        case 3:
            return {
                backgroundColor: theme.colors.accentsYellow,
                borderColor: theme.colors.accentsYellow,
            }
            break
        case 4:
            return {
                backgroundColor: theme.colors.accentsYellow,
                borderColor: theme.colors.accentsYellow,
            }
            break
        case 5:
            return {
                backgroundColor: theme.colors.shade7,
                borderColor: theme.colors.shade7,
            }
            break
        default:
            return {
                backgroundColor: 'transparent',
                borderColor: 'transparent',
            }
    }
}
