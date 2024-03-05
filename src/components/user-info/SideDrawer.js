<<<<<<< HEAD
import React, { useEffect, useReducer, useState } from 'react'
import { Grid, IconButton, Stack, Typography, useMediaQuery } from '@mui/material'
=======
import React, { useEffect, useState } from 'react'
import { Grid, IconButton, Typography } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import MenuIcon from '@mui/icons-material/Menu'
import { PrimaryButton } from '../products-page/FoodOrRestaurant'
import CustomSideDrawer from '../side-drawer/CustomSideDrawer'
import MenuBar from './customer-layout/MenuBar'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import ProfileSideMenu from './ProfileSideMenu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { t } from 'i18next'
<<<<<<< HEAD
import MobileMenu from '../../assets/images/icons/MobileMenu'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useDispatch, useSelector } from 'react-redux'
import { setEditProfile } from '../../redux/slices/editProfile'
import { RTL } from '../RTL/RTL'

const SideDrawer = ({ page, setAttributeId }) => {
    const theme = useTheme()
    const dispatch = useDispatch();
    const [pageTitle, setPageTitle] = useState(page)
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))
    const [languageDirection, setLanguageDirection] = useState('ltr')
    const { isEditProfile } = useSelector((state) => state.isEditProfile);
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (page === 'profile') {
            if (isEditProfile === true) {
                setPageTitle("Edit Profile")
            } else {
                setPageTitle("My Profile")
            }
        } else if (page === 'coupons') {
            setPageTitle("My Coupons")
        }
        else if(page === "order" || page === "order?flag=success" || page === "order?flag=cancel"){
            setPageTitle("Order")
        }
        else {
            dispatch(setEditProfile(false))
            setPageTitle(page)
        }
    }, [page, pageTitle, isEditProfile])

    useEffect(() => {
=======

const SideDrawer = ({ page }) => {
    const theme = useTheme()
    const [languageDirection, setLanguageDirection] = useState('ltr')
    const [open, setOpen] = useState(false)
    useEffect(() => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        if (localStorage.getItem('direction')) {
            setLanguageDirection(localStorage.getItem('direction'))
        }
    }, [])
    return (
        <>
            {languageDirection && (
<<<<<<< HEAD
                <CustomStackFullWidth paddingBlock="13px 0px">
                    <Stack sx={{ position: "absolute", top: "58px", left: "15px" }}>
                        {(isSmall && isEditProfile === true) &&
                            <IconButton
                                onClick={() => dispatch(setEditProfile(false))}
                                sx={{
                                    width: "30px",
                                    height: "30px",
                                    color: theme => theme.palette.primary.main
                                }}
                            >
                                <ArrowBackIosNewIcon sx={{ fontSize: "10px" }} />
                            </IconButton>
                        }
                    </Stack>
                    <Stack alignItems='center'>
                        <Typography
                            variant="h3"
                            color={theme.palette.neutral[900]}
                            align="center"
                        >
                            {t(pageTitle)}
                        </Typography>
                    </Stack>
                    <Stack sx={{ position: "absolute", top: "55px", right: "15px" }}>
=======
                <>
                    <Grid item xs={2} sm={2} md={2}>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        <IconButton
                            onClick={() => setOpen(true)}
                            sx={{
                                color: (theme) => theme.palette.primary.main,
                            }}
                        >
<<<<<<< HEAD
                            <MobileMenu />
                        </IconButton>

                    </Stack>
                    <RTL direction={languageDirection}>
=======
                            <MenuOpenIcon />
                        </IconButton>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        <CustomSideDrawer
                            open={open}
                            onClose={() => setOpen(false)}
                            anchor={
                                languageDirection === 'rtl' ? 'right' : 'left'
                            }
                        >
                            <ProfileSideMenu
                                onClose={() => setOpen(false)}
                                sidedrawer="true"
                                page={page}
<<<<<<< HEAD
                                setAttributeId={setAttributeId}
                            />
                        </CustomSideDrawer>
                    </RTL>
                </CustomStackFullWidth>
=======
                            />
                        </CustomSideDrawer>
                    </Grid>
                    <Grid justifySelf="flex-end" item xs={10} sm={10} md={2}>
                        <Typography
                            variant="h3"
                            color={theme.palette.primary.main}
                            align="center"
                            sx={{ marginInlineStart: '-40px' }}
                        >
                            {t(page)}
                        </Typography>
                    </Grid>
                </>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            )}
        </>
    )
}
export default SideDrawer
