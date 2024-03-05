import React from 'react'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { useSelector } from 'react-redux'
import CustomImageContainer from '../CustomImageContainer'
<<<<<<< HEAD
import { Avatar, Typography, useTheme } from '@mui/material'
import moment from 'moment'
import { t } from 'i18next'
const CustomerInfo = () => {
    const theme = useTheme();
=======
import { Avatar, Typography } from '@mui/material'
import moment from 'moment'
import { t } from 'i18next'
const CustomerInfo = () => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { userData } = useSelector((state) => state.user)
    const { global } = useSelector((state) => state.globalSettings)
    const customerbaseUrl = global?.base_urls?.customer_image_url

    return (
        <CustomStackFullWidth
            direction="row"
<<<<<<< HEAD
            gap="9px"
=======
            spacing={0.5}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            justifyContent="center"
            alignItems="center"
        >
            <Avatar
                sx={{
                    height: 68,
                    width: 70,
                }}
                src={`${customerbaseUrl}/${userData?.image}`}
            />
            <CustomStackFullWidth>
<<<<<<< HEAD
                <Typography fontSize="1rem" fontWeight="600">
                    {' '}
                    {userData?.f_name?.concat(' ', userData?.l_name)}
                </Typography>
                <Typography fontSize="0.75rem" fontWeight="400" color={theme.palette.neutral[500]}>
                    {userData?.phone}
                </Typography>
                <Typography fontSize="0.65rem" fontWeight="400" color={theme.palette.neutral[500]}>
=======
                <Typography fontSize="1rem" fontWeight="700">
                    {' '}
                    {userData?.f_name?.concat(' ', userData?.l_name)}
                </Typography>
                <Typography fontSize="0.75rem" fontWeight="500">
                    {userData?.phone}
                </Typography>
                <Typography fontSize="0.65rem" fontWeight="500">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    {t('Joined')}{' '}
                    {moment(userData?.created_at).format('MMM Do YY')}
                </Typography>
            </CustomStackFullWidth>
        </CustomStackFullWidth>
    )
}

export default CustomerInfo
