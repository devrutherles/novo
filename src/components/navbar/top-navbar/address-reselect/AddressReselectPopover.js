<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { Button, Drawer, Grid, Modal, Popover, Typography } from "@mui/material";
import DeliveryAddress from '../../../checkout-page/DeliveryAddress'
import SimpleBar from 'simplebar-react'
import { CustomButtonPrimary } from '../../../../styled-components/CustomButtons.style'
import { CustomColouredTypography, CustomStackFullWidth } from '../../../../styled-components/CustomStyles.style'
import CloseIcon from "@mui/icons-material/Close";
import MapWithSearchBox from "../../../google-map/MapWithSearchBox";
import { Stack } from "@mui/system";
import { getToken } from "../../../checkout-page/functions/getGuestUserId";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useGeolocated } from "react-geolocated";
import { useGetLocation } from "../../../../utils/custom-hook/useGetLocation";
import { AnimationDots } from "../../../products-page/AnimationDots";
import IconButton from "@mui/material/IconButton";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import { setLocation } from "../../../../redux/slices/addressData";
import { useQuery } from "react-query";
import { GoogleApi } from "../../../../hooks/react-query/config/googleApi";
import { setUserLocationUpdate } from '../../../../redux/slices/global';
import { RTL } from '../../../RTL/RTL';

const AddressReselectPopover = (props) => {
    const token = getToken()
    const dispatch = useDispatch()
    const [rerenderMap, setRerenderMap] = useState(false)
    const { coords, anchorEl, setMapOpen, mapOpen, onClose, open, t, address, setAddress, ...other } = props
    const { geoCodeLoading } = useGetLocation(coords);
    const { location, formatted_address, zoneId } = useSelector((state) => state.addressData)
    const { userLocationUpdate } = useSelector((state) => state.globalSettings)
    const languageDirection = localStorage.getItem('direction')
    const handleSuccess = () => {
        if (getToken()) {
            if (!mapOpen && open) {
                getLocation()
            }
        }
        else {
            if (mapOpen && open) {
                getLocation()
            }
        }


    }

    const { data: geoCodeResults, refetch: refetchCurrentLocation } = useQuery(
        ['geocode-api', location],
        async () => GoogleApi.geoCodeApi(location), {
        onSuccess: handleSuccess
    }
    )

    const getLocation = () => {
        if (zoneId && formatted_address && location) {
            localStorage.setItem('zoneid', zoneId)
            localStorage.setItem(
                'location',
                formatted_address
            )
            localStorage.setItem('currentLatLng', JSON.stringify(location))
            toast.success(t('New location has been set.'))
            setAddress(null)
            dispatch(setUserLocationUpdate(!userLocationUpdate))
            onClose()
        }
    }
    const setUserCurrentLocation = async () => {
        if (coords) {
            dispatch(setLocation(
                {
                    lat: coords?.latitude,
                    lng: coords?.longitude,
                }
            ))
            if (zoneId) {
                localStorage.setItem('zoneid', zoneId)
            }
            await refetchCurrentLocation()
            setRerenderMap((prvMap) => !prvMap)
        }

    }

    return (
        <>
            <RTL direction={languageDirection}>
                <Drawer
                    anchor="left"
                    open={open}
                    onClose={onClose}
                    variant="temporary"
                    sx={{ zIndex: '1400', minWidth: "375px" }}
                >
                    <CustomStackFullWidth spacing={2.5} paddingInline="1.4rem" position="relative" sx={{ minWidth: "350px" }} pb="1.4rem">
                        <IconButton onClick={onClose} className="closebtn" sx={{ position: "absolute", top: "10px", right: "10px" }}>
                            <CloseIcon sx={{ fontSize: "16px" }} />
                        </IconButton>

                        <Typography paddingTop={{ xs: "20px", md: "40px" }} fontWeight="600">
                            {(token && !mapOpen) ?
                                <>
                                    {t("Select from saved addresses")}
                                    <br />
                                    {t("or pick from map")}
                                </>
                                : t("Type your address here or pick from map")}
                        </Typography>
                        {(token && !mapOpen) ? (
                            <CustomStackFullWidth justifyContent="center" alignItems="center">
                                <DeliveryAddress
                                    setAddress={setAddress}
                                    address={address}
                                    hideAddressSelectionField="true"
                                    renderOnNavbar="true"
                                    token={token}
                                //handleAddressSetSuccess={handleAddressSetSuccess}
                                />
                                <Button startIcon={<AddCircleOutlineIcon />} sx={{ alignItems: "flex-start", marginBottom: "1rem" }} onClick={setUserCurrentLocation}>
                                    {t("Use Current Location")}
                                </Button>
                                <CustomButtonPrimary paddingLeft="25px" paddingRight="25px"
                                    paddingTop="10px" paddingBottom="10px"
                                    maxWidth="200px"
                                    onClick={() => setMapOpen(true)}
                                >
                                    {t("Pick from Map")}
                                </CustomButtonPrimary>
                            </CustomStackFullWidth>

                        ) : (<CustomStackFullWidth justifyContent="center" alignItems="center">
                            <MapWithSearchBox rerenderMap={rerenderMap} orderType="dd" padding="0px" coords={coords} mapHeight="400px" />
                            <Stack position="absolute" bottom="6%" direction="row" spacing={1}>

                                {geoCodeLoading ? <CustomButtonPrimary paddingLeft="120px" paddingRight="120px"
                                    paddingTop="17px" paddingBottom="17px">
                                    <AnimationDots size="0px" />
                                </CustomButtonPrimary> : (
                                    <CustomButtonPrimary paddingLeft="120px" paddingRight="120px"
                                        paddingTop="10px" paddingBottom="10px"
                                        onClick={getLocation}

                                    >
                                        {t("Select")}
                                    </CustomButtonPrimary>
                                )}
                                <IconButton
                                    sx={{
                                        background: theme => theme.palette.neutral[100],
                                        padding: "10px"
                                    }}
                                    onClick={setUserCurrentLocation}
                                >
                                    <GpsFixedIcon color="primary" />
                                </IconButton>
                            </Stack>
                        </CustomStackFullWidth>
                        )}
                    </CustomStackFullWidth>
                </Drawer>
            </RTL>
=======
import React, {useEffect, useState} from 'react'
import {Button, Grid, Modal, Popover, Typography} from '@mui/material'
import DeliveryAddress from '../../../checkout-page/DeliveryAddress'
import SimpleBar from 'simplebar-react'
import {CustomButtonPrimary} from '../../../../styled-components/CustomButtons.style'
import {CustomColouredTypography, CustomStackFullWidth} from '../../../../styled-components/CustomStyles.style'
import {CustomTypography} from '../../../custom-tables/Tables.style'
import MapModal from '../../../landingpage/google-map/MapModal'
import CustomAlert from '../../../alert/CustomAlert'
import Image from "next/image";
import warningImage from "../../../../assets/images/warning.png";
import {useTheme} from "@mui/material/styles";
import {CustomStyledBox} from "../../../foodDetail-modal/CartClearModal";

const AddressReselectPopover = (props) => {
    const {anchorEl, onClose, open, t, address, setAddress, token, ...other} =
        props
    const [openMapModal, setOpenMapModal] = useState(false)
    const [addressSet, setAddressSet] = useState(null)
    const [openAlert, setOpenAlert] = useState(false)
    const theme = useTheme()
    const handleCloseMapModal = () => {
        setOpenMapModal(false)
        onClose()
    }
    const popOverHeightHandler = () => {
        if (token) {
            return '200px'
        } else {
            return '150px'
        }
    }
    useEffect(() => {
        if (addressSet) {
            setOpenAlert(true)
        }
    }, [addressSet])

    const handleClose = () => {
        setAddressSet(false)
    }
    const handleAddressSetSuccess = ()=>{
        setAddress(addressSet)
        setOpenAlert(false)
    }


    return (
        <>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                onClose={onClose}
                open={open}
                PaperProps={{
                    sx: {width: {xs: 300, sm: 320, md: 350}, p: '1rem'},
                }}
                transitionDuration={2}
                {...other}
            >
                <SimpleBar
                    style={{
                        height: popOverHeightHandler(),
                    }}
                >
                    <CustomStackFullWidth alignItems="center" spacing={1}>
                        {token ? (
                            open && (
                                <DeliveryAddress
                                    setAddress={setAddressSet}
                                    address={address}
                                    hideAddressSelectionField="true"
                                    renderOnNavbar="true"
                                />
                            )
                        ) : (
                            <CustomAlert
                                type="info"
                                text={t(
                                    'To select from saved addresses, you need to sign in.'
                                )}
                            />
                        )}
                        <CustomTypography>{t('Or')}</CustomTypography>
                        <CustomButtonPrimary
                            onClick={() => setOpenMapModal(true)}
                        >
                            {t('Pick from map')}
                        </CustomButtonPrimary>
                    </CustomStackFullWidth>
                </SimpleBar>
            </Popover>
            {openMapModal && (
                <MapModal
                    open={openMapModal}
                    handleClose={handleCloseMapModal}
                />
            )}
            {
                openAlert && <Modal
                    open={openAlert}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <CustomStyledBox>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={12} align="center" mt=".5rem">
                                <Image
                                    width={60}
                                    height={60}
                                    src={warningImage}
                                    alt={t('warning')}
                                />
                            </Grid>
                            <Grid item xs={12} md={12} align="center">
                                <CustomColouredTypography
                                    variant="h4"
                                    color={theme.palette.error.main}
                                >
                                    {t('Are you sure, you want to reset?')}
                                </CustomColouredTypography>
                            </Grid>
                            <Grid item xs={12} md={12} align="center">
                                <Typography>
                                    {t(
                                        'You have some foods in your cart. If you change your location, your cart and other data related to with your carrunt delivery location will be reset.'
                                    )}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} md={6} align="center">
                                <Button
                                    fullWidth
                                    variant="outlined"
                                    onClick={handleClose}
                                    sx={{color: (theme) => theme.palette.primary.main}}
                                >
                                    {t('No')}
                                </Button>
                            </Grid>
                            <Grid item xs={6} md={6} align="center">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    onClick={handleAddressSetSuccess}
                                >
                                    {t('Yes')}
                                </Button>
                            </Grid>
                        </Grid>
                    </CustomStyledBox>
                </Modal>
            }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </>
    )
}

AddressReselectPopover.propTypes = {}

export default AddressReselectPopover
