import Image from "next/image"
import styled from "styled-components"
import logoImage from '../assets/images/Logonetflix.png'
import profileImage from '../assets/images/newjins.jpg'

const Navigation = () => {
    return (
        <Container>
            {/* 왼쪽 Navigation */}
            <Left>
                <Image
                    src={logoImage}
                    alt={'로고이미지'}
                    width={92.5}
                    height={30}
                />
                <span>홈</span>
                <span>시리즈</span>
                <span>영화</span>
                <span>NEW! 요즘 대세 콘텐츠</span>
                <span>내가 찜한 콘텐츠</span>
                <span>언어별로 찾아보기</span>
            </Left>
            <Right>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
                <Profile>
                    <div>
                        <Image
                            src={profileImage}
                            layout={'fill'}
                            objectFit={'cover'}
                            alt={'프로필이미지'}
                        />
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </Profile>
            </Right>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
`
const Left = styled.div`
    padding: 20px 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    span {
        font-size: 16px;
        color: #FFFFFF;
        opacity: 0.8;
        cursor: pointer;
        transition: all .15s ease-in-out;
        &:hover{
            opacity: 1;
        }
    }
    img {
        cursor: pointer;
    }
`

const Right = styled.div`
    padding: 20px 30px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 24px;
    svg {
        width: 22px;
        height: 22px;
        cursor: pointer;
        color: #FFFFFF;
    }
`
const Profile = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    div {
        width: 32px;
        height: 32px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        overflow: hidden;
    }
    svg {
        fill: #FFFFFF;
        transition: all .3s ease-in-out;
    }
    &:hover{
        svg {
            transform: rotate(-180deg);
        }
    }
`

export default Navigation;