import React from 'react';
import {Stack} from "@mui/system";
import {CustomSpinner} from "../HomeStyle";
import {useTheme} from "@emotion/react";

const DotSpin = () => {
     const theme=useTheme()
    return (
<<<<<<< HEAD
        <Stack width="100%" justifyContent="Center" alignItems="center" heigth="400px">
=======
        <Stack width="100%" justifyContent="Center" alignItems="center">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        <CustomSpinner color={theme.palette.primary.main}></CustomSpinner>
        </Stack>

    );
};

export default DotSpin;
