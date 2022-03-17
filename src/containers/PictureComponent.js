import React from "react";
import {useSelector} from "react-redux";

const PictureComponent = () => {
    const pictures = useSelector((state) => state.allPictures.pictures);
    const renderList = Object.keys(pictures).map((picNum) => {
        console.log(pictures[picNum]);
        return (
            <div className="pictureContainer" key={picNum}>
                <div className="author" >{pictures[picNum].userID}</div>
                <div className="header" >{pictures[picNum].title}</div>
                <div className="image" >
                    <img src={pictures[picNum].path} alt={pictures[picNum].title} />
                </div>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default PictureComponent;