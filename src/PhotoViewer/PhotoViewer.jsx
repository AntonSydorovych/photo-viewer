import React, {useState} from "react";
import {AllCameras} from './AllCameras';

export const Viewer = (props) => {
    //device, martianDay, camera

    let cameras = {
        curiosity: 'curiosity',
        opportunity: 'opportunity',
        spirit: 'spirit'
    };

    let [device, setDevice] = useState("curiosity");
    let [martianDay, setMartianDay] = useState(1);
    let [camera, setCamera] = useState("fhaz");

    let deviceWasChosen = (chosenDevice) => {
        setDevice(device = chosenDevice);
    };

    let martianDayWasChosen = (chosenMartianDay) => {
        setMartianDay(martianDay = chosenMartianDay);
    };

    let cameraWasChosen = (chosenCamera) => {
        setCamera(camera = chosenCamera);
    };
    
    
    let loadPhotos = () => {
        props.loadPhotos(device, martianDay, camera);
    }
//console.log(props.photos)
    let readyPhotos = props.photos.map(photo => <img src={photo.img_src} alt=""></img>);

    return(
        <div>
        <div>

            <h2>Choose photo parameters</h2>

            <span>devise:

                <select onChange={(e) => {deviceWasChosen(e.target.value)}}>
                    <option value = {cameras.curiosity}>Curiosity</option>
                    <option value = {cameras.opportunity}>Opportunity</option>
                    <option value = {cameras.spirit}>Spirit</option>
                </select>

            </span><span>solar day:

            <input type="number" onChange={(e) => {martianDayWasChosen(e.target.value)}}/>

        </span><span>type of camera:

            <AllCameras device = {device} cameras = {cameras}
                        cameraWasChosen={cameraWasChosen}/>

        </span>
        </div>

        <div><button onClick={loadPhotos}>LOAD PHOTOS</button></div>
        <div>{readyPhotos}</div>
        </div>
        )
        }