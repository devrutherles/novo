import { styled } from '@mui/material/styles'
import { Paper } from '@mui/material'

export const WrapperForCustomDialogConfirm = styled(Paper)(({ theme,width }) => ({
<<<<<<< HEAD
    padding:"1rem",
    maxWidth:"29.313rem",
    width: "100%",
    [theme.breakpoints.up('md')]: {
        width: width?width:'31.313rem',
=======
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    paddingBottom: '1.40rem',
    paddingTop: '1.75rem',
    width: 'auto',
    [theme.breakpoints.up('md')]: {
        width: width?width:'34.313rem',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    },
}))
