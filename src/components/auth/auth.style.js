import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles'

export const CustomBoxForModal = styled(Box)(({ theme }) => ({
<<<<<<< HEAD
    borderRadius: '10px',
=======
    borderRadius: '4px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
<<<<<<< HEAD
    maxWidth: '670px',
    //width: '100%',
    background: theme.palette.background.paper,
    boxShadow: 24,
    padding: '2.8rem',
=======
    maxWidth: '500px',
    //width: '100%',
    background: theme.palette.background.paper,
    border: `1px solid ${theme.palette.neutral[100]}`,

    boxShadow: 24,
    padding: '3rem',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    maxHeight: '90vh',
    overflowY: 'auto',
    '&::-webkit-scrollbar': {
        width: '0.1em',
    },
    '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
        webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '&::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.neutral[300],
        outline: `1px solid ${theme.palette.neutral[300]}`,
    },
    [theme.breakpoints.between('xs', 'sm')]: {
        // styles
        padding: '2rem',
        maxWidth: '330px',
<<<<<<< HEAD
        minWidth: '340px',
=======
        minWidth: '330px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    },
    // [theme.breakpoints.down('sm')]: {
    //     padding: '1rem',
    //     maxWidth: '300px',
    //     minWidth: '270px',
    // },
}))
