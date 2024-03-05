import React from 'react'
<<<<<<< HEAD
import { Box, Grid, Typography, useTheme } from '@mui/material'
=======
import { Box, Grid, Typography } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

import { useSelector } from 'react-redux'
import { StyleThemBox } from '../food-card/FoodCard.style'
import { useTranslation } from 'react-i18next'
import { ConfigApi } from '../../hooks/react-query/config/useConfig'
import { landingPageApi } from '../landingpage/Api'

const AboutUsPage = ({ configData }) => {
    const { t } = useTranslation()
<<<<<<< HEAD
    const theme = useTheme();
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    return (
        <Box mt={{ xs: '100px', md: '190px' }}>
            <Grid
                container
                item
                md={12}
                xs={12}
                spacing={3}
                justifyContent="center"
            >
<<<<<<< HEAD
                <Typography variant="h3" align="center" color={theme.palette.neutral[1000]}>
=======
                <Typography variant="h3" align="center">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    {t('About Us')}
                </Typography>
                <Grid item md={12} xs={12} sx={{ paddingBottom: '50px' }}>
                    <StyleThemBox>
                        <div
                            dangerouslySetInnerHTML={{
                                __html: configData?.about_us,
                            }}
                        ></div>
                    </StyleThemBox>
                </Grid>
            </Grid>
        </Box>
    )
}

export default AboutUsPage
