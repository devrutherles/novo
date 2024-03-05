import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import RoomIcon from '@mui/icons-material/Room'
import { Paper, Stack, Typography } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import { useDispatch, useSelector } from 'react-redux'
import Router, { useRouter } from 'next/router'
import AddressReselectPopover from './AddressReselectPopover'
import { toast } from 'react-hot-toast'
import { useTranslation } from 'react-i18next'
import { setClearCart } from '../../../../redux/slices/cart'
<<<<<<< HEAD
import { styled, useTheme } from "@mui/material/styles";
import { useGeolocated } from "react-geolocated";
import { setOpenMapDrawer, setUserLocationUpdate } from '../../../../redux/slices/global'
export const AddressTypographyGray = styled(Typography)(({ theme }) => ({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '1',
    WebkitBoxOrient: 'vertical',
    maxWidth: '189px',
    marginInlineStart: '5px',
    wordBreak: 'break-all',
    color: theme.palette.neutral[1000],
    fontSize: "13px"
}))
const AddressReselect = ({ location }) => {
    const [mapOpen, setMapOpen] = useState(false)
    const { openMapDrawer, userLocationUpdate } = useSelector((state) => state.globalSettings)
=======
import { useTheme } from '@mui/material/styles'

const AddressReselect = ({ location }) => {
    const [openReselectModal, setOpenReselectModal] = useState(false)
    const { global, token } = useSelector((state) => state.globalSettings)
    const [openPopover, setOpenPopover] = useState(false)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [address, setAddress] = useState(null)
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const router = useRouter()
<<<<<<< HEAD
    const anchorRef = useRef(null)
=======
    const theme = useTheme()
    useEffect(() => {
        let currentLatLng
        if (typeof localStorage.getItem('currentLatLng') !== undefined) {
            currentLatLng = JSON.parse(localStorage.getItem('currentLatLng'))
            const location = localStorage.getItem('location')
            setAddress({
                ...currentLatLng,
                latitude: currentLatLng?.lat,
                longitude: currentLatLng?.lng,
                address: location,
                address_type: 'Selected Address',
            })
        }
    }, [])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    useEffect(() => {
        if (address) {
            localStorage.setItem('location', address?.address)
            const values = { lat: address?.lat, lng: address?.lng }
            localStorage.setItem('currentLatLng', JSON.stringify(values))
            if (address.zone_ids && address.zone_ids.length > 0) {
                const value = [address.zone_ids]
                localStorage.setItem('zoneid', JSON.stringify(address.zone_ids))
                toast.success(t('New delivery address selected.'))
                handleClosePopover()
                dispatch(setClearCart())
<<<<<<< HEAD
                dispatch(setUserLocationUpdate(!userLocationUpdate))
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                router.push('/home')
            }
        }
    }, [address])
    const handleClickToLandingPage = () => {
<<<<<<< HEAD
        dispatch(setOpenMapDrawer(true))
    }

    const { coords, isGeolocationAvailable, isGeolocationEnabled } =
        useGeolocated({
            positionOptions: {
                enableHighAccuracy: false,
            },
            userDecisionTimeout: 5000,
            isGeolocationEnabled: true,
        })
    const handleClosePopover = () => {
        dispatch(setOpenMapDrawer(false))
        setMapOpen(false)

    }

    return (
        <>{location &&
=======
        setOpenPopover(true)
        // if (token) {
        //
        // } else {
        //     toast.error(t('Login required.'))
        // }

        //setOpenReselectModal(true)
        // localStorage.removeItem('location')
        // localStorage.removeItem('zoneid')
        //Router.push('/')
    }
    const handleModalClose = () => {
        setOpenReselectModal(false)
    }
    const anchorRef = useRef(null)
    const handleClosePopover = () => {
        setOpenPopover(false)
    }
    return (
        <>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <Stack
                sx={{
                    color: (theme) => theme.palette.neutral[1000],
                    cursor: 'pointer',
                }}
                direction="row"
                onClick={handleClickToLandingPage}
                ref={anchorRef}
                alignItems="center"
                spacing={0.5}
            >
                <RoomIcon
                    fontSize="small"
                    color="primary"
                    style={{ width: '16px', height: '16px' }}
                />
<<<<<<< HEAD
                <AddressTypographyGray
                    align="left"
                >
                    {location}
                </AddressTypographyGray>
                <KeyboardArrowDownIcon />
            </Stack>
        }
            <AddressReselectPopover
                anchorEl={anchorRef.current}
                onClose={handleClosePopover}
                open={openMapDrawer}
                t={t}
                address={address}
                setAddress={setAddress}
                mapOpen={mapOpen}
                // setUserLocationUpdate={setUserLocationUpdate}
                setMapOpen={setMapOpen}
                coords={coords}

=======
                <Typography
                    fontSize="13px"
                    align="left"
                    sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: '1',
                        WebkitBoxOrient: 'vertical',
                        maxWidth: '189px',
                        marginInlineStart: '5px',
                        wordBreak: 'break-all',
                    }}
                    color={theme.palette.neutral[1000]}
                >
                    {location}
                </Typography>
                <KeyboardArrowDownIcon />
            </Stack>
            <AddressReselectPopover
                anchorEl={anchorRef.current}
                onClose={handleClosePopover}
                open={openPopover}
                t={t}
                address={address}
                setAddress={setAddress}
                token={token}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            />
        </>
    )
}

AddressReselect.propTypes = {}

export default AddressReselect
