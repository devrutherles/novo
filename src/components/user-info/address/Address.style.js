<<<<<<< HEAD
import { alpha, styled } from '@mui/material/styles'
=======
import { styled } from '@mui/material/styles'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    IconButton,
    Modal,
    Typography,
} from '@mui/material'
<<<<<<< HEAD
import { CustomStackFullWidth } from '../../../styled-components/CustomStyles.style'
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

// export const AddButton = styled(Button)(({ theme }) => ({
//     // color: 'white',
//     // background:'#EF7822',

//     // sx={{background:'#EF7822', color:'white', width:100, height:30}}
//     [theme.breakpoints.up('xs')]: {
//         width: '100px',
//         height: '30.04px',
//     },
//     [theme.breakpoints.up('md')]: {
//         width: '100px',
//         height: '30px',
//     },
// }))

export const ButtonBox = styled(Box)(({ theme }) => ({

    [theme.breakpoints.up('xs')]: {
        display: 'flex',
        justifyContent: 'end',
    },
}))
<<<<<<< HEAD
export const CustomDivWithBorder = styled(CustomStackFullWidth)(({ theme }) => ({
    border: `1px solid ${alpha(theme.palette.neutral[300], 0.3)}`,
    borderRadius: "5px",
    boxShadow: "0px 9.075px 18.151px -2.723px rgba(145, 158, 171, 0.05), 0px 0px 1.815px 0px rgba(145, 158, 171, 0.20)"

}))
export const LabelButton = styled(Button)(({ theme, value, selected }) => ({

    color:
        value === selected
            ? `${theme.palette.primary.main} !important`
            : `${theme.palette.neutral[400]} !important`,
    border: value === selected
        ? `1px solid ${theme.palette.primary.main}` : `1px solid ${theme.palette.neutral[400]}`,
    "&:hover": {
        border: `1px solid ${theme.palette.primary.main} !important`,
        // background: theme.palette.neutral[800]
    }
}))
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
