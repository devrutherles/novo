import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import {
    CustomStackFullWidth,
    CustomTypographyBold,
} from '../../styled-components/CustomStyles.style'
import { Stack, Typography } from '@mui/material'
import CustomImageContainer from '../CustomImageContainer'
import CustomRatings from '../custom-ratings/CustomRatings'
import CustomAvatar from '../custom-avatar/CustomAvatar'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import Link from 'next/link'
import ChatIcon from '@mui/icons-material/Chat'
import { CustomTypography } from '../custom-tables/Tables.style'
import { CustomTypographyGray } from '../error/Errors.style'
import { useQuery } from 'react-query'
import { GoogleApi } from '../../hooks/react-query/config/googleApi'
import { onErrorResponse } from '../ErrorResponse'
import routePNG from '../../../public/static/route.png'
import directionPNG from '../../../public/static/delivery-truck.png'
import { handleDistance } from '../../utils/customFunctions'
const DeliverymanInfo = ({ data }) => {
    const { t } = useTranslation()
    const { global } = useSelector((state) => state.globalSettings)
    const productImage = global?.base_urls?.delivery_man_image_url
    const origin = {
        latitude: data?.delivery_man?.lat ?? 0,
        longitude: data?.delivery_man?.lng ?? 0,
    }
    const destination = {
        lat: data?.delivery_address?.latitude ?? 0,
        lng: data?.delivery_address?.longitude ?? 0,
    }
    const { data: distanceData, refetch: refetchDistance } = useQuery(
        ['get-distance', origin, destination],
        () => GoogleApi.distanceApi(origin, destination),
        {
            enabled: false,
            onError: onErrorResponse,
        }
    )
    useEffect(() => {
        refetchDistance()
    }, [data])
    const away = t('away')
    const handleAway = () => {
        return handleDistance(
            distanceData?.data?.rows?.[0]?.elements,
            origin,
            destination
        )
    }

    return (
        <CustomStackFullWidth alignItems="center" spacing={1.5}>
<<<<<<< HEAD
            <Typography fontSize="18px" fontWeight={500}>{t('Trip Route')}</Typography>
=======
            <CustomTypographyBold>{t('Trip Route')}</CustomTypographyBold>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <CustomStackFullWidth
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={0.5}
            >
<<<<<<< HEAD
                <CustomTypography sx={{fontSize:{xs:"12px",md:"14px"}}}>
=======
                <CustomTypography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    {data?.delivery_man?.location}
                </CustomTypography>
                <CustomImageContainer
                    src={directionPNG.src}
                    height="30px"
                    width="60px"
                />
<<<<<<< HEAD
                <CustomTypography sx={{fontSize:{xs:"12px",md:"14px"}}}>
=======
                <CustomTypography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    {data?.delivery_address?.address}
                </CustomTypography>
            </CustomStackFullWidth>
            <CustomStackFullWidth alignItems="center">
                <CustomImageContainer
                    src={routePNG.src}
                    height="30px"
                    width="30px"
                />
<<<<<<< HEAD
                <CustomTypographyGray sx={{ fontSize: '18px' }} fontweight="400">
=======
                <CustomTypographyGray sx={{ fontSize: '18px' }}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    {handleAway().toFixed(2)}km {t(`${away}`)}
                </CustomTypographyGray>
            </CustomStackFullWidth>
            <CustomStackFullWidth
                alignItems="flex-start"
                justifyContent="flex-start"
            >
<<<<<<< HEAD
                <Typography fontSize="18px" fontWeight={500}>
                    {t('Delivery man')}
                </Typography>
=======
                <CustomTypographyBold variant="h3">
                    {t('Delivery man')}
                </CustomTypographyBold>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            </CustomStackFullWidth>

            <CustomStackFullWidth
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={1}
                >
                    <CustomAvatar
                        avatarImage={`${productImage}/${data?.delivery_man?.image}`}
                        alt={data?.delivery_man?.f_name.concat(
                            ' ',
                            data?.delivery_man?.l_name
                        )}
                    />
                    <Stack alignItems="flex-start">
<<<<<<< HEAD
                        <Typography fontSize="16px" fontweight="400">
=======
                        <CustomTypographyBold>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            {data?.delivery_man?.f_name.concat(
                                ' ',
                                data?.delivery_man?.l_name
                            )}
<<<<<<< HEAD
                        </Typography>
=======
                        </CustomTypographyBold>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        <CustomRatings
                            readOnly={true}
                            ratingValue={data?.delivery_man?.rating_count}
                        />
                    </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                    {/*<Typography>call</Typography>*/}
                    <Stack sx={{ cursor: 'pointer' }}>
                        <Link
                            href={{
                                pathname: '/info',
                                query: {
                                    page: 'inbox',
                                    type: 'delivery_man',
                                    id: data?.delivery_man?.id,
                                    routeName: 'delivery_man_id',
                                    chatFrom: 'true',
                                },
                            }}
                        >
                            <ChatIcon
                                sx={{
                                    height: 25,
                                    width: 25,
                                    color: (theme) =>
                                        theme.palette.neutral[500],
                                }}
                            ></ChatIcon>
                        </Link>
                    </Stack>
                </Stack>
            </CustomStackFullWidth>
        </CustomStackFullWidth>
    )
}

DeliverymanInfo.propTypes = {}

export default DeliverymanInfo
