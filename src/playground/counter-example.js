class Counter extends React.Component{
  constructor(props){
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0,
      name: 'Julie'
    };
  }
  /* getCount(){
    return this.count;
  } */
  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
    //console.log('handleAddOne');
    //count++;
  }
  
  handleMinusOne(){
    this.setState((prevState) => {
      return{
        count: prevState.count -1
      };
    });
    //count--;
  }
  
  handleReset(){
    this.setState(()=> {
      return{
        count: 0
      }
    })
    this.setState((prevState)=> {
      return{
        count: prevState.count +1
      }
    })
    console.log('handleReset');
    //count = 0;
  }
  render(){
    return(
      <div>
      {this.state.name}
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}


ReactDOM.render(<Counter />, document.getElementById('app'));

/* let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};
//const someId = 'myidhere'

//JSX has no built in data binding


//console.log(templateTwo);

// Challenge
// Make button "-1" - setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"


    

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <div><button onClick={minusOne}>-1</button></div>
      <div><button onClick={reset}>reset</button></div>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    console.log('handleAddOne');
  }
  handleMinusOne() {
    console.log('handleMinusOne');
  }
  handleReset() {
    console.log('handleReset');
  }
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
 */