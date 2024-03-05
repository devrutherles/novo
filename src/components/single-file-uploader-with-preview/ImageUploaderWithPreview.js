import React, { useRef } from 'react'
import ImagePreviewer from './ImagePreviewer'

const ImageUploaderWithPreview = ({
    file,
    type,
    labelText,
    hintText,
    imageOnChange,
    onChange,
    width,
    imageUrl,
    borderRadius,
    error,
<<<<<<< HEAD
    isIcon
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7
}) => {
    const imageContainerRef = useRef()
    return (
        <>
            <ImagePreviewer
                anchor={imageContainerRef}
                file={file}
                label={labelText}
                hintText={hintText}
                width={width}
                imageUrl={imageUrl}
                borderRadius={borderRadius}
                error={error}
<<<<<<< HEAD
                isIcon={isIcon}
=======
>>>>>>> 2b9803e6ae6041d1e5103330be8bee053eaf09f7

            />
            <input
                ref={imageContainerRef}
                id="file"
                name="file"
                type="file"
                accept="image/*"
                hidden
                onChange={(e) => {
                    onChange(e)
                }}
            />
        </>
    )
}
export default ImageUploaderWithPreview
