import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {dislikePicture, likePicture} from "../redux/actions/pictureActions";

const LikeComponent = () => {
    const picture = useSelector((state) => state.picture);
    const { id, isLiked } = picture;
    const dispatch = useDispatch();

    if(isLiked === false){
        return (
            <div className="likeButton like">
                <button onClick={() => dispatch(likePicture(id))} />
            </div>
        )
    } else {
        return (
            <div className="likeButton dislike">
                <button onClick={() => dispatch(dislikePicture(id))} />
            </div>
        )
    }
}

export default LikeComponent;