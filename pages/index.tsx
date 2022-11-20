import styled from "styled-components";
import InfoMetaLayer from "../components/home/info-meta-layer";
import Line from "../components/line";

const Index = () => {
    const code = new URLSearchParams(window.location.search).get('code');
    console.log(code);
    return (
        <>
            <InfoMetaLayer/>
            <Container>
                <Line title='시청중인 컨텐츠'/>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    margin-top: -40px;
    padding: 30px 60px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding-bottom: 200px;
`

export default Index;