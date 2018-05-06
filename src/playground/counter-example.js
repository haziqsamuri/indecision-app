let count = 0;
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