import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {dislikePicture, likePicture} from "../redux/actions/pictureActions";

const LikeComponent = () => {
    const picture = useSelector((state) => state.picture);
    const { id, isLiked } = picture;
    const dispatch = useDispatch();

    return (
        <div>
            {isLiked === false ? (
                <div>
                    <button onClick={() => dispatch(likePicture(id))}>Like</button>
                </div>
            ) : (
                <div>
                    <button onClick={() => dispatch(dislikePicture(id))}>Dislike</button>
                </div>
            )}
        </div>
    )
}

export default LikeComponent;