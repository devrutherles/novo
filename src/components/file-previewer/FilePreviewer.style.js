import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { ImageContainer } from '../../styled-components/CustomStyles.style'
import IconButton from '@mui/material/IconButton'
import React from 'react'

export const FilePreviewerWrapper = styled(ImageContainer)(
    ({ theme, width, objectFit, height, borderRadius }) => ({
        cursor: 'pointer',
        height: '8.75rem',
        maxWidth: width,
        width: '100%',
        borderRadius: '50%',
        marginRight: 'auto',
        marginLeft: 'auto',
        '& img': {
<<<<<<< HEAD
            borderRadius: borderRadius ? borderRadius : "12px",
=======
            borderRadius: borderRadius?borderRadius:"12px",
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
            height: '100%',
            objectFit: objectFit ? 'contained' : 'cover',
        },
    })
)

export const IconButtonImagePreviewer = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.error.back,
    color: theme.palette.error.light,
    position: 'absolute',
    borderRadius: '50%',
    bottom: -13,
    right: -18,
}))
export const CustomBoxForFilePreviewer = styled(Box)(({ theme, width }) => ({
    width: width ? width : '100%',
    position: 'relative',
    height: '10.25rem',
    // justifyContent:"center"
}))
<<<<<<< HEAD
export const CustomDotBox = styled(Box)(({ theme, width, error, borderRadius }) => ({
    width: width && '100%',
    position: 'relative',
    height: '9.25rem',
    border: `1px dashed ${theme.palette.neutral[400]}`,
    borderRadius: borderRadius ? borderRadius : "10px",
=======
export const CustomDotBox = styled(Box)(({ theme, width, error,borderRadius }) => ({
    width: width && '100%',
    position: 'relative',
    height: '9.25rem',
    border: '1px dashed ',
    borderRadius: borderRadius?borderRadius:"10px",
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderColor: error && 'red',
}))
export const CustomBoxImageText = styled(Box)(({ theme }) => ({
    maxWidth: '14.375rem',
}))
