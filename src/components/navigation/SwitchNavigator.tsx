import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import React, { ReactElement } from 'react';

import Intro from '../screen/Intro';
import Platform from '../screen/Platform';
// import Temp from '../screen/Temp';

function SwitchNavigator(): ReactElement {
  return (
    <BrowserRouter>
      <div style={{ textAlign: 'center' }}>
        <Switch>
          <Route exact={true} path="/" component={Intro} />
          <Route exact={true} path="/platform/:platform" component={Platform} />
          {/* <Route component={Temp} /> */}
          <Redirect path="*" to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default SwitchNavigator;
