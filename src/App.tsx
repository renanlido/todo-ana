import { ThemeProvider } from 'styled-components';
import GlobalStyles from './global/styles/global';
import { Routes } from './routes';
import { dark, light } from './global/themes';
// import { CustomContextHooks } from './hooks';

function App() {
  return (
    <ThemeProvider theme={dark}>
      {/* <CustomContextHooks> */}
      <div className="App">
        <GlobalStyles />
        <Routes />
      </div>
      {/* </CustomContextHooks> */}
    </ThemeProvider>
  );
}

export default App;
