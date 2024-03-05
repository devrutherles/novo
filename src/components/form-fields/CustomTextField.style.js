import { styled, TextField } from '@mui/material'
import { CustomPaperBigCard } from '../../styled-components/CustomStyles.style'

export const CustomTextFieldStyle = styled(TextField)(
<<<<<<< HEAD
    ({ theme, borderColor, languageDirection }) => ({
=======
    ({ theme, borderColor,languageDirection }) => ({
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        border: borderColor && `1px solid ${borderColor}`,
        borderRadius: borderColor && '10px',
        backgroundColor: theme.palette.neutral[100],
        '& .MuiOutlinedInput-root': {
<<<<<<< HEAD
            flexDirection: languageDirection && languageDirection === "rtl" ? "row-reverse" : "row",
            borderRadius: "4px",
        },
        "& .MuiInputBase-root": {
            height: 45,
            fontSize: "12px",
            fontWeight: 400
        },
        "& .MuiInputLabel-root": {
            fontSize: "12px"
        },
        "& .MuiOutlinedInput-input": {
            fontSize: "12px",
            fontWeight: 400
        },
=======
            flexDirection:languageDirection && languageDirection==="rtl" ? "row-reverse":"row"
          }

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    })
)
