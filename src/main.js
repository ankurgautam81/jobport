
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import About from './components/about';
import Skills from './components/skills';


class App extends React.Component {
	
   render() {   
      return (
      	<div>
         <Header />
         <About />
         <Skills />
        </div>
      );
   }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));