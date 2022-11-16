import styled from "styled-components";
import titleLogo from '../../assets/images/AAAABfzN-oJgCYewW4CNGT42qxYWaODZdEklFR6pGzVOktBmBpH_khaAaBsW-LSDLPV78Kt-vmuFW6yRsipCbR4d__Mg5rJSLwgl1dQIYh0f4eB8.png';
import backImage from '../../assets/images/b79f0f9a22f1c17454d4b1c29b3318ddaa5de07a.gif';
import Image from "next/image";

const InfoMetaLayer = () => {
    return (
        <Container>
            <BackImage>
                <Image
                    src={backImage}
                    quality={100}
                    alt={'원피스'}
                    layout='fill'
                    objectFit='cover'
                />
                <div/>
            </BackImage>
            <MetaInfo>
                <img src={titleLogo.src} alt="" />
                <h1>화요일 여러 시즌 동시 공개</h1>
                <h2>고무고무 열매를 먹고 고무 인간이 된 루피. 해적왕을 꿈꾸는 그의 곁엔 검객 조로, 항해사 나미, 저격수 우솝, 요리사 상디 등 밀짚모자 일당이 있다. 위대한 항로를 따라 대비보 '원피스'를 찾아가는 루피의 모험을 그렸다.</h2>
            </MetaInfo>
        </Container>
    )
}

const Container = styled.div`
    width: 100vw;
    height: 80vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const MetaInfo = styled.div`
    width: 36vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 60px;
    h1 {
        width: 100%;
        font-size: 34px;
        margin: 1vw 0;
        font-family: 'Pretendard-Regular';
    }
    h2 {
        margin-top: 1vw;
        font-size: 22px;
        line-height: 28px;
        word-break: keep-all;
        font-family: 'Pretendard-Regular';
    }
`

const BackImage = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    div{
        position: absolute;
        width: 100%;
        height: 100%;
        background: linear-gradient(
            to bottom,
            #141414 5%,
            transparent 40%,
            transparent 70%,
            transparent 75%,
            #141414 100%
        );
    }
`

export default InfoMetaLayer;