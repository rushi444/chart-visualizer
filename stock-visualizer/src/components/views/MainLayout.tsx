import React, { FC, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { HighchartsMenu } from '../navigation/HighchartsMenu';
import { DashboardHome } from '../dashboards/DashboardHome';

export const MainLayout: FC = () => {
  return (
    <div>
      <HighchartsMenu />
      <main>
        <Suspense
          fallback={
            <div style={{ textAlign: 'center', marginTop: '10%' }}>
              <h5>Loading...</h5>
            </div>
          }>
          <Switch>
            <Route exact path='/' component={DashboardHome} />
            <Route exact path='home' component={DashboardHome} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
};
