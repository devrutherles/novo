import React from 'react'
import { Modal, useMediaQuery, useTheme } from '@mui/material'
import { CustomModalWrapper } from './CustomModal.style'

const CustomModal = ({
    openModal,
    setModalOpen,
    children,
    disableAutoFocus,
    maxWidth,
    bgColor,
}) => {
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.up('sm'))
<<<<<<< HEAD
=======

>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    const handleClose = (event, reason) => {
        if (reason && reason == 'backdropClick') {
            if (disableAutoFocus) {
                return
            } else {
                setModalOpen(false)
            }
        } else {
            setModalOpen(false)
        }
    }
    return (
        <div>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableAutoFocus={disableAutoFocus}
                backDrop
            >
                <CustomModalWrapper bgColor={bgColor} maxWidth={maxWidth}>
                    {children}
                </CustomModalWrapper>
            </Modal>
        </div>
    )
}
CustomModal.propTypes = {}

export default CustomModal
