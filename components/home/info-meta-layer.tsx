import styled from "styled-components";
import titleLogo from '../../assets/images/AAAABfzN-oJgCYewW4CNGT42qxYWaODZdEklFR6pGzVOktBmBpH_khaAaBsW-LSDLPV78Kt-vmuFW6yRsipCbR4d__Mg5rJSLwgl1dQIYh0f4eB8.png';
import AutoHeightImage from "../auto/AutoHeightImage";


const InfoMetaLayer = () => {
    return (
        <Container>
            <MetaInfo>
                <img src={titleLogo.src} alt="" />
            </MetaInfo>
        </Container>
    )
}

const Container = styled.div`
    padding: 40px 30px;
    width: 100%;
    min-height: 100vh;
`

const MetaInfo = styled.div`
    width: 36vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export default InfoMetaLayer;