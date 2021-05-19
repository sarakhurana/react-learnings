import React, { useState } from 'react';
import ImageUploader from 'react-images-upload';
import "./uploadImage.css"

const UploadComponent = ({ onImage}) => (
        <ImageUploader
            key="image-uploader"
            // withIcon={true}
            singleImage={true}
            withPreview={true}
            label="Maximum size file: 5MB"
            buttonText="Choose an image"
            onChange={onImage}
            imgExtension={['.jpg', '.png', '.jpeg']}
            maxFileSize={5242880}
        ></ImageUploader>
);

 const UploadImage = ({image,setImage}) => {
    const [progress, setProgress] = useState('getUpload');
    const [errorMessage, setErrorMessage] = useState('');

    const onImage = async (failedImages, successImages) => {
        if (!successImages) {
            setErrorMessage('missing image to upload');
            setProgress('uploadError');
            return;
        }

        setProgress('uploading');

        try {
            const parts = successImages[0].split(';');
            const mime = parts[0].split(':')[1];
            const name = parts[1].split('=')[1];
            const data = parts[2];
            setImage(successImages)
            setProgress('uploaded');
        } catch (error) {
            console.log('error in upload', error);
            setErrorMessage(error.message);
            setProgress('uploadError');
        }
    };

    const content = () => {
        switch (progress) {
            case 'getUpload':
                return (
                 <>
                {image && <img className="uploaded-image" src={image}></img>}
                <UploadComponent onImage={onImage} />
                </>
                );
            case 'uploading':
                return <h2>Uploading....</h2>;
            case 'uploaded':
                return <div className="image-container"><img src={image} className="uploaded-image" alt="uploaded"></img></div>;
            case 'uploadError':
                return (
                    <>
                        <div>Error message = {errorMessage}</div>
                        <UploadComponent onImage={onImage} />
                    </>
                );
        }
    };

    return (
        <div className="App">
            {content()}
        </div>
    );
};

export default UploadImage