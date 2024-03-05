import React from 'react'
<<<<<<< HEAD
import { Box, Stack } from "@mui/system";
import TuneIcon from '@mui/icons-material/Tune';
=======
import { Stack } from '@mui/system'
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { Button, Typography } from '@mui/material'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { t } from 'i18next'

<<<<<<< HEAD
const FilterButton = ({ handleClick ,activeFilters}) => {
=======
const FilterButton = ({ handleClick }) => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <Button
            variant="outlined"
<<<<<<< HEAD
            sx={{
                padding: {xs:'7px 8px',sm:'4px 8px',md:'5px 8px'},
                borderRadius: '15px' ,
                color:theme=>theme.palette.neutral[300],
                borderColor: theme => theme.palette.neutral[300],
            }}
            onClick={handleClick}
        >
            <Stack direction="row" alignItems="center" spacing={0.5} paddingX=".5rem">
                {activeFilters?.length>0 &&
                    <Box
                    sx={{
                        backgroundColor:theme=>theme.palette.primary.main,
                        color:theme=>theme.palette.neutral[100],
                        borderRadius: '50%',
                         fontSize:"12px",
                        width: '19px',
                        height: '19px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginLeft: '5px',
                        marginRight: '5px',
                    }}>
                    {activeFilters?.length}
                   </Box>}


                {!isSmall && (
                    <Typography
                        fontSize="14px"
                        fontWeight="400"
                        color={theme.palette.neutral[400]}
                    >
                        {t('Filter')}
                    </Typography>
                )}
                <TuneIcon
=======
            color="primary"
            sx={{ padding: '9px 8px', borderRadius: '6px' }}
            onClick={handleClick}
        >
            <Stack direction="row" alignItems="center" spacing={0.5}>
                <FilterAltOutlinedIcon
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    style={{
                        width: '16px',
                        height: '16px',
                    }}
<<<<<<< HEAD
                    sx={{color:theme.palette.neutral[400]}}

=======
                    color="primary"
                />
                {!isSmall && (
                    <Typography
                        fontSize="12px"
                        fontWeight="500"
                        color={theme.palette.primary.main}
                    >
                        {t('Filter')}
                    </Typography>
                )}
                <KeyboardArrowDownOutlinedIcon
                    style={{
                        width: '16px',
                        height: '16px',
                    }}
                    color="primary"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                />
            </Stack>
        </Button>
    )
}

export default FilterButton
