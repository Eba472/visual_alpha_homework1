import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Header} from './components/layout/Header'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from "@apollo/react-hooks"
import { EmojisContainer } from './containers/EmojisContainer'
import { AntTable } from './containers/AntTable'
import './App.css'


function App() {
  const client = new ApolloClient({
    uri: 'https://countries-274616.ew.r.appspot.com'
  })

  return (
      <ApolloProvider client={client}>
      <Router>
        <Header />
        <div className="App">
          <div className="container">
            <Route exact path="/" render={() => (
                <AntTable/>
            )} />
            <Route exact path="/emojis" render={() => (
              <EmojisContainer />
            )} />
          </div>
        </div>
      </Router>
      </ApolloProvider>
  )
}

export default App
