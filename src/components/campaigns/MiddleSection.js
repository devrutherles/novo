import React from 'react'
import { Stack } from '@mui/system'
import CustomImageContainer from '../CustomImageContainer'
<<<<<<< HEAD
import { Card, Typography } from "@mui/material";
import { CustomPaperBigCard, CustomStackFullWidth } from "../../styled-components/CustomStyles.style";
=======
import { Typography } from '@mui/material'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { t } from 'i18next'
import moment from 'moment'
import Skeleton from '@mui/material/Skeleton'
import { useTheme } from '@emotion/react'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
<<<<<<< HEAD
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import CustomCard from "../custom-cards/CustomCard";
import { ReadMore } from "../landingpage/ReadMore";

const MiddleSection = ({ campaignsDetails, image,isLoading }) => {
    const theme = useTheme()
    const iconColor = theme.palette.neutral[1000]
    return (
       <CustomPaperBigCard padding="1rem">
           <CustomStackFullWidth spacing={2}>
               <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3}>

                   <Stack maxWidth="380px" height="190px" width="100%">
                       {isLoading ? <Skeleton variant="rectangular" width="100%" height="100%"/> :<CustomImageContainer
                           src={image}
                       height="100%"
                       width="100%"
                       borderRadius=".6rem"
                       objectFit="contained"
                   />}

                   </Stack>
                   {isLoading ? <Skeleton variant="rectangular" width="100%" height="100%"/>:
                       <Stack
                           justifyContent="center"
                           alignItems="flex-start"
                           spacing={1}
                           width="100%"
                       >
                           <Typography
                               fontWeight="700"
                               fontSize="22px"
                               color={theme.palette.neutral[1000]}
                           >

                               {campaignsDetails?.title}
                           </Typography>
                           <Typography
                               fontSize={{ xs: '12px', sm: '12px', md: '14px' }}
                               color={theme.palette.neutral[600]}
                           >
                               <ReadMore color={theme.palette.neutral[600]}
                                         limits="160">
                                   {campaignsDetails?.description}
                               </ReadMore>

                           </Typography>
                           <Card sx={{padding:"11px 14px",boxShadow:"0px 12.571px 37.714px 0px rgba(0, 0, 0, 0.05)"}}>
                               <Stack direction="row" spacing={1} >
                                   <AccessTimeFilledIcon
                                       style={{ fontSize: '18px', color: iconColor }}
                                   />
                                   <Typography
                                       fontSize={{ xs: '10px', md: '14px' }}
                                       color={theme.palette.neutral[1000]}
                                       fontWeight={{ xs: '400', md: '400' }}
                                   >
                                       {t('Active from - ')}
                                   </Typography>
                                   {campaignsDetails ? (
                                       <Typography
                                           fontSize={{ xs: '10px', md: '16px' }}
                                           color={theme.palette.error.main}
                                           fontWeight="500"
                                       >
                                           {moment(campaignsDetails?.start_time, [
                                               'HH:mm',
                                           ]).format('hh:mm a')}{' '}
                                           -{' '}
                                           {moment(campaignsDetails?.end_time, [
                                               'HH:mm',
                                           ]).format('hh:mm a')}
                                       </Typography>
                                   ) : (
                                       <Skeleton variant="text" width="100px" />
                                   )}
                               </Stack>
                           </Card>
                       </Stack>
                   }
                   {isLoading ?  <Skeleton variant="rectangular" width="100%" height="100%"/>: <Stack alignItems="center"  justifyConten={{xs:"center",sm:"flex-end",md:"flex-end"}} spacing={1} pt=".5rem" pr=".5rem">
                       <Typography variant="text" textAlign="center" fontSize="14px"  color={theme.palette.error.main}>
                           {t("END DATE")}
                       </Typography>
                       <Card sx={{width:"105px",height:"105px",boxShadow:"0px 12.571px 37.714px 0px rgba(0, 0, 0, 0.05)"}}>
                           <Stack sx={{background:"red",width:"100%",height:"10px"}}/>
                           <Stack width="100%" justifyContent="center" alignItems='center' >
                               <Typography fontSize="32px" fontWeight="600">
                                   {moment(campaignsDetails?.available_date_ends).format(
                                       'D'
                                   )}
                               </Typography>
                               <Typography fontWeight="500">
                                   {moment(campaignsDetails?.available_date_ends).format(
                                       'MMM  YY'
                                   )}
                               </Typography>
                           </Stack>
                       </Card>
                   </Stack> }

               </Stack>

           </CustomStackFullWidth>
       </CustomPaperBigCard>
=======
import EventAvailableIcon from '@mui/icons-material/EventAvailable'

const MiddleSection = ({ campaignsDetails, image }) => {
    const theme = useTheme()
    const iconColor = theme.palette.primary.main
    return (
        <CustomStackFullWidth spacing={1}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                <CustomImageContainer
                    src={image}
                    height="100px"
                    width="200px"
                    borderRadius=".6rem"
                    objectFit="cover"
                />
                <Stack
                    justifyContent="center"
                    alignItems="flex-start"
                    spacing={1}
                >
                    <Typography
                        fontWeight="700"
                        variant="h5"
                        color={theme.palette.neutral[1000]}
                    >
                        {campaignsDetails?.title}
                    </Typography>
                    <Typography
                        fontSize={{ xs: '12px', sm: '12px', md: '14px' }}
                        color={theme.palette.neutral[600]}
                    >
                        {campaignsDetails?.description}
                    </Typography>
                </Stack>
            </Stack>
            <CustomStackFullWidth spacing={0.5}>
                <Stack direction="row" spacing={1}>
                    <EventAvailableIcon
                        style={{ fontSize: '18px', color: iconColor }}
                    />
                    <Typography
                        fontSize={{ xs: '10px', md: '14px' }}
                        fontWeight={{ xs: '400', md: '600' }}
                        color={theme.palette.neutral[1000]}
                    >
                        {t('Campaign Schedule :')}
                    </Typography>
                    <Typography
                        fontSize={{ xs: '10px', md: '14px' }}
                        fontWeight={{ xs: '400', md: '600' }}
                        color={theme.palette.primary.main}
                    >
                        {moment(campaignsDetails?.available_date_starts).format(
                            'MMMM Do YYYY'
                        )}
                        -
                        {moment(campaignsDetails?.available_date_ends).format(
                            'MMMM Do YYYY'
                        )}
                    </Typography>
                </Stack>
                <Stack direction="row" spacing={1}>
                    <AccessTimeIcon
                        style={{ fontSize: '18px', color: iconColor }}
                    />
                    <Typography
                        fontSize={{ xs: '10px', md: '14px' }}
                        color={theme.palette.neutral[1000]}
                        fontWeight={{ xs: '400', md: '600' }}
                    >
                        {t('Daily time: ')}
                    </Typography>
                    {campaignsDetails ? (
                        <Typography
                            fontSize={{ xs: '10px', md: '14px' }}
                            color={theme.palette.primary.main}
                            fontWeight={{ xs: '400', md: '600' }}
                        >
                            {moment(campaignsDetails?.start_time, [
                                'HH:mm',
                            ]).format('hh:mm a')}{' '}
                            -{' '}
                            {moment(campaignsDetails?.end_time, [
                                'HH:mm',
                            ]).format('hh:mm a')}
                        </Typography>
                    ) : (
                        <Skeleton variant="text" width="100px" />
                    )}
                </Stack>
            </CustomStackFullWidth>
        </CustomStackFullWidth>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default MiddleSection
