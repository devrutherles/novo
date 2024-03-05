import React from 'react'
import {
    Grid,
    Typography,
    Card,
    CardContent,
    Paper,
    Stack,
    useMediaQuery,
} from '@mui/material'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material/styles'
import {
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '../../../styled-components/CustomStyles.style'
import CustomImageContainer from '../../CustomImageContainer'
import Router from 'next/router'

const ProfileStatistics = ({ value, title, image, pathname }) => {
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const { t } = useTranslation()
    const handleRoute = (value) => {
        Router.push(
            {
                pathname: '/info',
                query: { page: value },
            },
            undefined,
            { shallow: true }
        )
    }
    return (
<<<<<<< HEAD
        <Stack
            sx={{ cursor: 'pointer', marginInlineEnd: "10px" }}
=======
        <Grid
            item
            xs={6}
            sm={6}
            md={3}
            justifyContent="center"
            sx={{ cursor: 'pointer' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            onClick={() => handleRoute(pathname)}
        >
            <CustomPaperBigCard
                padding="1rem"
<<<<<<< HEAD
                sx={{ minHeight: '85px' }}
=======
                sx={{ minWidth: '100px' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                elevation={6}
            >
                <CustomStackFullWidth>
                    <Stack
                        flexGrow="wrap"
                        width="100%"
                        justifyContent="space-between"
                        direction="row"
                    >
                        <Typography
<<<<<<< HEAD
                            fontSize="24px"
                            sx={{
                                fontWeight: '500',
                                lineHeight: "1.3"
=======
                            fontSize="26px"
                            sx={{
                                fontWeight: '500',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            }}
                            color={theme.palette.primary.main}
                        >
                            {value}
                        </Typography>
                        <CustomImageContainer
                            src={image}
                            width="26px"
                            height="26px"
                            objectFit="contain"
                        />
                    </Stack>
                    <Typography
<<<<<<< HEAD
                        sx={{ fontSize: '14px', textTransform: 'capitalize', lineHeight: "1" }}
=======
                        sx={{ fontSize: '14px', textTransform: 'capitalize' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        color={theme.palette.neutral[500]}
                    >
                        {t(title)}
                    </Typography>
                </CustomStackFullWidth>
            </CustomPaperBigCard>
<<<<<<< HEAD
        </Stack>
=======
        </Grid>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}
export default ProfileStatistics
