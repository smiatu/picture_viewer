import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import { setPictures } from "../redux/actions/pictureActions";
import PictureComponent from "./PictureComponent";

const PictureList = () => {
    const pictures = useSelector((state)=>state);
    const dispatch = useDispatch();
    const fetchPictures = async () => {
        const response = await axios.get("http://localhost:3000/data/pictures.json").catch((err) => {
            console.log("Err", err);
        });
        dispatch(setPictures(response.data));
    };
    useEffect(() => {
        fetchPictures();
    },[]);
    //console.log("Pictures: ", pictures);
    return (
        <div className="container">
            <div className="header">Lista zdjęć</div>
            <PictureComponent />
        </div>
    )
}

export default PictureList;