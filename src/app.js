//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('App.js is running!');

// JSX - JavaScript XML

const title = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: ['One', 'Two']
};


const template = (
  <div>
    <h1>{title.title}</h1>
    {title.subtitle && <p>{title.subtitle}</p>}
    <p>{title.options.length > 0 ? 'Here are your options': 'No Options'} </p>
      <ol>

        <li>Item one</li>
        <li>Item two</li>
      </ol>
  </div>
);
    
/* function hasOption(options){
  if(options.length > 0){
    return <p>Here are your options: {options}</p>;
  }
  else{
    return <p>No options</p>;
  }
} */

/* const user = {
      //name: 'Andrew',
      age: 26,
    location: 'Sydney'
  };
  
function getLocation(location) {
  if (location) {
    return <p>Location: {location} </p>;
  } else{
    return undefined;
  }
}

const userName = 'Mike';
const userAge = 26;
const userLocation = 'Melbourne';
const templateTwo = (
  <div>
      <h1>{user.name ? user.name : 'Anon'}</h1>
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
    </div>
); */

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

const appRoot = document.getElementById('app');
    

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