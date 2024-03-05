import { styled } from '@mui/material/styles'
import { alpha, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import { Rating } from '@mui/material'

<<<<<<< HEAD
export const CustomRating = styled(Rating)(({ theme, color,borderColor }) => ({
    color: color ? color :theme.palette.primary.main,
    borderColor:borderColor || theme.palette.primary.main,
=======
export const CustomRating = styled(Rating)(({ theme, color }) => ({
    color: color ? color : (theme) => theme.palette.primary.main,
    borderColor: (theme) => theme.palette.primary.main,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    '& .MuiSvgIcon-root': {
        fill: color ? color : (theme) => theme.palette.primary.main,
    },
    [theme.breakpoints.down('md')]: {
        // styles
        fontSize: '1rem',
    },
}))
