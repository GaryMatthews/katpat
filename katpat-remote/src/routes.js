import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import Home from 'containers/home'
import Play from 'containers/play'
import Calibrate from 'containers/calibrate'
import Studio from 'containers/studio'
import Layout from 'components/layout'
import BleProtectedRoute from 'components/ble-protected-route'
import { PlayIcon, CalibrateIcon, StudioIcon } from 'components/icons'

const homepage = process.env.REACT_APP_PUBLIC_URL

let routerProps = {}
if (homepage) {
  routerProps.basename = homepage
}

console.log('homepage sets with:', homepage)

const Routes = () => (
  <BrowserRouter { ...routerProps }>
    <Switch>
      <Route exact path="/" component={Home} />
      <BleProtectedRoute path="/play" component={Play} title='PLAY' icon={ PlayIcon } />
      <BleProtectedRoute path='/calibrate' component={Calibrate} title='CALIBRATE' icon={ CalibrateIcon } />
      <Layout path="/studio" component={Studio} title='STUDIO' icon={ StudioIcon } />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>
)

export default Routes