// TODO: Create an Apollo Provider to make every request work with the Apollo Server.
import './App.css';
// Important for API Consumption: To enable interaction with our GraphQL API on the front end, we utilize these tools to develop the client-side behavior
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';

// import SearchBooks from './pages/SearchBooks';
// import SavedBooks from './pages/SavedBooks';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex-column justify-flex-start min-100-vh">
        <Navbar />
        <div className="container">
        
            <Outlet />  
        </div>    
          {/* <SearchBooks />
          <SavedBooks /> */}
      </div>
    </ApolloProvider>
  );
}


export default App;

