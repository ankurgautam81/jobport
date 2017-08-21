import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
	
   render() {   
      return (
         <div className="col-sm-12">
            hi
         </div>
      );
   }
}

export default App;
ReactDOM.render(<App />, document.getElementById('app'));