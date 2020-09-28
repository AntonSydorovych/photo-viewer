import React from "react";
import {getPhotosTC} from '../state/reducer';
import {Viewer} from "./PhotoViewer";
import {connect} from "react-redux";

class ViewerContainer extends React.Component{

    render() {

        let loadPhotos = (device, martianDay, camera) => {
            this.props.getPhotosTC(device, martianDay, camera);
        }

        return(

            <Viewer  loadPhotos = {loadPhotos}
            photos = {this.props.photos}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        photos: state.reducer.photos
    }
}


export default connect(mapStateToProps,
    { getPhotosTC })(ViewerContainer);