import styled from "styled-components";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=f1813c888e84456ab8a3b469e6247b0a&response_type=code&redirect_uri=http://localhost:3000/&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20playlist-modify-public%20playlist-modify-private";


const Login = () => {
    return (
        <Container>
            <a href={AUTH_URL}>Login With Spotify</a>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    a {
        padding: 12px;
        border: 1.4px solid #FFFFFF;
        text-decoration: none;
        color: #FFFFFF;
        border-radius: 8px;
        font-size: 18px;
    }
`

export default Login;