import React, { useEffect, useRef, useState } from 'react'
import Toolbar from '@mui/material/Toolbar'
import { CustomStackFullWidth } from '../../../styled-components/CustomStyles.style'
<<<<<<< HEAD
import { alpha, Avatar, Box, ButtonBase, NoSsr, Stack } from "@mui/material";
=======
import { Avatar, Box, ButtonBase, Stack } from '@mui/material'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import DrawerMenu from '../DrawerMenu'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from 'react-query'
import { ConfigApi } from '../../../hooks/react-query/config/useConfig'
import { setGlobalSettings } from '../../../redux/slices/global'
import LogoSide from './LogoSide'
import NavLinks from './NavLinks'
import Wishlist from './Wishlist'
import CustomContainer from '../../container'
import AddressReselect from '../top-navbar/address-reselect/AddressReselect'
import { SignInButton } from '../../../styled-components/CustomButtons.style'
import { CustomTypography } from '../../custom-tables/Tables.style'
import LockIcon from '@mui/icons-material/Lock'
import AuthModal from '../../auth'
import IconButton from '@mui/material/IconButton'
import ChatIcon from '@mui/icons-material/Chat'
import { AccountPopover } from '../AccountPopover'

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
<<<<<<< HEAD
import { CustomNavSearchIcon, LefRightBorderBox } from "../Navbar.style";
=======
import { CustomNavSearchIcon } from '../Navbar.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import SearchBoxPopover from '../SearchBoxPopover'
import { onSingleErrorResponse } from '../../ErrorResponse'
import { RTL } from '../../RTL/RTL'
import { useSettings } from '../../../contexts/use-settings'
import ThemeSwitches from '../top-navbar/ThemeSwitches'
import CustomLanguage from '../../CustomLanguage'
<<<<<<< HEAD
import useGetAllCartList from "../../../hooks/react-query/add-cart/useGetAllCartList";

import { getGuestId, getToken } from "../../checkout-page/functions/getGuestUserId";
import { cart } from "../../../redux/slices/cart";
import {
    calculateItemBasePrice,
    getConvertDiscount,
    handleProductValueWithOutDiscount
} from "../../../utils/customFunctions";
import { setOfflineWithPartials } from "../../../redux/slices/OfflinePayment";
import ManageSearch from "./ManageSearch";
import SearchBox from "../../home/hero-section-with-search/SearchBox";
import { styled } from "@mui/system";
import useClickOutside from "../../../utils/use-click-outside";


export const getSelectedAddons = (addon) => {
    return addon?.filter((item) => {
        return item?.isChecked !== undefined && item?.isChecked !== false;
    });
};
export const getSelectedVariations = (variations) => {
    let selectedItem = [];
    if (variations?.length > 0) {
        variations?.forEach((item, index) => {
            item?.values?.forEach((value, optionIndex) => {
                if (value?.isSelected) {
                    const itemObj = {
                        choiceIndex: index,
                        isSelected: value?.isSelected,
                        label: value?.label,
                        optionIndex: optionIndex,
                        optionPrice: value?.optionPrice,
                        // type:item?.
                    };
                    selectedItem.push(itemObj);
                }
            });
        });
    }
    return selectedItem;
};


export const CustomNavBox = styled(Box)(({ theme,isSticky }) => ({
    //  transition:"all ease 0.25s",
    // transform:isSticky && "translateY(-100%)",
    // visibility:isSticky?'hidden':'visible',
    // opacity:isSticky?'0':'1',
    display:isSticky?'visible':'hidden',
    background: theme.palette.navbarBg,
    boxShadow: "0px 5px 15px 0px rgba(0, 0, 0, 0.05)",

}))
const SecondNavbar = ({isSticky,cartListRefetch}) => {
=======

const SecondNavbar = () => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [modalFor, setModalFor] = useState('sign-in')
    const [openSearchBox, setOpenSearchBox] = useState(false)
    const [authModalOpen, setOpen] = useState(false)
    const [showSearch, setShowSearch] = useState(false)
    const [openPopover, setOpenPopover] = useState(false)
    const { userData } = useSelector((state) => state.user)
<<<<<<< HEAD
    const token=getToken()
=======
    const { token } = useSelector((state) => state.userToken)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { t } = useTranslation()
    const router = useRouter()
    const { query } = router.query
    const { global } = useSelector((state) => state.globalSettings)
    const theme = useTheme()
    const isSmall = useMediaQuery(theme.breakpoints.down('md'))
    const dispatch = useDispatch()
    const anchorRef = useRef(null)
<<<<<<< HEAD

=======
    const searchRef = useRef(null)
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [theme_mode, setThemeMode] = useState('')
    const { countryCode, language } = useSelector(
        (state) => state.languageChange
    )
    const businessLogo = global?.fav_icon
    useEffect(() => {
        // Perform localStorage action
        if (typeof window !== 'undefined') {
            setThemeMode(localStorage.getItem('mode') || 'light')
        }
    }, [theme_mode])
    const changeThemeMode = (e) => {
        if (theme_mode === 'dark') {
            localStorage.setItem('mode', 'light')
        } else {
            localStorage.setItem('mode', 'dark')
        }
        window.location.reload()
    }

    //SEARCH BOX OPEN//

    const handleOpenPopover = () => {
        setOpenPopover(true)
        setModalFor('sign-in')
    }
<<<<<<< HEAD
    const handleSearchBoxOpen = (e) => {
        e.stopPropagation()
        setOpenSearchBox(true)
    }
    const searchBoxRef = useClickOutside(() => {
        setOpenSearchBox(false);
    });


=======
    const handleSearchBoxOpen = () => {
        setOpenSearchBox(!openSearchBox)
    }
    const handleShowSearch = () => {
        if (router.pathname === '/home') {
            if (window.scrollY >= 250) {
                setShowSearch(true)
            } else {
                setShowSearch(false)
                setOpenSearchBox(false)
            }
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener('scroll', handleShowSearch)
    }

    const handleClickOutside = (event) => {
        setOpenSearchBox(false)
    }
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    const handleOpenAuthModal = () => setOpen(true)
    const handleCloseAuthModal = () => {
        setOpen(false)
        setModalFor('sign-in')
    }

    const handleClosePopover = () => {
        setOpenPopover(false)
    }
<<<<<<< HEAD

=======
    const { isLoading, data, isError, error, refetch } = useQuery(
        ['config'],
        ConfigApi.config,
        {
            enabled: false,
            onError: onSingleErrorResponse,
            staleTime: 1000 * 60 * 8,
            cacheTime: 8 * 60 * 1000,
        }
    )
    useEffect(() => {
        refetch()
    }, [])

    useEffect(() => {
        if (data) {
            dispatch(setGlobalSettings(data))
        }
    }, [data])
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    let zoneid = undefined
    let location = undefined
    let languageDirection = undefined
    if (typeof window !== 'undefined') {
        zoneid = localStorage.getItem('zoneid')
        languageDirection = localStorage.getItem('direction')
        location = localStorage.getItem('location')
    }
    const customerbaseUrl = global?.base_urls?.customer_image_url
<<<<<<< HEAD
    const guestId =getGuestId()
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const handleClick = (value) => {
        router.push({
            pathname: '/info',
            query: {
                page: value,
            },
        })
    }

<<<<<<< HEAD



    useEffect(() => {
        if(router.pathname!=="/checkout"){
            dispatch(setOfflineWithPartials(false))
        }
    }, []);
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const handleAuthBasedOnRoute = () => {
        return (
            <RTL direction={languageDirection}>
                {!token ? (
<<<<<<< HEAD
                    <Stack direction="row" paddingInline=".5rem">
=======
                    <Stack direction="row">
                        <Box
                            align="center"
                            alignItem="center"
                            component={ButtonBase}
                            marginRight="10px"
                        >
                            <ThemeSwitches
                                checked={theme_mode === 'light'}
                                handleThemeChangeMode={changeThemeMode}
                                themeMode={theme_mode}
                            />
                        </Box>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        <SignInButton
                            onClick={handleOpenAuthModal}
                            variant="contained"
                        >
                            <CustomStackFullWidth
                                direction={
                                    languageDirection === 'rtl'
                                        ? 'row'
                                        : 'row-reverse'
                                }
                                alignItems="center"
                                spacing={1}
                            >
                                <CustomTypography
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.whiteContainer.main,
                                    }}
                                >
                                    {t('Sign In')}
                                </CustomTypography>
                                <LockIcon fontSize="small" />
                            </CustomStackFullWidth>
                        </SignInButton>
                        <AuthModal
<<<<<<< HEAD
                            cartListRefetch={cartListRefetch}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            open={authModalOpen}
                            modalFor={modalFor}
                            setModalFor={setModalFor}
                            handleClose={handleCloseAuthModal}
                        />
                    </Stack>
                ) : (
                    <>
<<<<<<< HEAD
                        <Stack direction="row" spacing={1}>
=======
                        <Stack direction="row" spacing={2}>
                            <Box
                                align="center"
                                alignItem="center"
                                component={ButtonBase}
                            >
                                <ThemeSwitches
                                    checked={theme_mode === 'light'}
                                    handleThemeChangeMode={changeThemeMode}
                                    themeMode={theme_mode}
                                />
                            </Box>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            <Box
                                align="center"
                                component={ButtonBase}
                                alignItem="center"
                                onClick={() => handleClick('inbox')}
                            >
                                <IconButton>
                                    <ChatIcon
                                        sx={{
                                            height: 25,
                                            width: 25,
                                            color: (theme) =>
                                                theme.palette.primary.main,
                                        }}
                                    ></ChatIcon>
                                </IconButton>
                            </Box>
                            {token && !isSmall && (
<<<<<<< HEAD
                              <LefRightBorderBox>
                                  <Wishlist handleClick={handleClick} />
                              </LefRightBorderBox>
=======
                                <Wishlist handleClick={handleClick} />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            )}

                            <Box
                                align="center"
                                ml={languageDirection !== 'rtl' && '.9rem'}
                                mr={languageDirection === 'rtl' && '.9rem'}
                                component={ButtonBase}
                                onClick={handleOpenPopover}
                                ref={anchorRef}
<<<<<<< HEAD
                                sx={{paddingInline:"10px"}}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            >
                                <Avatar
                                    sx={{
                                        height: 30,
                                        width: 30,
                                    }}
                                    src={`${customerbaseUrl}/${userData?.image}`}
                                />
                            </Box>
                        </Stack>
                        <AccountPopover
                            anchorEl={anchorRef.current}
                            onClose={handleClosePopover}
                            open={openPopover}
<<<<<<< HEAD
                            cartListRefetch={cartListRefetch}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        />
                    </>
                )}
            </RTL>
        )
    }
<<<<<<< HEAD
    const handleShowSearch=()=>{
        if((router.pathname === "/home" && location )|| openSearchBox ){
           return (
               <Box sx={{minWidth:'450px',marginInlineEnd:"20px"}}>
                   <SearchBox  query={query}/>
               </Box>
           )
        }else if(router.pathname !=="/home" && location && router.pathname !=="/"){
            return (
                <Stack
                    onClick={(e)=>handleSearchBoxOpen(e)}
=======
    const handleShowingSearch = () => {
        if (
            router.pathname !== '/home' &&
            router.pathname !== '/' &&
            location
        ) {
            return (
                <Stack
                    onClick={handleSearchBoxOpen}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    sx={{ transition: 'all ease .4s' }}
                >
                    <CustomNavSearchIcon>
                        <SearchOutlinedIcon
                            sx={{ fontSize: '20px' }}
                            color="primary"
                        />
                    </CustomNavSearchIcon>
                </Stack>
            )
<<<<<<< HEAD
        }

        // else{
        //     return (<Stack
        //         onClick={handleSearchBoxOpen}
        //         sx={{ transition: 'all ease .4s' }}
        //     >
        //         <CustomNavSearchIcon>
        //             <SearchOutlinedIcon
        //                 sx={{ fontSize: '20px' }}
        //                 color="primary"
        //             />
        //         </CustomNavSearchIcon>
        //     </Stack>)
        // }

    }


    return (
        <NoSsr>
            <CustomNavBox isSticky={isSticky} >
                <CustomContainer>
                    <Toolbar  disableGutters={true}>
                        <CustomStackFullWidth
                            ref={searchBoxRef}
                          direction="row"
                          // alignItems="center"
                          justifyContent="space-between"
                          //onMouseOver={(event)=>handleClickOutside(event)}
                        >
                            <Stack
                              direction="row"
                              alignItems="center"
                              justifyContent="center"
                              gap="1rem"
                            >

                                {!isSmall && location && (
                                  <NavLinks
                                    languageDirection={languageDirection}
                                    t={t}
                                    zoneid={zoneid}
                                  />
                                )}
                            </Stack>
                            <Stack
                              direction="row"
                              alignItems="center"

                            >
                                {handleShowSearch()}
                                <Box
                                  sx={{
                                      display: { xs: 'none', md: 'flex' },
                                      flexGrow: 0,
                                      height: '40px',
                                      alignItems: 'center',
                                  }}
                                >
                                    {handleAuthBasedOnRoute()}
                                </Box>
                                {!isSmall && (
                                  <CustomLanguage
                                    countryCode={countryCode}
                                    language={language}
                                  />
                                )}
                            </Stack>
                        </CustomStackFullWidth>
                    </Toolbar>
                </CustomContainer>
            </CustomNavBox>
        </NoSsr>
=======
        } else if (showSearch && router.pathname !== '/' && location) {
            return (
                <Stack
                    onClick={handleSearchBoxOpen}
                    sx={{
                        transition: 'all ease .4s',
                    }}
                >
                    <CustomNavSearchIcon>
                        <SearchOutlinedIcon
                            sx={{ fontSize: '20px' }}
                            color="primary"
                        />
                    </CustomNavSearchIcon>
                </Stack>
            )
        }
    }

    return (
        <>
            <CustomContainer>
                <Toolbar disableGutters={true}>
                    <CustomStackFullWidth
                        direction="row"
                        // alignItems="center"
                        justifyContent="space-between"
                    >
                        <Stack
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            gap="1rem"
                        >
                            <LogoSide
                                global={global}
                                width="auto"
                                businessLogo={businessLogo}
                            />

                            {location && (
                                <AddressReselect location={location} />
                            )}
                            {!isSmall && location && (
                                <NavLinks
                                    languageDirection={languageDirection}
                                    t={t}
                                    zoneid={zoneid}
                                />
                            )}
                        </Stack>
                        <Stack
                            direction="row"
                            alignItems="center"
                            gap={isSmall ? '5px' : '24px'}
                        >
                            {isSmall && (
                                <Box
                                    align="center"
                                    alignItem="center"
                                    component={ButtonBase}
                                >
                                    <ThemeSwitches
                                        checked={theme_mode === 'light'}
                                        handleThemeChangeMode={changeThemeMode}
                                        themeMode={theme_mode}
                                    />
                                </Box>
                            )}
                            {isSmall && <DrawerMenu zoneid={zoneid} />}

                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    flexGrow: 0,
                                    height: '40px',
                                    alignItems: 'center',
                                }}
                            >
                                {handleShowingSearch()}
                                {handleAuthBasedOnRoute()}
                            </Box>
                            {!isSmall && (
                                <CustomLanguage
                                    countryCode={countryCode}
                                    language={language}
                                />
                            )}
                        </Stack>
                    </CustomStackFullWidth>
                </Toolbar>
            </CustomContainer>
            {openSearchBox && (
                <>
                    <SearchBoxPopover searchRef={searchRef} query={query} />
                    <Box
                        onClick={() => handleClickOutside()}
                        sx={{
                            position: 'fixed',
                            top:
                                router.pathname === '/home' ? '520px' : '520px',
                            left: '0',
                            width: '100vw',
                            height: 'calc(100vh - 320px)',
                            zIndex: 999,
                        }}
                    />
                </>
            )}
        </>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}
export default SecondNavbar
