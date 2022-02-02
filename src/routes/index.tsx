import { Route, BrowserRouter } from 'react-router-dom';

import { Home } from '../pages/Home';

// const devUrl = 'https://grminternet.com.br/hmg/panamazonia';
// const publicUrl = process.env.PUBLIC_URL;
// const env = process.env.NODE_ENV;

// const basename =
//   publicUrl === devUrl || env === 'development'
//     ? '/hmg/panamazonia/'
//     : '/observamazonia/';

// basename={basename}

const Routes = () => (
  <BrowserRouter>
    <Route component={Home} path="/" exact />
  </BrowserRouter>
);

export { Routes };
