import React, { useCallback, useRef } from 'react';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Webcam from 'react-webcam';
import { useDispatch } from 'react-redux';
import { setCameraImage } from './features/cameraSlice';
import { useHistory } from 'react-router';
import './WebcamCapture.css';

const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: 'user'
};

const WebcamCapture = () => {

    const webcamRef = useRef(null);
    const dispatch = useDispatch();

    const history = useHistory();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push('/preview')
    }, [webcamRef]);

    return (
        <div className='webcamCapture'>
            <Webcam audio={false}
                height={videoConstraints.height}
                width={videoConstraints.width}
                ref={webcamRef}
                screenshotFormat='image/jpeg'
                videoConstraints={videoConstraints}>

            </Webcam>

            <RadioButtonUncheckedIcon
                className='webcamCapture__button'
                onClick={capture}
                fontSize='large'
            ></RadioButtonUncheckedIcon>


        </div>
    );
};

export default WebcamCapture;