import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import AuthApp from './components/AuthApp';
import MarketingApp from './components/MarketingApp';

export default () => {
  const GenerateClassName = createGenerateClassName({
    productionPrefix: 'co',
  });
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={GenerateClassName}>
        <div>
          <Header />
          <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch>
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
