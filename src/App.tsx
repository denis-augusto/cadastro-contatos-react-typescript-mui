import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/Index";
import { AppThemeProvider } from "./shared/contexts/Index";



function App() {
  return (
    <AppThemeProvider>
      
      <BrowserRouter>

        <AppRoutes />
        
      </BrowserRouter>

    </AppThemeProvider>
  );
}

export default App;
