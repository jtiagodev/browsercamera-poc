import React from "react";
import Webcam from "react-webcam";
import { Button } from "@material-ui/core";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const WebcamCapture = () => {
  const [webcamPicture, setWebcamPicture] = React.useState(undefined);
  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setWebcamPicture(imageSrc);
  }, [webcamRef]);

  return (
    <>
      {webcamPicture && (
        <div style={{ position: "relative" }}>
          <div>
            <img alt="Photo" src={webcamPicture} />
          </div>

          <div
            style={{
              transform: "rotate(45deg)",
              position: "absolute",
              top: "50%",
              left: "0%"
            }}
          >
            <span style={{ fontSize: "60px", color: "white", opacity: 0.2 }}>
              watermark jtiago (copyright 2020)
            </span>
          </div>

          <div style={{ position: "absolute", top: 10, left: 10 }}>
            <Button
              onClick={() => setWebcamPicture(undefined)}
              variant="contained"
            >
              ERASE
            </Button>
          </div>
        </div>
      )}
      {!webcamPicture && (
        <div style={{ position: "relative" }}>
          <div>
            <Webcam
              audio={false}
              height={720}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              width={1280}
              videoConstraints={videoConstraints}
            />
          </div>

          <div style={{ position: "absolute", top: 10, left: 10 }}>
            <Button onClick={capture} variant="contained">
              TAKE PICTURE
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default WebcamCapture;
