import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
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
import { AuthApi } from '../../../hooks/react-query/config/authApi'
import { useMutation } from 'react-query'
import { useFormik } from 'formik'
import CustomPhoneInput from '../../CustomPhoneInput'
import FormHelperText from '@mui/material/FormHelperText'
import { useTranslation } from 'react-i18next'
import SignUpValidation from '../SignUpValidation'
import {
    CustomColouredTypography,
    CustomLink,
    CustomStackFullWidth,
} from '../../../styled-components/CustomStyles.style'
import { useTheme } from '@mui/material/styles'
import { useRouter } from 'next/router'
import CustomImageContainer from '../../CustomImageContainer'
import { CustomTypography } from '../../custom-tables/Tables.style'
import { CustomBoxForModal } from '../auth.style'
import { toast } from 'react-hot-toast'
<<<<<<< HEAD
import LockIcon from '@mui/icons-material/Lock';
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { InfoSetByApi } from '../../InfoSetByApi'
import { onErrorResponse, onSingleErrorResponse } from '../../ErrorResponse'
import { RTL } from '../../RTL/RTL'
import CustomModal from '../../custom-modal/CustomModal'
import OtpForm from '../forgot-password/OtpForm'
import { useVerifyPhone } from '../../../hooks/react-query/otp/useVerifyPhone'
import { CustomTypographyGray } from '../../error/Errors.style'
import SocialLogins from '../sign-in/social-login/SocialLogins'
import { setToken } from '../../../redux/slices/userToken'
<<<<<<< HEAD
import { alpha, Grid, styled } from "@mui/material";
import { Stack } from "@mui/system";
import { CustomSigninOutLine } from "../sign-in";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';

// const CustomSignUpTextField =Styled()
export const CustomSignUpTextField = styled(TextField)(({ theme }) => ({

    '& .MuiInputBase-input': {
        padding: "12.5px 0px !important",
        fontSize: "14px",
        fontWeight: "400",
        borderRadius: '4px',
        // Custom styles for the input field
    },
    '& .MuiOutlinedInput-root': {
        borderRadius: '4px' // Set your desired border radius
    },
    '& .MuiInputLabel-root': {
        // Custom styles for the label
        color: theme.palette.neutral[1000],
    }
    // "&.MuiOutlinedInput-root": {
    //     "& .MuiOutlinedInput-input":{
    //         padding: "11px 0px !important",} // Adjust the padding values as needed
    // },
}))

const SignUpPage = ({ setSignInPage, handleClose, setModalFor, setJwtToken,setUserInfo,handleSuccess }) => {
=======

const SignUpPage = ({ setSignInPage, handleClose, setModalFor }) => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { t } = useTranslation()
    const dispatch = useDispatch()
    const router = useRouter()
    const theme = useTheme()
    const [showConfirmPassword, setConfirmShowPassword] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(true)
    const { global } = useSelector((state) => state.globalSettings)
    const businessLogo = global?.base_urls?.business_logo_url
    const [isChecked, setIsChecked] = useState(false)
    const [openOtpModal, setOpenOtpModal] = useState(false)
    const [otpData, setOtpData] = useState({ phone: '' })
    const [mainToken, setMainToken] = useState(null)

    const signUpFormik = useFormik({
        initialValues: {
            f_name: '',
            l_name: '',
            email: '',
            phone: '',
            password: '',
            confirm_password: '',
            ref_code: '',
            tandc: false,
        },
        validationSchema: SignUpValidation(),
        onSubmit: async (values, helpers) => {
            try {
                formSubmitHandler(values)
            } catch (err) {}
        },
    })

    const { mutate, isLoading, error } = useMutation('sign-up', AuthApi.signUp)
    useEffect(() => {
        if (otpData?.phone !== '') {
            setOpenOtpModal(true)
        }
    }, [otpData])

    const handleTokenAfterSignUp = (response) => {
        if (response?.data) {
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', response?.data?.token)
            }
            toast.success(t('Signup successfully.'))
            dispatch(setToken(response?.data?.token))
            handleClose?.()
            router.push('/interest')
        }
    }

    const formSubmitHandler = (values) => {
        const signUpData = {
            f_name: values.f_name,
            l_name: values.l_name,
            email: values.email,
            phone: values.phone,
            password: values.password,
            confirm_password: values.confirm_password,
            ref_code: values.ref_code,
<<<<<<< HEAD

=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        }

        mutate(signUpData, {
            onSuccess: async (response) => {
                if (global?.customer_verification) {
                    if (Number.parseInt(response?.is_phone_verified) === 1) {
                        handleTokenAfterSignUp(response)
                    } else {
                        setOtpData({ phone: signUpData?.phone })
                        setMainToken(response)
                    }
                } else {
                    handleTokenAfterSignUp(response)
                }
            },
            onError: onErrorResponse,
        })
    }
    const { mutate: otpVerifyMutate, isLoading: isLoadingOtpVerifiyAPi } =
        useVerifyPhone()
    const otpFormSubmitHandler = (values) => {
        const onSuccessHandler = (res) => {
            toast.success(res?.message)
            setOpenOtpModal(false)
            handleTokenAfterSignUp(mainToken)
            handleClose()
        }
        otpVerifyMutate(values, {
            onSuccess: onSuccessHandler,
            onError: onSingleErrorResponse,
        })
    }
    const handleOnChange = (value) => {
        signUpFormik.setFieldValue('phone', `+${value}`)
    }
    const handleCheckbox = (e) => {
        signUpFormik.setFieldValue('tandc', e.target.checked)
    }
    const handleClick = () => {
        window.open('/terms-and-conditions')
        // handleClose()
    }
    const languageDirection = localStorage.getItem('direction')
    return (
        <CustomBoxForModal>
            <RTL direction={languageDirection}>
                <CustomStackFullWidth
                    alignItems="center"
                    spacing={{ xs: 0.5, md: 3 }}
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
                            {t('Sign Up')}
                        </CustomTypography>
                    </CustomStackFullWidth>
                    <form onSubmit={signUpFormik.handleSubmit} noValidate>
<<<<<<< HEAD
                        <Stack>
                            <Grid container  spacing={3} >
                                <Grid item xs={12} md={6}>
                                    <CustomSignUpTextField
                                        required
                                        fullWidth
                                        id="first_name"
                                        label={t('First Name')}
                                        placeholder={t('First Name')}
                                        name="f_name"
                                        autoComplete="first_name"
                                        value={signUpFormik.values.f_name}
                                        onChange={signUpFormik.handleChange}
                                        error={
                                            signUpFormik.touched.f_name &&
                                            Boolean(signUpFormik.errors.f_name)
                                        }
                                        helperText={
                                            signUpFormik.touched.f_name &&
                                            signUpFormik.errors.f_name
                                        }
                                        touched={signUpFormik.touched.f_name}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleIcon sx={{fontSize:"1.2rem",color:theme=>theme.palette.neutral[400]}}/>
                                                </InputAdornment>
                                            ),
                                        }}


                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomSignUpTextField
                                        required
                                        fullWidth
                                        id="last_name"
                                        label={t('Last Name')}
                                        placeholder={t('Last Name')}
                                        name="l_name"
                                        autoComplete="last_name"
                                        value={signUpFormik.values.l_name}
                                        onChange={signUpFormik.handleChange}
                                        error={
                                            signUpFormik.touched.l_name &&
                                            Boolean(signUpFormik.errors.l_name)
                                        }
                                        helperText={
                                            signUpFormik.touched.l_name &&
                                            signUpFormik.errors.l_name
                                        }
                                        touched={signUpFormik.touched.l_name}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <AccountCircleIcon sx={{fontSize:"1.2rem",color:theme=>alpha(theme.palette.neutral[400],.6)}}/>
                                                </InputAdornment>
                                            ),
                                        }}
                                        //  autoFocus

                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomSignUpTextField
                                        required
                                        fullWidth
                                        id="email"
                                        label={t("Email")}
                                        name="email"
                                        autoComplete="email"
                                        placeholder={t("Email")}
                                        value={signUpFormik.values.email}
                                        onChange={signUpFormik.handleChange}
                                        error={signUpFormik.touched.email && Boolean(signUpFormik.errors.email)}
                                        helperText={signUpFormik.touched.email && signUpFormik.errors.email}
                                        touched={signUpFormik.touched.email}
                                        InputProps={{
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <MailIcon sx={{fontSize:"1.2rem",color:theme=>alpha(theme.palette.neutral[400],.6)}}/>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CustomPhoneInput
                                        value={signUpFormik.values.phone}
                                        onHandleChange={handleOnChange}
                                        initCountry={global?.country}
                                        touched={signUpFormik.touched.phone}
                                        errors={signUpFormik.errors.phone}
                                        rtlChange="true"
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl variant="outlined" fullWidth>
                                        <InputLabel
                                            required
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.neutral[1000],
                                            }}
                                            htmlFor="outlined-adornment-password"
                                        >
                                            {t('Password')}
                                        </InputLabel>
                                        <CustomSigninOutLine
                                            width="100%"
                                            required
                                            type={showPassword ? 'text' : 'password'}
                                            id="password"
                                            name="password"
                                            placeholder={t("Password")}
                                            value={signUpFormik.values.password}
                                            onChange={signUpFormik.handleChange}
                                            error={
                                                signUpFormik.touched.password &&
                                                Boolean(signUpFormik.errors.password)
                                            }
                                            helperText={
                                                signUpFormik.touched.password &&
                                                signUpFormik.errors.password
                                            }
                                            touched={signUpFormik.touched.password}
                                            endAdornment={
                                                <InputAdornment position="end">
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
                                                            <Visibility sx={{color:theme=>alpha(theme.palette.neutral[400],.6)}}/>
                                                        ) : (
                                                            <VisibilityOff sx={{color:theme=>alpha(theme.palette.neutral[400],.6)}}/>
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            startAdornment={ <InputAdornment position="start"  sx={{marginInlineEnd:"0px !important"}}>
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="start"
                                                >
                                                    <LockIcon sx={{fontSize:"1.2rem",color:theme=>theme.palette.neutral[400]}}/>
                                                </IconButton>
                                            </InputAdornment>}
                                            label="Password"
                                        />

                                        {signUpFormik.errors.password && (
                                            <FormHelperText sx={{ color: '#FF686A' }}>
                                                {signUpFormik.errors.password}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl
                                        variant="outlined"
                                        fullWidth
                                    >
                                        <InputLabel
                                            required
                                            sx={{
                                                color: (theme) =>
                                                    theme.palette.neutral[1000],
                                            }}
                                            htmlFor="outlined-adornment-password"
                                        >
                                            {t('Confirm Password')}
                                        </InputLabel>
                                        <CustomSigninOutLine
                                            width="100%"
                                            required
                                            type={
                                                showConfirmPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            id="confirm_password"
                                            name="confirm_password"
                                            placeholder={t("Confirm Password")}
                                            value={signUpFormik.values.confirm_password}
                                            onChange={signUpFormik.handleChange}
                                            error={
                                                signUpFormik.touched.confirm_password &&
                                                Boolean(
                                                    signUpFormik.errors.confirm_password
                                                )
                                            }
                                            helperText={
                                                signUpFormik.touched.confirm_password &&
                                                signUpFormik.errors.confirm_password
                                            }
                                            touched={
                                                signUpFormik.touched.confirm_password
                                            }
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={() =>
                                                            setConfirmShowPassword(
                                                                (prevState) =>
                                                                    !prevState
                                                            )
                                                        }
                                                        //   onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showConfirmPassword ? (
                                                            <Visibility sx={{color:theme=>alpha(theme.palette.neutral[400],.6)}} />
                                                        ) : (
                                                            <VisibilityOff sx={{color:theme=>alpha(theme.palette.neutral[400],.6)}} />
                                                        )}
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                            startAdornment={ <InputAdornment position="start" sx={{marginInlineEnd:"0px !important"}}>
                                                <IconButton
                                                    aria-label="toggle password visibility"

                                                    edge="start"
                                                >
                                                    <LockIcon sx={{fontSize:"1.2rem",color:theme=>alpha(theme.palette.neutral[400],.6)}}/>
                                                </IconButton>
                                            </InputAdornment>}
                                            label="confirm_password"
                                        />
                                        {signUpFormik.errors.confirm_password && (
                                            <FormHelperText
                                                sx={{
                                                    color: (theme) =>
                                                        theme.palette.error.main,
                                                }}
                                            >
                                                {signUpFormik.errors.confirm_password}
                                            </FormHelperText>
                                        )}
                                    </FormControl>
                                </Grid>
                               <Grid item xs={12} md={12}>
                                   <CustomSignUpTextField
                                       fullWidth
                                       id="ref_code"
                                       label={t('Refer Code (Optional)')}
                                       placeholder={t('Refer Code (Optional)')}
                                       name="ref_code"
                                       autoComplete="ref_code"
                                       value={signUpFormik.values.ref_code}
                                       onChange={signUpFormik.handleChange}
                                       error={
                                           signUpFormik.touched.ref_code &&
                                           Boolean(signUpFormik.errors.ref_code)
                                       }
                                       helperText={
                                           signUpFormik.touched.ref_code &&
                                           signUpFormik.errors.ref_code
                                       }
                                       touched={signUpFormik.touched.ref_code}
                                       //   autoFocus
                                       InputProps={{
                                           startAdornment: (
                                               <InputAdornment position="start">
                                                   <GroupIcon sx={{fontSize:"1.2rem",color:theme=>alpha(theme.palette.neutral[400],.6)}}/>
                                               </InputAdornment>
                                           ),
                                       }}
                                   />
                               </Grid>
                            </Grid>

=======
                        <CustomStackFullWidth
                            alignItems="center"
                            spacing={{ xs: 2, md: 3 }}
                        >
                            <TextField
                                required
                                fullWidth
                                id="first_name"
                                label={t('First Name')}
                                name="f_name"
                                autoComplete="first_name"
                                value={signUpFormik.values.f_name}
                                onChange={signUpFormik.handleChange}
                                error={
                                    signUpFormik.touched.f_name &&
                                    Boolean(signUpFormik.errors.f_name)
                                }
                                helperText={
                                    signUpFormik.touched.f_name &&
                                    signUpFormik.errors.f_name
                                }
                                touched={signUpFormik.touched.f_name}
                                autoFocus
                                sx={{
                                    color: (theme) =>
                                        theme.palette.neutral[1000],
                                }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="last_name"
                                label={t('Last Name')}
                                name="l_name"
                                autoComplete="last_name"
                                value={signUpFormik.values.l_name}
                                onChange={signUpFormik.handleChange}
                                error={
                                    signUpFormik.touched.l_name &&
                                    Boolean(signUpFormik.errors.l_name)
                                }
                                helperText={
                                    signUpFormik.touched.l_name &&
                                    signUpFormik.errors.l_name
                                }
                                touched={signUpFormik.touched.l_name}
                                //  autoFocus
                                sx={{
                                    color: (theme) =>
                                        theme.palette.neutral[1000],
                                }}
                            />
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label={t('Email')}
                                name="email"
                                autoComplete="email"
                                value={signUpFormik.values.email}
                                onChange={signUpFormik.handleChange}
                                error={
                                    signUpFormik.touched.email &&
                                    Boolean(signUpFormik.errors.email)
                                }
                                helperText={
                                    signUpFormik.touched.email &&
                                    signUpFormik.errors.email
                                }
                                touched={signUpFormik.touched.email}
                                //   autoFocus
                                sx={{
                                    color: (theme) =>
                                        theme.palette.neutral[1000],
                                }}
                            />

                            <CustomPhoneInput
                                value={signUpFormik.values.phone}
                                onHandleChange={handleOnChange}
                                initCountry={global?.country}
                                touched={signUpFormik.touched.phone}
                                errors={signUpFormik.errors.phone}
                                rtlChange="true"
                            />

                            <FormControl variant="outlined" fullWidth>
                                <InputLabel
                                    required
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.neutral[1000],
                                    }}
                                    htmlFor="outlined-adornment-password"
                                >
                                    {t('Password')}
                                </InputLabel>
                                <OutlinedInput
                                    required
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={signUpFormik.values.password}
                                    onChange={signUpFormik.handleChange}
                                    error={
                                        signUpFormik.touched.password &&
                                        Boolean(signUpFormik.errors.password)
                                    }
                                    helperText={
                                        signUpFormik.touched.password &&
                                        signUpFormik.errors.password
                                    }
                                    touched={signUpFormik.touched.password}
                                    endAdornment={
                                        <InputAdornment position="end">
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
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                                {signUpFormik.errors.password && (
                                    <FormHelperText sx={{ color: '#FF686A' }}>
                                        {signUpFormik.errors.password}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <FormControl
                                sx={{ mt: 1 }}
                                variant="outlined"
                                fullWidth
                            >
                                <InputLabel
                                    required
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.neutral[1000],
                                    }}
                                    htmlFor="outlined-adornment-password"
                                >
                                    {t('Confirm Password')}
                                </InputLabel>
                                <OutlinedInput
                                    required
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    id="confirm_password"
                                    name="confirm_password"
                                    value={signUpFormik.values.confirm_password}
                                    onChange={signUpFormik.handleChange}
                                    error={
                                        signUpFormik.touched.confirm_password &&
                                        Boolean(
                                            signUpFormik.errors.confirm_password
                                        )
                                    }
                                    helperText={
                                        signUpFormik.touched.confirm_password &&
                                        signUpFormik.errors.confirm_password
                                    }
                                    touched={
                                        signUpFormik.touched.confirm_password
                                    }
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() =>
                                                    setConfirmShowPassword(
                                                        (prevState) =>
                                                            !prevState
                                                    )
                                                }
                                                //   onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showConfirmPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="confirm_password"
                                />
                                {signUpFormik.errors.confirm_password && (
                                    <FormHelperText
                                        sx={{
                                            color: (theme) =>
                                                theme.palette.error.main,
                                        }}
                                    >
                                        {signUpFormik.errors.confirm_password}
                                    </FormHelperText>
                                )}
                            </FormControl>
                            <TextField
                                fullWidth
                                id="ref_code"
                                label={t('Refer Code (Optional)')}
                                name="ref_code"
                                autoComplete="ref_code"
                                value={signUpFormik.values.ref_code}
                                onChange={signUpFormik.handleChange}
                                error={
                                    signUpFormik.touched.ref_code &&
                                    Boolean(signUpFormik.errors.ref_code)
                                }
                                helperText={
                                    signUpFormik.touched.ref_code &&
                                    signUpFormik.errors.ref_code
                                }
                                touched={signUpFormik.touched.ref_code}
                                //   autoFocus
                                sx={{
                                    color: (theme) =>
                                        theme.palette.neutral[1000],
                                }}
                            />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            <CustomStackFullWidth>
                                <CustomStackFullWidth
                                    direction="row"
                                    alignItems="center"
                                    spacing={{ xs: '0', md: '.5' }}
<<<<<<< HEAD
                                    sx={{ mt: '7px', marginInlineStart:"-8px", }}
=======
                                    sx={{ mt: '-10px' }}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                >
                                    <FormControlLabel
                                        sx={{
                                            marginRight: '5px',
<<<<<<< HEAD

                                            '& .MuiFormControlLabel-label': {
                                                fontSize: '12px',
=======
                                            '& .MuiFormControlLabel-label': {
                                                fontSize: '14px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                color: (theme) =>
                                                    theme.palette.neutral[1000],
                                            },
                                            [theme.breakpoints.down('sm')]: {
                                                '& .MuiFormControlLabel-label':
                                                    {
<<<<<<< HEAD
                                                        fontSize: '10px',
=======
                                                        fontSize: '12px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                    },
                                            },
                                        }}
                                        control={
                                            <Checkbox
                                                value="ff"
                                                color="primary"
<<<<<<< HEAD
                                                onChange={(e)=>handleCheckbox(e)}
                                                required="true"
                                            />
                                        }
                                        label={t('I accept all the')}
                                    />
                                    <CustomColouredTypography
                                        color={theme.palette.newsletterBG}
=======
                                                onChange={handleCheckbox}
                                                required="true"
                                            />
                                        }
                                        label={t('You must accept the')}
                                    />
                                    <CustomColouredTypography
                                        color={theme.palette.primary.main}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        onClick={handleClick}
                                        sx={{
                                            cursor: 'pointer',
                                            textDecoration: 'underline',
<<<<<<< HEAD
                                            fontSize: '12px',
                                            [theme.breakpoints.down('sm')]: {
                                                fontSize: '10px',
=======
                                            [theme.breakpoints.down('sm')]: {
                                                fontSize: '12px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                                marginLeft: '0px',
                                            },
                                        }}
                                    >
                                        {t('Terms and conditions')}
                                    </CustomColouredTypography>
                                </CustomStackFullWidth>
                                {signUpFormik.touched.tandc &&
                                    signUpFormik.errors.tandc && (
                                        <CustomTypography
                                            variant="caption"
                                            sx={{
                                                fontWeight: 'inherit',
                                                color: (theme) =>
                                                    theme.palette.error.main,
                                            }}
                                        >
                                            {t(
                                                'You must accept the terms and conditions'
                                            )}
                                        </CustomTypography>
                                    )}
                            </CustomStackFullWidth>
<<<<<<< HEAD
                            <Stack witdh="100%" justifyContent="center" alignItems="center">
                                {!signUpFormik?.values?.tandc ? (
                                    <Button
                                        type="submit"
                                        fullWidth
                                        sx={{ mt: 1, mb: 3.5, maxWidth: "400px",height: "45px" }}
                                        loading={true}
                                        loadingPosition="start"
                                        variant="contained"
                                        disabled
                                    >
                                        {t('Sign Up')}
                                    </Button>
                                ) : (
                                    <Button
                                        type="submit"
                                        fullWidth
                                        sx={{ mt: 1, mb: 3.5, maxWidth: "400px",height: "45px" }}
                                        loading={true}
                                        loadingPosition="start"
                                        variant="contained"
                                    >
                                        {t('Sign Up')}
                                    </Button>
                                )}
                            </Stack>


                        </Stack>
                    </form>

=======
                            <Button
                                type="submit"
                                fullWidth
                                sx={{ mt: 3, mb: 2 }}
                                loading={true}
                                loadingPosition="start"
                                variant="contained"
                            >
                                {t('Sign Up')}
                            </Button>
                        </CustomStackFullWidth>
                    </form>
                    <Box>
                        <CustomTypography align="center">
                            {t('Already have an account?')}
                            <CustomLink
                                onClick={() => {
                                    setModalFor('sign-in')
                                }}
                                href="#"
                                variant="body2"
                                sx={{ ml: '5px' }}
                            >
                                {t('Sign In')}
                            </CustomLink>
                        </CustomTypography>
                        {/*<CustomTypography align="center">*/}
                        {/*    {t('Continue as')}*/}
                        {/*    <CustomLink href="#" variant="body2">*/}
                        {/*        {'Guest'}*/}
                        {/*    </CustomLink>*/}
                        {/*</CustomTypography>*/}
                    </Box>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                </CustomStackFullWidth>
                {global?.social_login.length > 0 && (
                    <CustomStackFullWidth
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                    >
<<<<<<< HEAD
                        <SocialLogins
                            socialLogins={global?.social_login}
                            handleParentModalClose={handleClose}
                            setJwtToken={setJwtToken}
                            setUserInfo={setUserInfo}
                            handleSuccess={handleSuccess}
                            setModalFor={setModalFor}
                        />
                    </CustomStackFullWidth>
                )}
                <Box mt="1.8rem">
                    <CustomTypography align="center" fontSize="14px">
                        {t('Already have an account?')}
                        <CustomLink
                            onClick={() => {
                                setModalFor('sign-in')
                            }}
                            href="#"
                            variant="body2"
                            sx={{ ml: '5px' }}
                        >
                            {t('Sign In')}
                        </CustomLink>
                    </CustomTypography>
                </Box>
=======
                        <CustomTypographyGray nodefaultfont="true">
                            {t('Or')}
                        </CustomTypographyGray>
                        <CustomTypography>
                            {t('Social Register')}
                        </CustomTypography>
                        <SocialLogins
                            socialLogins={global?.social_login}
                            handleParentModalClose={handleClose}
                        />
                    </CustomStackFullWidth>
                )}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
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
            </RTL>
        </CustomBoxForModal>
    )
}

export default SignUpPage
