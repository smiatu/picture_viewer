import React, { useEffect } from "react";
import  { useParams } from "react-router-dom";
import axios from "axios";
import {useDispatch,useSelector} from "react-redux";
import {selectPicture } from "../redux/actions/pictureActions";
import LikeComponent from "./LikeComponent";

const PictureDetails = () => {
    const picture = useSelector((state) => state.picture);
    const { title, userID, path } = picture;
    const { pictureId } = useParams();
    const dispatch = useDispatch();

    const fetchPictureDetails = async () => {
        const response = await axios.get("http://localhost:3000/data/pictures.json").catch((err) => {
            console.log("Err", err);
        });
        console.log(response.data);
        dispatch(selectPicture(response.data[pictureId]));
    };
    useEffect(() => {
        if (pictureId && pictureId !== "") fetchPictureDetails();
    },[pictureId]);
    return (
        <div className="selectedPictureContainer">
            {Object.keys(picture).length === 0 ? (
                <div>Loading</div>
            ) : (
                <div className="selectedPicture">
                    <div className="title">{"This picture is named " + title}</div>
                    <div className="author">{"The author of the picture is " + userID}</div>
                    <div className="image">
                        <img src={path} />
                        <LikeComponent />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PictureDetails;