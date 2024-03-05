import React from 'react'
import {
    FilePreviewerWrapper,
    CustomBoxForFilePreviewer,
    IconButtonImagePreviewer,
} from '../file-previewer/FilePreviewer.style'
import { InputLabel } from '@mui/material'
import ImageUploaderThumbnail from './ImageUploaderThumbnail'
import DeleteIcon from '@mui/icons-material/Delete'
<<<<<<< HEAD
import CustomImageContainer from '../CustomImageContainer'
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

const ImagePreviewer = ({
    anchor,
    file,
    label,
    width,
    imageUrl,
    borderRadius,
    error,
<<<<<<< HEAD
    isIcon
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}) => {


    let previewImage
    if (typeof file !== 'string') {
        previewImage = {
            url: URL.createObjectURL(file), // type: file.name.split('.').pop(),
        }
    } else previewImage = file

    return (
        <>
            <CustomBoxForFilePreviewer>
                {previewImage ? (
                    <FilePreviewerWrapper
                        onClick={() => anchor.current.click()}
                        width={width}
                        height="100px"
                        objectFit
                        borderRadius={borderRadius}
                    >
                        {typeof file !== 'string' ? (
<<<<<<< HEAD
                            <CustomImageContainer
                                src={previewImage.url}
                                alt="preview"
                                objectFit="cover"
                            />
                        ) : (
                            <CustomImageContainer
                                src={`${imageUrl}/${previewImage}`}
                                alt="preview"
                                objectFit="cover"
=======
                            <img src={previewImage.url} alt="preview" />
                        ) : (
                            <img
                                src={`${imageUrl}/${previewImage}`}
                                alt="pruueview"
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            />
                        )}
                    </FilePreviewerWrapper>
                ) : (
                    <FilePreviewerWrapper
                        onClick={() => anchor.current.click()}
                        width={width}
                        height="100px"
                        objectFit
                        borderRadius={borderRadius}
                    >
                        <ImageUploaderThumbnail
                            label={label}
                            width={width}
                            error={error}
<<<<<<< HEAD
                            isIcon={isIcon}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
                            borderRadius={borderRadius}
                        />
                    </FilePreviewerWrapper>
                )}
            </CustomBoxForFilePreviewer>
<<<<<<< HEAD
            {/* <CustomImageContainer
                src={image}
                height="100px"
                width="150px"
                borderRadius=".6rem"
                objectFit="cover"
            /> */}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
        </>
    )
}

export default ImagePreviewer
