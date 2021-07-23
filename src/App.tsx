import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routes';

//dados do usuário autenticado
import { AuthContextProvider } from './context/AuthContext';
import { ThemeContextProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <Routes />
        </AuthContextProvider>
      </BrowserRouter>
    </ThemeContextProvider>
  );
}

export default App;