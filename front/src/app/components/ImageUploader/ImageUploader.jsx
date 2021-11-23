import React, { useState } from 'react'

const ImageUploader = ({
    width = 70,
    height = 70,
    onUpload,
    label = 'Icon',
    image = ''
}) => {
    const [prevImg, setPrevImg] = useState(image)

    const handleUploadImage = (event) => {
        let reader = new FileReader()
        // setFileName(event.target.files[0].name)
        reader.onload = function () {
            var img = new Image()
            img.onload = function () {
                // setImgSize({width: img.width, height: img.height})
            }
            img.src = reader.result
        }
        reader.onloadend = (e) => {
            setPrevImg(reader.result)
            onUpload(reader.result)
            // dispatch({ type: "post_job", [event.target.name]: reader.result })
        }
        reader.readAsDataURL(event.target.files[0])
    }

    return (
        <div
            className="logo-box"
            style={{
                backgroundImage: `url(${prevImg})`,
                width: width,
                height: height,
            }}
        >
            <p>📷 {label}</p>
            <input
                type="file"
                name="company_logo"
                className="input-company-logo"
                accept=".jpg,.png,.svg"
                onChange={handleUploadImage}
            />
        </div>
    )
}

export default ImageUploader
