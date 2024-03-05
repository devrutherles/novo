import React, { useRef, useState } from 'react'
<<<<<<< HEAD
import { Box, Button, Grid, Stack, TextField, useMediaQuery } from '@mui/material'
import { ButtonBox, CancelButton, CustomDivWithBorder, CustomProfileTextfield, SaveButton } from './Profile.style'
=======
import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import profileImg from '../../../../public/static/profile/pro.png'
import { ButtonBox, SaveButton } from './Profile.style'
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
import { useFormik } from 'formik'
import ValidationSechemaProfile from './Validation'
import ImageUploaderWithPreview from '../../single-file-uploader-with-preview/ImageUploaderWithPreview'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import IconButton from '@mui/material/IconButton'
<<<<<<< HEAD
import { useTheme } from '@mui/material/styles'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { CustomButtonCancel } from '../../../styled-components/CustomButtons.style'

const BasicInformationForm = ({ data, formSubmit, deleteUserHandler }) => {
    const imageContainerRef = useRef()
    const theme = useTheme()
    const isXSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const { t } = useTranslation()
    let { f_name, l_name, phone, email, image } = data
=======
import CreateIcon from '@mui/icons-material/Create'
import Avatar from '@mui/material/Avatar'
import { useTheme } from '@mui/material/styles'
import DeleteIcon from '@mui/icons-material/Delete'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove'
import LoadingButton from '@mui/lab/LoadingButton'
import { t } from 'i18next'
import { CustomStackFullWidth } from '../../../styled-components/CustomStyles.style'
import CustomDialogConfirm from '../../custom-dialog/confirm/CustomDialogConfirm'
import { RTL } from '../../RTL/RTL'
const BasicInformationForm = ({ data, formSubmit, deleteUserHandler }) => {
    const [openModal, setOpenModal] = useState(false)
    const imageContainerRef = useRef()
    const theme = useTheme()
    const { t } = useTranslation()
    const { f_name, l_name, phone, email, image } = data
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

    const { global } = useSelector((state) => state.globalSettings)
    const customerImageUrl = global?.base_urls?.customer_image_url
    const profileFormik = useFormik({
        initialValues: {
            f_name: f_name ? f_name : '',
            l_name: l_name ? l_name : '',
            email: email ? email : '',
            phone: phone ? phone : '',
            image: image ? image : '',
            password: '',
            confirm_password: '',
        },
        validationSchema: ValidationSechemaProfile(),
<<<<<<< HEAD
        onSubmit: async (values) => {
            try {
                formSubmitOnSuccess(values)
            } catch (err) { }
=======
        onSubmit: async (values, helpers) => {
            try {
                formSubmitOnSuccess(values)
            } catch (err) {}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        },
    })
    const formSubmitOnSuccess = (values) => {
        formSubmit(values)
    }
    const singleFileUploadHandlerForImage = (value) => {
        profileFormik.setFieldValue('image', value.currentTarget.files[0])
    }
    const imageOnchangeHandlerForImage = (value) => {
        profileFormik.setFieldValue('image', value)
    }
<<<<<<< HEAD
    const handleReset = () => {
        profileFormik.setValues({
            f_name: f_name ? f_name : '',
            l_name: l_name ? l_name : '',
            email: email ? email : '',
            phone: phone ? phone : '',
            image: image ? image : '',
        });
    };

    return (
        <CustomDivWithBorder isXSmall={isXSmall}>
=======
    const languageDirection = localStorage.getItem('direction')

    return (
        <>
            <Grid item md={12} xs={12} padding="10px">
                <RTL direction={languageDirection}>
                    <ButtonBox onClick={() => setOpenModal(true)}>
                        <Button
                            variant="outlined"
                            type="submit"
                            startIcon={<PersonRemoveIcon />}
                            sx={{
                                color: (theme) => theme.palette.error.pureRed,
                                border: `.5px solid ${theme.palette.error.pureRed}`,
                            }}
                        >
                            <Typography fontWeight="400" fontSize="12px">
                                {t('Delete My Account')}
                            </Typography>
                        </Button>
                    </ButtonBox>
                </RTL>
            </Grid>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            <form noValidate onSubmit={profileFormik.handleSubmit}>
                <Grid
                    container
                    md={12}
                    xs={12}
<<<<<<< HEAD
                >
                    <Grid item md={3} xs={12} display="flex" justifyContent="center" alignItems="center">
                        <Stack
                            sx={{
                                position: 'relative',
                                width: '147px',
                                borderRadius: '50%',
                                marginLeft:{xs:0, md:"-25px"}
=======
                    spacing={2}
                    sx={{ padding: '20px' }}
                >
                    <Grid item md={12} xs={12} textAlign="-webkit-center">
                        <Stack
                            sx={{
                                position: 'relative',
                                width: '139px',
                                // height:"147px",
                                borderRadius: '50%',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            }}
                        >
                            <ImageUploaderWithPreview
                                type="file"
<<<<<<< HEAD
                                labelText={t('Upload your photo')}
                                hintText="Image format - jpg, png, jpeg, gif Image Size - maximum size 2 MB Image Ratio - 1:1"
                                file={profileFormik.values.image}
                                isIcon
=======
                                labelText={t('file Upload')}
                                hintText="Image format - jpg, png, jpeg, gif Image Size - maximum size 2 MB Image Ratio - 1:1"
                                file={profileFormik.values.image}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                onChange={singleFileUploadHandlerForImage}
                                imageOnChange={imageOnchangeHandlerForImage}
                                width="10.75rem"
                                imageUrl={customerImageUrl}
<<<<<<< HEAD
                                borderRadius="20px"
                            />

                            {profileFormik.values.image && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: "14%",
                                        right: "-5px",
=======
                                borderRadius="50%"
                            />

                            {image && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: '18%',
                                        right: '0px',
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                        height: '38px',
                                        width: '38px',
                                        borderRadius: '50%',
                                        background: (theme) =>
                                            theme.palette.neutral[100],
                                    }}
                                >
                                    <IconButton
                                        onClick={() =>
                                            imageContainerRef.current.click()
                                        }
                                    >
<<<<<<< HEAD
                                        <CreateOutlinedIcon sx={{ color: theme.palette.info.main }} />
=======
                                        <CreateIcon color={'secondary'} />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    </IconButton>
                                    <input
                                        ref={imageContainerRef}
                                        id="file"
                                        name="file"
                                        type="file"
                                        accept="image/*"
                                        hidden
                                        onChange={(e) => {
                                            singleFileUploadHandlerForImage(e)
                                        }}
                                    />
                                </Box>
                            )}
                        </Stack>
                    </Grid>
<<<<<<< HEAD
                    <Grid item container md={9} xs={12} spacing={2}>
                        <Grid item md={6} xs={12}>
                            <CustomProfileTextfield
                                id="outlined-basic"
                                variant="outlined"
                                name="f_name"
                                value={profileFormik.values.f_name}
                                onChange={profileFormik.handleChange}
                                label={t('Fast Name')}
                                required
                                error={
                                    profileFormik.touched.f_name &&
                                    Boolean(profileFormik.errors.f_name)
                                }
                                helperText={
                                    profileFormik.touched.f_name &&
                                    profileFormik.errors.f_name
                                }
                                touched={profileFormik.touched.f_name}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <CustomProfileTextfield
                                id="outlined-basic"
                                variant="outlined"
                                name="l_name"
                                value={profileFormik.values.l_name}
                                onChange={profileFormik.handleChange}
                                label={t('Last Name')}
                                required
                                error={
                                    profileFormik.touched.l_name &&
                                    Boolean(profileFormik.errors.l_name)
                                }
                                helperText={
                                    profileFormik.touched.l_name &&
                                    profileFormik.errors.l_name
                                }
                                touched={profileFormik.touched.l_name}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <CustomProfileTextfield
                                label={
                                    <span>
                                        {t('Phone')}{' '}
                                        <span style={{ color: 'red' }}>
                                            ({t('Not Changeable')})
                                        </span>{' '}
                                    </span>
                                }
                                variant="outlined"
                                sx={{ width: '100%' }}
                                InputProps={{
                                    inputMode: 'numeric',
                                    pattern: '[0-9]*',
                                }}
                                value={phone}
                            />
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <CustomProfileTextfield
                                id="outlined-basic"
                                variant="outlined"
                                name="email"
                                value={profileFormik.values.email}
                                onChange={profileFormik.handleChange}
                                label={t('Email')}
                                required
                                error={
                                    profileFormik.touched.email &&
                                    Boolean(profileFormik.errors.email)
                                }
                                helperText={
                                    profileFormik.touched.email &&
                                    profileFormik.errors.email
                                }
                                touched={profileFormik.touched.email}
                            />
                        </Grid>
                    </Grid>
                    <Grid item md={12} xs={12} display="flex" flexDirection="row" gap="10px" justifyContent="flex-end" pt={{xs:"20px", md:0}}>
                        <CancelButton variant="outlined" onClick={handleReset}>
                            {t('Reset')}
                        </CancelButton>
                        <ButtonBox>
                            <SaveButton variant="contained" type="submit">
                                {t('Update Profile')}
=======
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            // label="Enter First Name"
                            variant="outlined"
                            name="f_name"
                            value={profileFormik.values.f_name}
                            onChange={profileFormik.handleChange}
                            label={t('Fast Name')}
                            required
                            error={
                                profileFormik.touched.f_name &&
                                Boolean(profileFormik.errors.f_name)
                            }
                            helperText={
                                profileFormik.touched.f_name &&
                                profileFormik.errors.f_name
                            }
                            touched={profileFormik.touched.f_name}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            // label="Enter Last Name"
                            variant="outlined"
                            name="l_name"
                            value={profileFormik.values.l_name}
                            onChange={profileFormik.handleChange}
                            label={t('Last Name')}
                            required
                            error={
                                profileFormik.touched.l_name &&
                                Boolean(profileFormik.errors.l_name)
                            }
                            helperText={
                                profileFormik.touched.l_name &&
                                profileFormik.errors.l_name
                            }
                            touched={profileFormik.touched.l_name}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            sx={{ width: '100%' }}
                            id="outlined-basic"
                            // label="Enter Email"
                            variant="outlined"
                            name="email"
                            value={profileFormik.values.email}
                            onChange={profileFormik.handleChange}
                            label={t('Email')}
                            required
                            error={
                                profileFormik.touched.email &&
                                Boolean(profileFormik.errors.email)
                            }
                            helperText={
                                profileFormik.touched.email &&
                                profileFormik.errors.email
                            }
                            touched={profileFormik.touched.email}
                        />
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <TextField
                            label={
                                <span>
                                    {t('Phone')}{' '}
                                    <span style={{ color: 'red' }}>
                                        ({t('Not changeable')})
                                    </span>{' '}
                                </span>
                            }
                            variant="outlined"
                            sx={{ width: '100%' }}
                            InputProps={{
                                inputMode: 'numeric',
                                pattern: '[0-9]*',
                            }}
                            value={phone}
                        />
                    </Grid>

                    <Grid item md={12} xs={12}>
                        <ButtonBox>
                            <SaveButton variant="contained" type="submit">
                                {t(' Update')}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            </SaveButton>
                        </ButtonBox>
                    </Grid>
                </Grid>
            </form>
<<<<<<< HEAD
        </CustomDivWithBorder>
    )
}
export default BasicInformationForm
=======
            <CustomDialogConfirm
                dialogTexts={t('Are you sure you want to delete your account?')}
                open={openModal}
                onClose={() => setOpenModal(false)}
                onSuccess={deleteUserHandler}
            />
        </>
    )
}
export default BasicInformationForm
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
