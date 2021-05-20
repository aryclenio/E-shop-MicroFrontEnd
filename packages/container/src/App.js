import { createGenerateClassName, StylesProvider } from '@material-ui/styles';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
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
          <MarketingApp />
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
