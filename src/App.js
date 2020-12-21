import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Header, TableHeader} from './components/layout/Header';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from "@apollo/react-hooks";
import { CountriesContainer } from './containers/CountriesContainer';
import { EmojisContainer } from './containers/EmojisContainer';
import './App.css';


function App() {
  const client = new ApolloClient({
    uri: 'https://countries-274616.ew.r.appspot.com'
  });

  return (
      <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="App">
          <div className="container">
            <Route exact path="/" render={props => (
              <React.Fragment>
                <TableHeader/>
                <CountriesContainer />
              </React.Fragment>
            )} />
            <Route exact path="/emojis" render={props => (
              <EmojisContainer />
            )} />
          </div>
        </div>
      </Router>
      </ApolloProvider>
  );
}

export default App;
