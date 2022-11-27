// import React from 'react';

// class TodoApp extends React.Component {
//     constructor(props) {
//       super(props)
//       this.state = {
//           render: false
//       }
//       this.alertHi = this.alertHi.bind(this);
//     }
    
//     alertHi() {
//         this.setState({render: !this.state.render});
//     }
       
//     render() {
//       return(
//         <div className="App">
//           <button onClick={this.alertHi}>Abstract</button>
//           {this.state.render && <h1>Extra text</h1>}
//         </div>
//       );
//     }
//   }
  
//   ReactDOM.render(<TodoApp />, document.querySelector("#app"))
