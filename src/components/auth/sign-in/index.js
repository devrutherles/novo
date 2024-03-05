import React, { useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useDispatch, useSelector } from 'react-redux'
import { useMutation, useQuery } from 'react-query'
<<<<<<< HEAD
import { AuthApi } from "@/hooks/react-query/config/authApi"
import { useTheme } from '@mui/material/styles'
import LoadingButton from '@mui/lab/LoadingButton'
import { useWishListGet } from "@/hooks/react-query/config/wish-list/useWishListGet"
=======
import { AuthApi } from '../../../hooks/react-query/config/authApi'

import { useTheme } from '@mui/material/styles'
import LoadingButton from '@mui/lab/LoadingButton'
import { useWishListGet } from '../../../hooks/react-query/config/wish-list/useWishListGet'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import CustomPhoneInput from '../../CustomPhoneInput'
import 'react-phone-input-2/lib/material.css'
import { useTranslation } from 'react-i18next'
import {
    CustomColouredTypography,
    CustomLink,
    CustomStackFullWidth,
<<<<<<< HEAD
} from "@/styled-components/CustomStyles.style"
=======
} from '../../../styled-components/CustomStyles.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import toast from 'react-hot-toast'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
<<<<<<< HEAD
import { setWishList } from "@/redux/slices/wishList"
import CustomImageContainer from '../../CustomImageContainer'
import { CustomTypography } from '../../custom-tables/Tables.style'
import { CustomBoxForModal } from '../auth.style'
import { ProfileApi } from "@/hooks/react-query/config/profileApi"
import { setUser } from "@/redux/slices/customer"
import SocialLogins from './social-login/SocialLogins'
import { CustomTypographyGray } from '../../error/Errors.style'
import { RTL } from '../../RTL/RTL'
import { loginSuccessFull } from "@/utils/ToasterMessages"
import { onErrorResponse, onSingleErrorResponse } from '../../ErrorResponse'
import CustomModal from '../../custom-modal/CustomModal'
import OtpForm from '../forgot-password/OtpForm'
import { useVerifyPhone } from "@/hooks/react-query/otp/useVerifyPhone"
import { setToken } from "@/redux/slices/userToken"
import useGetAllCartList from "../../../hooks/react-query/add-cart/useGetAllCartList";
import {
    calculateItemBasePrice,
    getConvertDiscount,
    handleProductValueWithOutDiscount
} from "../../../utils/customFunctions";
import { getSelectedAddons, getSelectedVariations } from "../../navbar/second-navbar/SecondNavbar";
import { cart } from "../../../redux/slices/cart";
import { getGuestId } from "../../checkout-page/functions/getGuestUserId";
import LockIcon from '@mui/icons-material/Lock';
import { alpha, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
export const CustomSigninOutLine = styled(OutlinedInput)(({ theme ,width}) => ({
    //maxWidth: '355px',
    width:width ? width:"355px",
    borderRadius:"4px",
    "&.MuiOutlinedInput-root": {
        "& .MuiOutlinedInput-input":{
            padding: "12.5px 0px !important",
            fontSize:"14px",
            fontWeight:"400",
            alignItems: "center"

        } // Adjust the padding values as needed
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
}))
=======
import { setWishList } from '../../../redux/slices/wishList'
import CustomImageContainer from '../../CustomImageContainer'
import { CustomTypography } from '../../custom-tables/Tables.style'
import { CustomBoxForModal } from '../auth.style'
import { ProfileApi } from '../../../hooks/react-query/config/profileApi'
import { setUser } from '../../../redux/slices/customer'
import SocialLogins from './social-login/SocialLogins'
import { CustomTypographyGray } from '../../error/Errors.style'
import { RTL } from '../../RTL/RTL'
import { loginSuccessFull } from '../../../utils/ToasterMessages'
import { onErrorResponse, onSingleErrorResponse } from '../../ErrorResponse'
import CustomModal from '../../custom-modal/CustomModal'
import OtpForm from '../forgot-password/OtpForm'
import { useVerifyPhone } from '../../../hooks/react-query/otp/useVerifyPhone'
import { setToken } from '../../../redux/slices/userToken'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const SignInPage = ({
    setSignInPage,
    handleClose,
    signInSuccess,
<<<<<<< HEAD
    setModalFor,cartListRefetch,
                        setJwtToken,setUserInfo, handleSuccess,setMedium
=======
    setModalFor,
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}) => {
    const [showPassword, setShowPassword] = useState(false)
    // const [profileData,setProfileData]=useState({})
    const { t } = useTranslation()
    // const [tempToken,setTempToken]=useState("")
    const theme = useTheme()
    const dispatch = useDispatch()
    const { global } = useSelector((state) => state.globalSettings)
    const businessLogo = global?.base_urls?.business_logo_url
    const router = useRouter()
<<<<<<< HEAD
    const guestId =getGuestId()
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const [isRemember, setIsRemember] = useState(false)
    const [openModal, setModalOpen] = useState(false)
    const [openOtpModal, setOpenOtpModal] = useState(false)
    const [otpData, setOtpData] = useState({ phone: '' })
    const [mainToken, setMainToken] = useState(null)

    let userDatafor = undefined
    if (typeof window !== 'undefined') {
        userDatafor = JSON.parse(localStorage.getItem('userDatafor'))
    }

    const loginFormik = useFormik({
        initialValues: {
            phone: userDatafor ? userDatafor.phone : '',
            password: userDatafor ? userDatafor.password : '',
            tandc: false,
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .required(t('Please give a phone number'))
                .min(10, 'number must be 10 digits'),
            password: Yup.string()
                .min(6, t('Password is too short - should be 6 chars minimum.'))
                .required(t('Password is required')),
            // tandc: Yup.boolean().oneOf([true], 'Message'),
            // termsOfService:Yup.boolean()
            //     .oneOf([true], "You must accept the terms and conditions").required(t("Password is required"))
        }),
        onSubmit: async (values, helpers) => {
            try {
                if (isRemember) {
                    localStorage.setItem('userDatafor', JSON.stringify(values))
                }
                formSubmitHandler(values)
            } catch (err) {}
        },
    })
<<<<<<< HEAD

    const userOnSuccessHandler = (res) => {
        dispatch(setUser(res.data))
        handleClose?.()
=======
    // const onSuccessHandler=(res)=>{
    //     alert("call")

    //     dispatch(setUser(res.data))
    //
    // }
    // const {   isError,  refetch } = useQuery(
    //     ['profile-info'],
    //     ProfileApi.profileInfo,{
    //         enabled:false,
    //         onSuccess:(res)=>{
    //             alert("call")

    //             dispatch(setUser(res.data))
    //
    //         },
    //         onError:onSingleErrorResponse
    //     }
    // )
    const userOnSuccessHandler = (res) => {
        dispatch(setUser(res.data))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        //handleClose()
    }
    const {
        data,
        isError,
        refetch: profileRefatch,
    } = useQuery(['profile-info'], ProfileApi.profileInfo, {
        enabled: false,
        onSuccess: userOnSuccessHandler,
        onError: onSingleErrorResponse,
    })
    const onSuccessHandler = (res) => {
        dispatch(setWishList(res))
    }

    const { refetch: wishlistRefetch } = useWishListGet(onSuccessHandler)
    useEffect(() => {
        if (otpData?.phone !== '') {
            setOpenOtpModal(true)
        }
    }, [otpData])

    const handleTokenAfterSignIn = async (response) => {
        if (response?.data) {
            localStorage.setItem('token', response?.data?.token)
            await wishlistRefetch()
            await profileRefatch()
<<<<<<< HEAD
            await  cartListRefetch();
            toast.success(t(loginSuccessFull))
            //always set this dispatch at end line. otherwise wishlist and profile will not refetch. This dispatch closes the modal.
            dispatch(setToken(response?.data?.token))
            if(router.pathname==="/order" || router.pathname==="/forgot-password"){
                router.push("/home")
            }
            //dispatch(cart(setItemIntoCart()));
=======
            toast.success(t(loginSuccessFull))
            //always set this dispatch at end line. otherwise wishlist and profile will not refetch. This dispatch closes the modal.
            dispatch(setToken(response?.data?.token))
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        }
    }

    const {
        mutate: loginMutation,
        isLoading,
        error,
    } = useMutation('sign-in', AuthApi.signIn)

    const formSubmitHandler = (values) => {
<<<<<<< HEAD
        const newValues={...values,guest_id:guestId}
        loginMutation(newValues, {
=======
        loginMutation(values, {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            onSuccess: async (response) => {
                if (global?.customer_verification) {
                    if (
                        Number.parseInt(response?.data?.is_phone_verified) === 1
                    ) {
                        handleTokenAfterSignIn(response)
                        handleClose?.()
                    } else {
                        setOtpData({ phone: values?.phone })
                        setMainToken(response)
                    }
                } else {
                    handleTokenAfterSignIn(response)
<<<<<<< HEAD

=======
                    handleClose?.()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                }
            },
            onError: onErrorResponse,
        })
    }

    const handleOnChange = (value) => {
        loginFormik.setFieldValue('phone', `+${value}`)
    }

    const gotoForgotPassword = () => {
        router.push('/forgot-password')
        handleClose()
    }
    const handleCheckbox = (e) => {
        // if (e.target.checked) {
        //     setIsChecked(false)
        // }
        loginFormik.setFieldValue('tandc', e.target.checked)
    }

    const rememberMeHandleChange = (e) => {
        if (e.target.checked) {
            setIsRemember(true)
        }
    }
    const handleClick = () => {
        window.open('/terms-and-conditions')
        // handleClose()
    }
    const { mutate: otpVerifyMutate, isLoading: isLoadingOtpVerifiyAPi } =
        useVerifyPhone()
    const otpFormSubmitHandler = (values) => {
        const onSuccessHandler = (res) => {
            toast.success(res?.message)
            setOpenOtpModal(false)
            handleTokenAfterSignIn(mainToken)
            handleClose()
        }
        otpVerifyMutate(values, {
            onSuccess: onSuccessHandler,
            onError: onSingleErrorResponse,
        })
    }

    const languageDirection = localStorage.getItem('direction')
    return (
        <CustomBoxForModal>
            <RTL direction={languageDirection}>
                <CustomStackFullWidth
                    alignItems="center"
                    spacing={{ xs: 0.5, md: 2 }}
                >
                    <CustomStackFullWidth
                        alignItems="center"
<<<<<<< HEAD
                        spacing={{ xs: 1, md: 0 }}
                    >
                        <CustomImageContainer
                            src={`${businessLogo}/${global?.logo}`}
                            width="50%"
                            height="70px"
                            alt="Logo"
                        />
                        <CustomTypography
                            sx={{ fontWeight: 'bold',fontSize:"22px" }}
=======
                        spacing={{ xs: 1, md: 3 }}
                    >
                        <CustomImageContainer
                            src={`${businessLogo}/${global?.logo}`}
                            width="150px"
                            alt="Logo"
                        />
                        <CustomTypography
                            sx={{ fontWeight: 'bold' }}
                            component="h1"
                            variant="h4"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        >
                            {t('Sign In')}
                        </CustomTypography>
                    </CustomStackFullWidth>
                    <CustomStackFullWidth
                        alignItems="center"
                        spacing={{ xs: 1, md: 2 }}
                    >
                        <form onSubmit={loginFormik.handleSubmit} noValidate>
                            <CustomStackFullWidth
                                alignItems="center"
<<<<<<< HEAD
                                spacing={{ xs: 2, md: 4 }}
=======
                                spacing={{ xs: 2, md: 2 }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            >
                                <CustomPhoneInput
                                    value={loginFormik.values.phone}
                                    onHandleChange={handleOnChange}
                                    initCountry={global?.country}
                                    touched={loginFormik.touched.phone}
                                    errors={loginFormik.errors.phone}
                                    rtlChange="true"
                                />
                                <FormControl
<<<<<<< HEAD

=======
                                    sx={{ mt: 2 }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    variant="outlined"
                                    fullWidth
                                >
                                    <InputLabel
                                        required
                                        sx={{
                                            color: (theme) =>
<<<<<<< HEAD
                                                theme.palette.neutral[600],
                                            fontSize:"14px"

=======
                                                theme.palette.neutral[1000],
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        }}
                                        htmlFor="outlined-adornment-password"
                                    >
                                        {t('Password')}
                                    </InputLabel>
<<<<<<< HEAD
                                    <CustomSigninOutLine

=======
                                    <OutlinedInput
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        required
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        id="password"
                                        name="password"
<<<<<<< HEAD
                                        placeholder={t("Enter your password")}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        value={loginFormik.values.password}
                                        onChange={loginFormik.handleChange}
                                        error={
                                            loginFormik.touched.password &&
                                            Boolean(loginFormik.errors.password)
                                        }
                                        helperText={
                                            loginFormik.touched.password &&
                                            loginFormik.errors.password
                                        }
                                        touched={loginFormik.touched.password}
<<<<<<< HEAD
                                        endAdornment={
                                            <InputAdornment position="end" >
=======
                                        sx={{
                                            width: '360px',
                                            [theme.breakpoints.down('sm')]: {
                                                width: '100%',
                                            },
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={() =>
                                                        setShowPassword(
                                                            (prevState) =>
                                                                !prevState
                                                        )
                                                    }
                                                    //   onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {showPassword ? (
<<<<<<< HEAD
                                                        <Visibility sx={{width:"20px",height:"20px",color:theme=>alpha(theme.palette.neutral[400],.6)}} />
                                                    ) : (
                                                        <VisibilityOff sx={{width:"20px",height:"20px",color:theme=>alpha(theme.palette.neutral[400],.6)}} />
=======
                                                        <Visibility />
                                                    ) : (
                                                        <VisibilityOff />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
<<<<<<< HEAD
                                        startAdornment={ <InputAdornment position="start" sx={{marginInlineEnd:"0px !important"}}>
                                            <IconButton
                                                aria-label="toggle password visibility"

                                                edge="start"
                                            >
                                             <LockIcon sx={{fontSize:"1.2rem"}}/>
                                            </IconButton>
                                        </InputAdornment>}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        label="Password"
                                    />
                                    {loginFormik.errors.password && (
                                        <CustomTypography
                                            variant="subtitle2"
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.error.main,
                                            }}
                                        >
                                            {loginFormik.errors.password}
                                        </CustomTypography>
                                    )}
                                </FormControl>
                                <CustomStackFullWidth
<<<<<<< HEAD
                                    alignItems="center"
                                    sx={{ marginTop: '15px !important' }}
                                    justifyContent="space-between"
                                    direction="row"
=======
                                    alignItems="flex-start"
                                    sx={{ marginTop: '5px !important' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                >
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                value="remember"
                                                color="primary"
                                                onChange={
                                                    rememberMeHandleChange
                                                }
                                            />
                                        }
                                        label={
<<<<<<< HEAD
                                            <CustomTypography fontSize="12px" fontWeight="400">
=======
                                            <CustomTypography fontSize="14px">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                {t('Remember me')}
                                            </CustomTypography>
                                        }
                                    />
<<<<<<< HEAD
                                    <Typography

                                        onClick={gotoForgotPassword}
                                        sx={{
                                            fontSize:"12px",
                                            textTransform: 'none',
                                            cursor: 'pointer',
                                            color: 'primary.main',
                                        }}
                                    >
                                        {t('Forgot password?')}
                                    </Typography>
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                </CustomStackFullWidth>
                            </CustomStackFullWidth>
                            <LoadingButton
                                type="submit"
                                fullWidth
                                variant="contained"
<<<<<<< HEAD
                                sx={{ mt: 2,fontSize:"14px",fontWeight:"500",marginBottom:".6rem",height:"45px" }}
=======
                                sx={{ mt: 1 }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                loading={isLoading}
                            >
                                {t('Sign In')}
                            </LoadingButton>
                        </form>
                    </CustomStackFullWidth>
                    {global?.social_login.length > 0 &&
                        global?.social_login?.some(
                            (item) => item.status === true
                        ) && (
                            <CustomStackFullWidth
                                alignItems="center"
                                justifyContent="center"
                                spacing={1}
<<<<<<< HEAD
                                sx={{ marginTop: '15px !important' }}
                            >
                                <SocialLogins
                                    socialLogins={global?.social_login}
                                    handleParentModalClose={handleClose}
                                    setJwtToken={setJwtToken}
                                    setUserInfo={setUserInfo}
                                    handleSuccess={handleSuccess}
                                    setModalFor={setModalFor}
                                    setMedium={setMedium}
=======
                                sx={{ marginTop: '7px !important' }}
                            >
                                <CustomTypographyGray nodefaultfont="true">
                                    {t('Or')}
                                </CustomTypographyGray>
                                <CustomTypography>
                                    {t('Social Login')}
                                </CustomTypography>
                                <SocialLogins
                                    socialLogins={global?.social_login}
                                    handleParentModalClose={handleClose}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                />
                            </CustomStackFullWidth>
                        )}
                    <CustomStackFullWidth
                        alignItems="center"
                        spacing={0.5}
<<<<<<< HEAD
                        sx={{ paddingTop: '10px !important' }}
                    >
=======
                        sx={{ marginTop: '5px !important' }}
                    >
                        <Typography
                            variant="body2"
                            onClick={gotoForgotPassword}
                            sx={{
                                textTransform: 'none',
                                cursor: 'pointer',
                                color: 'primary.main',
                            }}
                        >
                            {t('Forgot password?')}
                        </Typography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                        <CustomStackFullWidth
                            direction="row"
                            alignItems="center"
                            justifyContent="center"
                            spacing={0.5}
                        >
<<<<<<< HEAD
                            <CustomTypography fontSize="14px" >
=======
                            <CustomTypography>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                {t("Don't have an account?")}
                            </CustomTypography>
                            <CustomLink
                                onClick={() => {
                                    setModalFor('sign-up')
                                }}
                                variant="body2"
                            >
                                {t('Sign Up')}
                            </CustomLink>
                        </CustomStackFullWidth>
<<<<<<< HEAD
                        {/*<CustomStackFullWidth>*/}
                        {/*    <CustomColouredTypography*/}
                        {/*        color={theme.palette.primary.main}*/}
                        {/*        onClick={handleClick}*/}
                        {/*        sx={{*/}
                        {/*            cursor: 'pointer',*/}
                        {/*            textDecoration: 'underline',*/}
                        {/*            textAlign: 'center',*/}
                        {/*            fontWeight: '400',*/}
                        {/*            fontSize: '14px',*/}
                        {/*            [theme.breakpoints.down('sm')]: {*/}
                        {/*                fontSize: '12px',*/}
                        {/*                marginLeft: '0px',*/}
                        {/*            },*/}
                        {/*        }}*/}
                        {/*    >*/}
                        {/*        {t('Terms and conditions')}*/}
                        {/*    </CustomColouredTypography>*/}
                        {/*</CustomStackFullWidth>*/}
=======
                        <CustomStackFullWidth>
                            <CustomColouredTypography
                                color={theme.palette.primary.main}
                                onClick={handleClick}
                                sx={{
                                    cursor: 'pointer',
                                    textDecoration: 'underline',
                                    textAlign: 'center',
                                    fontWeight: '400',
                                    fontSize: '14px',
                                    [theme.breakpoints.down('sm')]: {
                                        fontSize: '12px',
                                        marginLeft: '0px',
                                    },
                                }}
                            >
                                {t('Terms and conditions')}
                            </CustomColouredTypography>
                        </CustomStackFullWidth>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    </CustomStackFullWidth>
                </CustomStackFullWidth>
            </RTL>
            <CustomModal
                openModal={openOtpModal}
                setModalOpen={setOpenOtpModal}
            >
                <OtpForm
                    data={otpData}
                    formSubmitHandler={otpFormSubmitHandler}
                    isLoading={isLoadingOtpVerifiyAPi}
                />
            </CustomModal>
        </CustomBoxForModal>
    )
}

export default SignInPage
