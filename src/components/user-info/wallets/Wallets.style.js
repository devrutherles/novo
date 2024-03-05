<<<<<<< HEAD
import { styled, Box, Card, alpha, Stack } from '@mui/material'

export const WalletBox = styled(Stack)(({ theme }) => ({
    flexDirection: "row",
=======
import { styled, Box, Card, alpha } from '@mui/material'

export const WalletBox = styled(Box)(({ theme }) => ({
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    background: `linear-gradient(180deg, ${alpha(
        theme.palette.primary.main,
        0.8
    )} 0%, ${theme.palette.primary.main} 100%)`,
    borderRadius: '10px',
<<<<<<< HEAD
    padding: '25px 15px 15px 20px',
=======
    padding: '25px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}))

export const WalletBoxSection = styled(Box)((theme) => ({
    backgroundColor: theme.palette.primary.main,
    borderRadius: '10px',
    padding: '20px',
    marginTop: '2rem',
}))
