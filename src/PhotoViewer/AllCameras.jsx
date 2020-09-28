import React from "react";

export const AllCameras = (props) => {

    switch (props.device) {

//for Curiosity

        case props.cameras.curiosity:

        return (<select onChange={(e) => {props.cameraWasChosen(e.target.value)}}>

            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="mast">MAST</option>
            <option value="chemcam">CHEMCAM</option>
            <option value="mahli">MAHLI</option>
            <option value="mardi">MARDI</option>
            <option value="navcam">NAVCAM</option>
        </select>)


//for Opportunity

        case props.cameras.opportunity:

        return (<select onChange={(e) => {props.cameraWasChosen(e.target.value)}}>
            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="navcam">NAVCAM</option>
            <option value="pancam">PANCAM</option>
            <option value="minites">MINITES</option>
        </select>)

//for Spirit

        case props.cameras.spirit:

        return (<select onChange={(e) => {props.cameraWasChosen(e.target.value)}}>
            <option value="fhaz">FHAZ</option>
            <option value="rhaz">RHAZ</option>
            <option value="navcam">NAVCAM</option>
            <option value="pancam">PANCAM</option>
            <option value="minites">MINITES</option>
        </select>)

        default: return null

    }
}