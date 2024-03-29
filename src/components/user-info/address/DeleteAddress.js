import React, { useEffect, useState } from 'react'
<<<<<<< HEAD
import { Button, Stack, Typography } from '@mui/material'
import { useMutation } from 'react-query'
import { AddressApi } from '../../../hooks/react-query/config/addressApi'
import locationImage from '../../../assets/images/locationImage.png'
import { useTranslation } from 'react-i18next'
import CustomImageContainer from '../../CustomImageContainer'
import { toast } from 'react-hot-toast'
import LoadingButton from '@mui/lab/LoadingButton'
import { useTheme } from '@mui/material/styles'
import { onErrorResponse } from '../../ErrorResponse'

const DeleteAddress = ({ handleClose, addressId, refetch }) => {
    const [mapImg, setMapImg] = useState()
    const { t } = useTranslation()
    const theme = useTheme();
=======
import { Box, Button, Container, Modal, Typography } from '@mui/material'
import { useMutation } from 'react-query'
import { AddressApi } from '../../../hooks/react-query/config/addressApi'
import map from '../../../../public/static/map2.png'
import { useTranslation } from 'react-i18next'
import CustomImageContainer from '../../CustomImageContainer'
import placeholder from '../../../../public/static/no-image-found.png'
import { toast } from 'react-hot-toast'
import LoadingButton from '@mui/lab/LoadingButton'
import { styled } from '@mui/material/styles'
import { onErrorResponse } from '../../ErrorResponse'

const style = {}

const CustomContainer = styled(Container)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 350,
    height: 220,
    backgroundColor: theme.palette.whiteContainer.main,
    padding: 4,
    boxShadow:
        '0px 0px 2px rgba(145, 158, 171, 0.2), 0px 10px 20px -5px rgba(145, 158, 171, 0.1)',
    borderRadius: '10px',
}))
const DeleteAddress = ({ open, handleClose, addressId, refetch }) => {
    const [mapImg, setMapImg] = useState()
    const { t } = useTranslation()
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const {
        mutate: deleteMutation,
        isLoading,
        error,
    } = useMutation(AddressApi.deleteAddress, {
        onSuccess: () => {
            toast.success(t('Address removed successfully.'))
            handleClose?.()
            refetch()
        },
        onError: onErrorResponse,
    })
    const deleteAddredd = () => {
        deleteMutation(addressId)
    }
    useEffect(() => {
<<<<<<< HEAD
        setMapImg(locationImage.src)
    }, [])

    return (
        <>
            <CustomImageContainer
                src={mapImg}
                alt={t('map-image')}
                height="34px"
                width="34px"
                objectFit="contained"
            />
            <Typography
                id="modal-modal-description"
                fontWeight={500}
            >
                {t('Delete this address?')}
            </Typography>
            <Stack flexDirection="row" gap="15px">
                <Button
                    sx={{
                        background: (theme) =>
                            theme.palette.neutral[300],
                        color: `${theme.palette.neutral[100]} !important`,
                        width: '85px',
                        fontWeight: 400,
                        '&:hover': {
                            background: (theme) =>
                                theme.palette.neutral[500],
                        },
                    }}
                    onClick={handleClose}
                >
                    {t('No')}
                </Button>
                <LoadingButton
                    loading={isLoading}
                    sx={{
                        background: (theme) =>
                            theme.palette.error.main,
                        color: (theme) =>
                            theme.palette.neutral[100],
                        width: '90px',
                        '&:hover': {
                            background: (theme) =>
                                theme.palette.error.dark,
                        },
                    }}
                    onClick={() => deleteAddredd()}
                >
                    <Typography
                        sx={{
                            color: (theme) =>
                                theme.palette.neutral[100],
                        }}
                    >
                        {t('Delete')}
                    </Typography>
                </LoadingButton>
            </Stack>
        </>
=======
        setMapImg(map.src)
    }, [])

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <CustomContainer>
                    <img
                        style={{
                            position: 'absolute',
                            zIndex: '1',
                            top: '0px',
                            left: '50%',
                            width: '70px',
                            transform: 'translate(-50%, -50%)',
                        }}
                        src={mapImg}
                        alt={t('map-image')}
                        onError={() => setMapImg(placeholder.src)}
                        width="120px"
                    />

                    <Box sx={{ textAlign: 'center', paddingTop: '40px' }}>
                        <Typography
                            id="modal-modal-description"
                            sx={{ mt: 3, padding: '10px' }}
                        >
                            {t('Are you sure you want to delete this address?')}
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                            }}
                        >
                            <Button
                                sx={{
                                    background: (theme) =>
                                        theme.palette.neutral[300],
                                    color: 'black',
                                    width: '120px',
                                }}
                                onClick={handleClose}
                            >
                                {t('Cancel')}
                            </Button>
                            <LoadingButton
                                loading={isLoading}
                                sx={{
                                    background: (theme) =>
                                        theme.palette.error.main,
                                    color: (theme) =>
                                        theme.palette.neutral[100],
                                    width: '120px',
                                    '&:hover': {
                                        background: (theme) =>
                                            theme.palette.neutral[1000],
                                    },
                                }}
                                onClick={() => deleteAddredd()}
                            >
                                <Typography
                                    sx={{
                                        color: (theme) =>
                                            theme.palette.neutral[100],
                                    }}
                                >
                                    {t('Delete')}
                                </Typography>
                            </LoadingButton>
                        </Box>
                    </Box>
                </CustomContainer>
            </Modal>
        </div>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    )
}

export default DeleteAddress
