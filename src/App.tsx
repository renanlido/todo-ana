import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global/styles/global';
import { Routes } from './routes';

import { useToggleTheme } from './hooks';

function App() {
  const { toggleTheme } = useToggleTheme();

  return (
    <ThemeProvider theme={toggleTheme}>
      <div className="App">
        <GlobalStyles />
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
