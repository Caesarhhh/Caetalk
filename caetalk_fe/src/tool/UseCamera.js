import React, { useEffect } from "react";
import { useRef } from "react";
let UseCamera;
export default UseCamera = () => {
    let video_ref: any = useRef();
    async function getMedia() {
        let video = video_ref.current;
        let constraints = {
            video: { width: 500, height: 500 },
            audio: true,
        };

        try {
            let MediaStream = await navigator.mediaDevices.getUserMedia(constraints);
            video.srcObject = MediaStream;
            video.play();
        } catch (e) {
            alert(e);
        }
    }
    useEffect(()=>{getMedia()},[])
    let captureImage = () => {
        let video = video_ref.current;
        let canvas: any = document.createElement("canvas");
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);

        let a_down:a = document.createElement("a");
        a_down.src=""
        return canvas.toDataURL("image/jpeg");
    };

    useEffect(() => {
        // let video = video_ref.current;
        // getMedia(video);
    }, []);

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <video
                ref={video_ref}
                width="500px"
                height="500px"
                autoPlay={true}
            ></video>
        </div>
    );
};