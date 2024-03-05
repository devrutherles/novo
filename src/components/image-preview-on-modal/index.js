import React from 'react'
import PropTypes from 'prop-types'
import CloseIcon from '@mui/icons-material/Close'
import CustomImageContainer from '../CustomImageContainer'
import { CustomStackFullWidth } from '../../styled-components/CustomStyles.style'
<<<<<<< HEAD
import { useTheme } from "@mui/styles";

const ImagePreviewOnModal = (props) => {
    const theme=useTheme()
=======

const ImagePreviewOnModal = (props) => {
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const { modalImage, handleModalClose } = props
    return (
        <CustomStackFullWidth
            sx={{
                position: 'relative',
                width: { xs: '270px', sm: '500px' },
<<<<<<< HEAD
                backgroundColor:theme.palette.neutral[100],
                borderRadius:"10px",
                padding:"10px",
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            }}
            alignItems="flex-end"
            //spacing={1}
        >
            <button
                onClick={() => handleModalClose(false)}
                className="closebtn"
            >
                <CloseIcon sx={{ fontSize: '16px' }} />
            </button>
<<<<<<< HEAD
            <CustomImageContainer src={modalImage} width="100%" height="100%" objectFit="contain" />
=======
            <CustomImageContainer src={modalImage} width="100%" height="100%" />
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </CustomStackFullWidth>
    )
}

ImagePreviewOnModal.propTypes = {}

export default ImagePreviewOnModal
