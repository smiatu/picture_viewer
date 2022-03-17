import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const PictureComponent = () => {
    const pictures = useSelector((state) => state.allPictures.pictures);
    const renderList = Object.keys(pictures).map((picNum) => {
        console.log(pictures[picNum]);
        return (
            <div className="pictureContainer" key={picNum}>
                <Link to={`/picture/${pictures[picNum].id}`}>
                    <div className="author" >{"Author: " + pictures[picNum].userID}</div>
                    <div className="title" >{"Title: " + pictures[picNum].title}</div>
                    <div className="image" >
                        <img src={pictures[picNum].path} alt={pictures[picNum].title} />
                    </div>
                </Link>
            </div>
        );
    });
    return <>{renderList}</>;
};

export default PictureComponent;