import React, { useEffect, useState } from 'react'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
import { Typography } from '@mui/material'
import CustomImageContainer from '../CustomImageContainer'
import { useSelector } from 'react-redux'
import ImagePreviewOnModal from '../image-preview-on-modal'
import CustomModal from '../custom-modal/CustomModal'
<<<<<<< HEAD
import { Box, Stack } from "@mui/system";
import { t } from 'i18next'
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { useTheme } from "@mui/styles";

const Refund = (props) => {
    const { title, note, image, reason } = props
    const theme =useTheme()
=======
import { Box } from '@mui/system'
import { t } from 'i18next'

const Refund = (props) => {
    const { title, note, image, reason } = props
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { global } = useSelector((state) => state.globalSettings)
    const [openModal, setOpenModal] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    useEffect(() => {
        selectedImage && setOpenModal(true)
    }, [selectedImage])
    const handleImageClick = (item) => {
        setSelectedImage(item)
    }

    const handleModalClose = (value) => {
        setOpenModal(value)
        setSelectedImage(null)
    }
    return (
<<<<<<< HEAD
        <CustomStackFullWidth spacing={.5}>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography fontSize={{xs:"14px",sm:"14px",md:"16px"}} fontWeight="500" color={ theme.palette.customColor.fifteen}>
                    {t(title)}
                </Typography>
                <ReportProblemIcon sx={{color:theme=>theme.palette.error.main,fontSize:"1rem"}}/>
            </Stack>
            <Stack padding={{ xs:"10px",sm:"20px",md:"20px" }} borderRadius="10px" spacing={1}>
                {reason && (
                    <Typography fontWeight="700" color={ theme.palette.customColor.fifteen} fontSize={{xs:"14px",md:"16px"}}>
                        {t("Reason")}&nbsp;: &nbsp;
                        <Typography
                            fontSize={{xs:"14px",md:"16px"}}
                            component="span"
                            sx={{ color: (theme) => theme.palette.neutral[400] }}
                        >
                            {reason}
                        </Typography>
                    </Typography>
                )}
                {note && (
                    <Typography fontWeight="700" color={ theme.palette.customColor.fifteen} fontSize={{xs:"14px",md:"16px"}}>
                        {t("Note")}&nbsp;: &nbsp;
                        <Typography
                            fontSize={{xs:"14px",md:"16px"}}
                            component="span"
                            sx={{ color: (theme) => theme.palette.neutral[400] }}
                        >
                            {note}
                        </Typography>
                    </Typography>
                )}

                {image && (
                    <CustomStackFullWidth
                        direction="row"
                        alignItems="center"
                        gap={1}
                        flexWrap="wrap"
                        sx={{cursor:"pointer"}}
                    >
                        {JSON.parse(image)?.map((item, index) => (
                            <Box key={index} onClick={() => handleImageClick(item)}>
                                <CustomImageContainer
                                    src={`${global?.base_urls?.refund_image_url}/${item}`}
                                    alt={note}
                                    height="77px"
                                    width="77px"
                                    borderRadius="5px"
                                />
                            </Box>
                        ))}
                        <CustomModal
                            openModal={openModal}
                            setModalOpen={handleModalClose}
                        >
                            <CustomStackFullWidth>
                                <ImagePreviewOnModal
                                    modalImage={`${global?.base_urls?.refund_image_url}/${selectedImage}`}
                                    handleModalClose={handleModalClose}
                                />
                            </CustomStackFullWidth>
                        </CustomModal>
                    </CustomStackFullWidth>
                )}
            </Stack>

=======
        <CustomStackFullWidth spacing={0.5}>
            <Typography
                sx={{
                    fontWeight: '500',
                    textTransform: 'capitalize',
                }}
            >
                {t(title)}
            </Typography>
            {reason && (
                <Typography
                    sx={{ color: (theme) => theme.palette.neutral[400] }}
                >
                    {reason}
                </Typography>
            )}
            {note && (
                <Typography
                    sx={{ color: (theme) => theme.palette.neutral[400] }}
                >
                    {reason && t('Note:-')} {note}
                </Typography>
            )}

            {image && (
                <CustomStackFullWidth
                    direction="row"
                    alignItems="center"
                    gap={1}
                    flexWrap="wrap"
                >
                    {JSON.parse(image)?.map((item, index) => (
                        <Box key={index} onClick={() => handleImageClick(item)}>
                            <CustomImageContainer
                                src={`${global?.base_urls?.refund_image_url}/${item}`}
                                alt={note}
                                height="100px"
                                width="100px"
                            />
                        </Box>
                    ))}
                    <CustomModal
                        openModal={openModal}
                        setModalOpen={handleModalClose}
                    >
                        <ImagePreviewOnModal
                            modalImage={`${global?.base_urls?.refund_image_url}/${selectedImage}`}
                            handleModalClose={handleModalClose}
                        />
                    </CustomModal>
                </CustomStackFullWidth>
            )}
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </CustomStackFullWidth>
    )
}

Refund.propTypes = {}

export default Refund
