import styled from "styled-components";
import Thumbnail from "./line/thumbnail";


const Line = ({title}: any) => {
    return (
        <Container>
            <h1>{title}</h1>
            <ContentLine>
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((content:any, i:any) => (
                            <Thumbnail/>
                        ))
                    }
                </ContentLine>
        </Container>
    )
}

const Container = styled.div`
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-family: 'Pretendard-Regular';
    h1{
        font-size: 22px;
        font-family: 'Pretendard-Regular';
    }
`

const ContentLine = styled.div`
    margin-top: 16px;
    min-width: 100vw;
    height: 150px !important;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 8px;
    transition: all .25s ease-in-out;
`

export default Line;