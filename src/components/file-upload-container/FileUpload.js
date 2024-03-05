import React from 'react'
import { DashedBox } from '../../gurbage/admin/components/forms/FormWithFormik.style'
import { Stack, Tooltip } from '@mui/material'
import cloudIcon from '../../assets/images/icons/cloud-upload.png'
import FileFormatInfo from '../file-format-text/FileFormatInfo'
import {
    FileUploadHeader,
    FileUploadTextContainer,
    ImageContainerFileUpload,
} from './FileUpload.style'
import {
    CustomTypographyEllipsis,
    CustomTypographyGray,
} from '../../styled-components/CustomTypographies.style'
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
<<<<<<< HEAD
import { CustomDotBox } from "../file-previewer/FilePreviewer.style";
import ProfileImagePlaceholder from "../../assets/images/ProfileImagePlaceholder";
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const FileUpload = (props) => {
    const {
        anchor,
        color,
        width,
        errorStatus,
        labelText,
        titleText,
        hintText,
        alignItems
    } = props

    return (
        <Stack width="100%" spacing={3}>
            {titleText && (
                <FileUploadHeader>
                    <CustomTypographyGray variant="h5">
                        {titleText}
                    </CustomTypographyGray>
                </FileUploadHeader>
            )}
            <Stack alignItems="baseline" justifyContent="center" spacing={3}>
<<<<<<< HEAD
                <CustomDotBox
=======
                <DashedBox
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                    onClick={() => anchor.current.click()}
                    color={color}
                    component="label"
                    width={width}
                    errorStatus={errorStatus}
                >
<<<<<<< HEAD
                    <Stack alignItems="center" justifyContent="center" spacing={2}>
                        <ImageContainerFileUpload>
                            <ProfileImagePlaceholder />
=======
                    <Stack alignItems="center" justifyContent="center">
                        <ImageContainerFileUpload>
                            <CloudUploadIcon/>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            {/*<img src={cloudIcon.src} alt="cloudIcon" />*/}
                        </ImageContainerFileUpload>
                        <Tooltip title={labelText}>
                            <FileUploadTextContainer>
<<<<<<< HEAD
                                <CustomTypographyEllipsis sx={{fontSize:"12px",color:theme=>theme.palette.neutral[600]}}>
=======
                                <CustomTypographyEllipsis variant="h5">
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                                    {labelText}
                                </CustomTypographyEllipsis>
                            </FileUploadTextContainer>
                        </Tooltip>
                    </Stack>
<<<<<<< HEAD
                </CustomDotBox>
=======
                </DashedBox>
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                {hintText && <FileFormatInfo text={hintText} />}
            </Stack>
        </Stack>
    )
}

FileUpload.propTypes = {}

export default FileUpload
