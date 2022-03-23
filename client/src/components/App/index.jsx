import _ from 'lodash';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { TabMenu } from 'primereact/tabmenu';
import { Redirect, Route, Switch, useLocation, useHistory } from 'react-router-dom';
import { useCreation } from 'ahooks';

import Nielsen from 'components/Nielsen';
import VideoAmp from 'components/VideoAmp';

import { nielsenClient, videoAmpClient  } from './clients';

export default function App() {
  const { push } = useHistory();
  const { pathname } = useLocation();

  const activeIndex = useCreation(() => _.findIndex(routes, { path: pathname }), [pathname]);

  return (
    <div id="root-app">
      <TabMenu model={routes} activeIndex={activeIndex} onTabChange={handleRouteChange} />

      <Switch>
        <Route path="/nielsen">
          <ApolloProvider client={nielsenClient}>
            <Nielsen />
          </ApolloProvider>
        </Route>

        <Route path="/video-amp">
          <ApolloProvider client={videoAmpClient}>
            <VideoAmp />
          </ApolloProvider>
        </Route>

        <Redirect to="/nielsen" />
      </Switch>
    </div>
  );

  function handleRouteChange({ value: { path } }) {
    push(path);
  }
}

const routes = [
  { label: 'Nielsen', path: '/nielsen' },
  { label: 'VideoAMP', path: '/video-amp' }
];
