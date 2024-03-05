import React from 'react'
import { HeadingBox } from './OrderDetail.style'
import { Typography } from '@mui/material'
import CustomFormatedDateTime from '../date/CustomFormatedDateTime'
import { useTranslation } from 'react-i18next'
import { CustomTypography } from '../custom-tables/Tables.style'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'

<<<<<<< HEAD
const TopDetails = ({ data, trackData }) => {
=======
const getCommonValue = (data, key) => {
    return data?.data?.details[0]?.[key]
}
const TopDetails = ({ data, trackData }) => {

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { t } = useTranslation()
    return (
        <HeadingBox>
            <CustomStackFullWidth alignItems="center" justifyContent="center">
<<<<<<< HEAD
=======
                <Typography
                    sx={{
                        color: 'primary.main',
                        fontSize: '36px',
                        fontWeight: '600',
                    }}
                >
                    {t('Order')} # {getCommonValue(data, 'order_id')}
                </Typography>
                <CustomTypography sx={{color:(theme)=>theme.palette.neutral[400]}}>
                    {t('Order placed')} :{' '}
                    <CustomFormatedDateTime
                        date={data?.data?.[0]?.created_at}
                    />
                </CustomTypography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                {trackData?.data?.scheduled === 1 && (
                    <CustomTypography>
                        {t('Order scheduled')} :
                        <CustomFormatedDateTime
                            date={trackData?.data?.schedule_at}
                        />
                    </CustomTypography>
                )}
            </CustomStackFullWidth>
        </HeadingBox>
    )
}

export default TopDetails
