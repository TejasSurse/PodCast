import { ThemeProvider } from "styled-components"; // to make own component 
import styled from "styled-components"; //to make own component 
import { darkTheme, lightTheme } from "./utils/Themes";
import { useState } from "react";
import Sidebar from "./components/Sidebar";

const Container = styled.div`
  display : flex;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x : hidden;
  overflow-y : hidden;
`;

function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <Sidebar/>
        PodCast</Container>
    </ThemeProvider>
  );
}

export default App;
