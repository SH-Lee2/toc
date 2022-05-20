import Start from "./components/Start";
import styled from "styled-components";

function App() {
    return (
        <Container>
            <Start></Start>
        </Container>
    );
}

export default App;
const Container = styled.main`
    display: grid;
    justify-content: center;
`;
