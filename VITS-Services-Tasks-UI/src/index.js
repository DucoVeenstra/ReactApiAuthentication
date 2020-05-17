import React from 'react';
import ReactDOM from 'react-dom';
import { AzureAD, AuthenticationState } from 'react-aad-msal';

import { authProvider } from './common/authProvider';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AzureAD provider={authProvider} forceLogin={true}>
      {
        ({ login, logout, authenticationState, error, accountInfo }) => {
          switch (authenticationState) {
            case AuthenticationState.Authenticated:
              return (
                <div>
                  <p>
                    <span>Welcome, {accountInfo.account.name}!</span>
                    <button onClick={logout}>Logout</button>
                  </p>
                  <App />
                </div>
              );
            case AuthenticationState.Unauthenticated:
              return (
                <div>
                  {error && <p><span>An error occured during authentication, please try again!</span></p>}
                  <p>
                    <span>Hey stranger, you look new!</span>
                    <button onClick={login}>Login</button>
                  </p>
                </div>
              );
            case AuthenticationState.InProgress:
              return (<p>Authenticating...</p>);
          }
        }
      }
    </AzureAD>
  </React.StrictMode>,
  document.getElementById('root')
);