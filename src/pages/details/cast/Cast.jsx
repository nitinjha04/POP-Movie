import React, { useRef } from "react";
import { useSelector } from "react-redux";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";


import "./style.scss";

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import Img from '../../../components/lazyLoadImage/Img'
import avatar from "../../../assets/avatar.png";
import { useNavigate } from "react-router-dom";

const Cast = ({data, loading}) => {

    const {url} = useSelector((state)=>state.home)

    const skeleton = ()=>{
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        )
    }

    const navigate = useNavigate()
    const castContainer = useRef()

    const navigation = (dir) =>{
        const container = castContainer.current;

        const scrollAmount =
            dir === "left"
                ? container.scrollLeft - (container.offsetWidth + 20)
                : container.scrollLeft + (container.offsetWidth + 20);

        container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
        });
    }

  return (
    <div className="castSection">
        <ContentWrapper>
            <BsFillArrowLeftCircleFill
                className="carouselLeftNav  arrow"
                onClick={()=>navigation("left")}
            />
            <BsFillArrowRightCircleFill
                className="carouselRightNav  arrow"
                onClick={()=>navigation("right")}
            />
            <div className="sectionHeading">Top Cast</div>
            {!loading ? (
                <div className="listItems" ref={castContainer}>
                    {data?.map((item)=>{
                        let imgUrl = item.profile_path ? url.profile + item.profile_path : avatar;
                        return(
                            <div key={item.id}
                             className="listItem">
                                <div className="profileImg">
                                    <img src={imgUrl}  />
                                </div>
                                <div className="name">{item.name}</div>
                                <div className="character">{item.character}</div>
                            </div>
                        )
                    })}
                </div>
            ):(
                <div className="castSkeleton">
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                    {skeleton()}
                </div>
            )}
        </ContentWrapper>
    </div>
  )
}

export default Cast
