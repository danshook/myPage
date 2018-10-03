import React, { Component } from 'react';

import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Bacdrop from './components/Backdrop/Backdrop';

class App extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
       <Toolbar />
       <SideDrawer />
       <Bacdrop />
        <main style={{marginTop: '64px'}}>  
          <p>This is the page content!</p>
        </main>
      </div>
    );
  }
}

export default App;
