import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'

export const customModalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '8px',
    backgroundColor: 'background.paper',
    p: 2,
}

export const CustomModalWrapper = styled(Box)(
    ({ theme, maxWidth, bgColor }) => ({
<<<<<<< HEAD
        maxWidth: maxWidth || "450px",
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '8px',
        backgroundColor: bgColor ? bgColor : theme.palette.neutral[100],
        p: 2,
        outline: 'none',
<<<<<<< HEAD
        width:'100%'
=======
        minWidth: '335px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    })
)
