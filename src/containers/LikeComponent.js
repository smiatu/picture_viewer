import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {dislikePicture, likePicture} from "../redux/actions/pictureActions";

const LikeComponent = () => {
    const picture = useSelector((state) => state.picture);
    const { id, isLiked } = picture;
    const dispatch = useDispatch();

    if(isLiked === false){
        return (
            <div>
                <button onClick={() => dispatch(likePicture(id))}>Like</button>
            </div>
        )
    } else {
        return (
            <div>
                <button onClick={() => dispatch(dislikePicture(id))}>Dislike</button>
            </div>
        )
    }
}

export default LikeComponent;