import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import Container from './components/mainContainer'
import store from './Store'  
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {  
  return (
  <Provider store={store}>
    <Container />
    </Provider> 
  );
}



export default App;
