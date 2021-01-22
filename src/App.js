import React, { Suspense } from 'react'
import './App.css';
import { createBrowserHistory } from 'history'
import Spinner from './components/Spinner'
import router from './routers/routers'
import { Route, Router, Switch, Redirect } from 'react-router-dom';


const hist = createBrowserHistory()

function App() {
  const mapRouter = (router) => {
    return router.map((router, index) => {
      return <Route path={router.path}
        component={router.component}
        key={index}
        exact={router.exact}
      />
    })
  }
  return (
    <Router history={hist}>
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="dashboard" component={React.lazy(() => import('./layouts/Admin'))} />
          {mapRouter(router)} */}
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
