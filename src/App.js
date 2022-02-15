import './App.css';
import styled from "styled-components";

const Circle = styled.div`
  width: 5rem;
  height: 5rem;
  background: black;
  border-radius: 50%;
`

function App() {
    return (
        <Circle></Circle>
    );
}

export default App;