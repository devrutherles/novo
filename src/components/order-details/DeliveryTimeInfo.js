import React from 'react'
import {
    CustomColouredTypography,
    CustomPaperBigCard,
    CustomStackFullWidth,
} from '../../styled-components/CustomStyles.style'
import { ImageSource } from '../../utils/ImageSource'
<<<<<<< HEAD
import deliverymangif from '../../../public/static/animation.gif'
=======
import deliverymangif from '../../../public/static/food-delivery-dark.gif'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import darkdeliverymangif from '../../../public/static/ordertime.gif'
import Image from 'next/image'
import { CustomPaperCard } from '../custom-cards/CustomCards.style'
import { useTranslation } from 'react-i18next'
import { Stack, Typography } from '@mui/material'
import { CustomTypographyGray } from '../../styled-components/CustomTypographies.style'
import moment from 'moment'
import { useTheme } from '@mui/material/styles'

const DeliveryTimeInfo = ({ trackData }) => {
    const theme = useTheme()
    const { t } = useTranslation()
    const today = moment(new Date())
<<<<<<< HEAD
    const orderPendingTime =deliverymangif

=======
    const orderPendingTime =
        theme.palette.mode === 'dark' ? darkdeliverymangif : deliverymangif
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    const differenceInMinutes = () => {
        const deliveryTime = trackData?.data?.restaurant?.delivery_time
        const createdAt = trackData?.data?.created_at
        const processingTime = trackData?.data?.processing_time
        const scheduleAt = trackData?.data?.schedule_at
        let minTime = processingTime != null ? processingTime : 0
        if (
            deliveryTime !== null &&
            deliveryTime !== '' &&
            processingTime === null
        ) {
            const timeArr = deliveryTime.split('-')
            minTime = Number.parseInt(timeArr[0])
        }
        const newDeliveryTime = scheduleAt ? scheduleAt : createdAt
        const newDeliveryTimeWithAdditionalMin = moment(newDeliveryTime)
            .add(minTime, 'minutes')
            .format()
        const duration = moment.duration(
            today.diff(newDeliveryTimeWithAdditionalMin)
        )
        const minutes = duration.asMinutes()
        //here minutes give negative values for positive changes, that's why the condition given below
        if (minutes <= -1) {
            return Number.parseInt(Math.abs(minutes))
        }
    }
    const handleTime = () => {
        if (differenceInMinutes() > 5) {
            return `${differenceInMinutes() - 5} - ${differenceInMinutes()} `
        } else {
            return `1-5`
        }
    }
    return (
<<<<<<< HEAD
        <CustomStackFullWidth alignItems="center" justifyContent="center">
            <Stack>
                <Image
                    src={orderPendingTime}
                    alt="my gif"
                    height={150}
                    width={250}
                    objectFit="cover"
                />
            </Stack>

            <Stack alignItems="center" justifyContent="center" mt="1.5rem">
                <Typography sx={{fontSize:{xs:"14px",md:"16px"}}} color={theme.palette.neutral[1000]}>
                    {t('Chef has started cooking')}
                </Typography>
            </Stack>
            {trackData && (
                <Stack direction="row" spacing={0.5}>
                    <Typography sx={{fontSize:{xs:"14px",md:"26px",fontWeight:"700"}}}>{handleTime()}</Typography>
                    <CustomColouredTypography color="primary" sx={{fontSize:{xs:"14px",md:"26px"},fontWeight:"700"}}>
                        {t('mins')}
                    </CustomColouredTypography>
                </Stack>
            )}
        </CustomStackFullWidth>
=======
        <CustomPaperBigCard>
            <CustomStackFullWidth alignItems="center" justifyContent="center">
                <Stack>
                    <Image
                        src={orderPendingTime}
                        alt="my gif"
                        height={150}
                        width={250}
                        objectFit="cover"
                    />
                </Stack>

                <Stack alignItems="center" justifyContent="center" mt="1.5rem">
                    <CustomTypographyGray>
                        {t('Your food will be delivered within')}
                    </CustomTypographyGray>
                </Stack>
                {trackData && (
                    <Stack direction="row" spacing={0.5}>
                        <Typography>{handleTime()}</Typography>
                        <CustomColouredTypography color="primary">
                            {t('min')}
                        </CustomColouredTypography>
                    </Stack>
                )}
            </CustomStackFullWidth>
        </CustomPaperBigCard>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default DeliveryTimeInfo
