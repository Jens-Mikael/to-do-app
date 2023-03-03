import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import ToDoComponent from "./components/ToDoComponent";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <CssBaseline />
        <ToDoComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
