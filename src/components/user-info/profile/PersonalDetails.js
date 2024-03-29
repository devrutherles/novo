import React from 'react'
import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '../../../styled-components/CustomStyles.style'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { CustomTypography } from '../../custom-tables/Tables.style'
import { t } from 'i18next'
import { useTheme } from '@mui/material/styles'
import { PrimaryButton } from '../../products-page/FoodOrRestaurant'
import EditIcon from '@mui/icons-material/Edit'
import EditSvg from './EditSvg'
import useMediaQuery from '@mui/material/useMediaQuery'
<<<<<<< HEAD
import { CustomDivWithBorder } from './Profile.style'
const PersonalDetails = ({ data }) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <CustomStackFullWidth>
            <CustomDivWithBorder>
                <Grid container>
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}
                        // paddingLeft={!isSmall && '20px'}
                    >
                        <CustomStackFullWidth gap="10px">
                            <Stack direction="row" spacing={2}>
=======
const PersonalDetails = ({ data, setEditProfile }) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    return (
        <CustomPaperBigCard padding="1.688rem">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={12}>
                    <CustomStackFullWidth
                        justifyContent="space-between"
                        direction="row"
                        alignItems="center"
                    >
                        <CustomTypography fontWeight="500">
                            {t('Personal Details')}
                        </CustomTypography>
                        <PrimaryButton
                            variant="outlined"
                            style={{
                                marginTop: isSmall ? '0px' : '-10px',
                                borderRadius: '20px',
                            }}
                            padding="5px 10px"
                            onClick={() => setEditProfile(true)}
                        >
                            <Stack
                                direction="row"
                                spacing={0.5}
                                color={theme.palette.neutral[1000]}
                                alignItems="center"
                            >
                                {!isSmall && (
                                    <Typography
                                        fontSize="14px"
                                        fontWeight="400"
                                    >
                                        {t('Edit Profile')}
                                    </Typography>
                                )}
                                <EditSvg />
                            </Stack>
                        </PrimaryButton>
                    </CustomStackFullWidth>
                </Grid>
                <Grid item container>
                    <Grid
                        xs={12}
                        sm={4}
                        md={4}
                        paddingLeft={!isSmall && '20px'}
                    >
                        <CustomStackFullWidth>
                            <Stack direction="row" spacing={1}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                <Typography fontSize="14px" fontWeight="500">
                                    {t('First Name')}
                                </Typography>
                                <Typography
                                    fontSize="14px"
                                    fontWeight="400"
                                    color={theme.palette.neutral[500]}
                                >
                                    {data?.data?.f_name}
                                </Typography>
                            </Stack>
<<<<<<< HEAD
                            <Stack direction="row" spacing={2}>
                                <Typography fontSize="14px" fontWeight="500">
                                    {t('Last Name')}&nbsp;
=======
                            <Stack direction="row" spacing={1}>
                                <Typography fontSize="14px" fontWeight="500">
                                    {t('Last Name')}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                </Typography>
                                <Typography
                                    fontSize="14px"
                                    fontWeight="400"
                                    color={theme.palette.neutral[500]}
                                >
                                    {data?.data?.l_name}
                                </Typography>
                            </Stack>
                        </CustomStackFullWidth>
                    </Grid>
<<<<<<< HEAD
                    <Grid
                        item
                        xs={12}
                        sm={4}
                        md={4}>
                        <CustomStackFullWidth gap="10px">
                            <Stack direction="row" spacing={2}>
=======
                    <Grid xs={12} item sm={4} md={4}>
                        <CustomStackFullWidth>
                            <Stack direction="row" spacing={1}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                <Typography fontSize="14px" fontWeight="500">
                                    {t('Phone')}
                                </Typography>
                                <Typography
                                    fontSize="14px"
                                    fontWeight="400"
                                    color={theme.palette.neutral[500]}
                                >
                                    {data?.data?.phone}
                                </Typography>
                            </Stack>
<<<<<<< HEAD
                            <Stack direction="row" spacing={2}>
                                <Typography fontSize="14px" fontWeight="500">
                                    {t('Email')}&nbsp;&nbsp;
=======
                            <Stack direction="row" spacing={1}>
                                <Typography fontSize="14px" fontWeight="500">
                                    {t('Email')}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                </Typography>
                                <Typography
                                    fontSize="14px"
                                    fontWeight="400"
                                    color={theme.palette.neutral[500]}
                                >
                                    {data?.data?.email}
                                </Typography>
                            </Stack>
                        </CustomStackFullWidth>
                    </Grid>
                </Grid>
<<<<<<< HEAD
            </CustomDivWithBorder>
        </CustomStackFullWidth>
=======
            </Grid>
            {/*<CustomStackFullWidth justifyContent="space-between" direction="row">*/}
            {/*    <CustomStackFullWidth padding="10px" spacing={2}>*/}
            {/*       <CustomTypography fontWeight="500">{t("Personal Details")}</CustomTypography>*/}
            {/*        <CustomStackFullWidth direction="row">*/}
            {/*          <CustomStackFullWidth>*/}
            {/*              <Typography>{t("First Name")}</Typography>*/}
            {/*              <Typography>{t("First Name")}</Typography>*/}
            {/*          </CustomStackFullWidth>*/}
            {/*        </CustomStackFullWidth>*/}
            {/*    </CustomStackFullWidth>*/}
            {/*    <Button variant="outlined" style={{height:"40px"}}>Edit Profile</Button>*/}
            {/*</CustomStackFullWidth>*/}
        </CustomPaperBigCard>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default PersonalDetails
