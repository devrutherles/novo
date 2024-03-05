import React from "react"
import Link from "next/link"
import {Stack} from "@mui/material";
import {useTheme} from "@mui/material/styles";

<<<<<<< HEAD
const CustomDivider=({phone,children,marginTop})=>{
    const theme=useTheme()
    return <Stack width="100%" sx={{borderBottom: `1.5px solid ${theme.palette.neutral[300]}`}}></Stack>
=======
const CustomDivider=({phone,children})=>{
    const theme=useTheme()
    return <Stack width="100%" sx={{mt:"20px",borderBottom: `2px solid ${theme.palette.neutral[300]}`}}></Stack>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

}
export default CustomDivider