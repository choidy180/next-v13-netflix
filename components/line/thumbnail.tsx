import Image from "next/image"
import styled from "styled-components"
import thumbnail from '../../assets/images/onepiece_images.jpg';
import contentImage from '../../assets/images/8abc14bda2ccb9c85763b909b05722b05896a94c.gif';
import { useState } from "react";

const Thumbnail = () => {
    const [mouseOver, setMouseOver] = useState(false);
    const mouseEnter = () => {
        setTimeout(()=>{
            setMouseOver(true)
        },600);
    }
    return (
        <ThumbnailBox onMouseEnter={mouseEnter} onMouseLeave={()=>setMouseOver(false)}>
            <Image
                src={thumbnail}
                alt={'onepiece'}
                layout='fill'
                objectFit='cover'
                className="thumbnail"
            />
            <DetailBox className="detailbox">
                <div className="image">
                    <Image
                        src={mouseOver ? contentImage : thumbnail}
                        alt={'onepiece-detail'}
                        layout='fill'
                        objectFit='cover'
                        className='gif'
                    />
                </div>
                <div className="Head">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="more">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className="sub">
                    <span>98% 일치</span>
                    <div className="age">12+</div>
                    <span>시즌 2개</span>
                    <div className="quality">UHD</div>
                </div>
                <div className="keyword">
                    <span>흥미진진</span>
                    <b>ㆍ</b> 
                    <span>애니매이션</span>
                    <b>ㆍ</b> 
                    <span>소년만화</span>
                </div>
            </DetailBox>
        </ThumbnailBox>
    )
}

const ThumbnailBox = styled.div`
    width: 260px;
    height: 150px;
    border-radius: 4px;
    cursor: pointer;
    transition: all .35s ease-in-out;
    .thumbnail{
        z-index: 999;
    }
    img{
        border-radius: 4px;
    }
    div{
        transition: all .35s ease-in-out;
    }
    &:hover{
        border-radius: 8px;
        .thumbnail{
            display: none;
        }
        .detailbox{
            display: flex;
            width: 340px;
            height: 360px;
            z-index: 9999;
        }
    }
`
const DetailBox = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 260px;
    height: 150px;
    flex-direction: column;
    background-color: #141414;
    transition: all .35s ease-in-out;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.999) 0px 3px 6px, rgba(0, 0, 0, 0.999) 0px 3px 6px;
    .image{
        width: 100%;
        height: 100%;
    }
    .Head{
        width: 100%;
        height: 60px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 12px;
        padding-bottom: 0;
        gap: 4px;
        svg{
            width: 42px;
            height: 42px;
            color: rgb(204, 204, 204);
            cursor: pointer;
            &:hover{
                color: #FFFFFF;
            }
        }
        .more{
            position: absolute;
            right: 12px;
        }
    }
    .sub{
        width: 100%;
        height: 60px;
        padding: 4px 16px;
        font-family: 'Pretendard-Regular';
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;
        span{
            font-size: 18px;
        }
        .age{
            padding: 5px 9px;
            border: 1px solid #FFFFFF;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            /* width: 54px; */
        }
        .quality{
            padding: 5px 9px;
            border: 1px solid #cdcdcd;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 14px;
            border-radius: 2px;
            color: #cdcdcd;
        }
    }
    .keyword {
        width: 100%;
        height: 60px;
        padding: 0px 16px;
        padding-bottom: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 0;
        span {
            font-size: 18px;
        }
        b{
            font-size: 28px;
            color: #b4b4b4;
        }
    }
`

export default Thumbnail;