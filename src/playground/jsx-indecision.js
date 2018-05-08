//This is app.js from end of section 3

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('App.js is running!');

// JSX - JavaScript XML

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if ('option') {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }

  //console.log('form Submitted');
};

const removeAll = () => {
  app.options = [];
  renderOptions();
};


const appRoot = document.getElementById('app');

//const numbers = [55, 101, 1000];

const onMakeDecision = () => {
  const randomNum = (Math.floor(Math.random() * app.options.length));
  const option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
};


const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options': 'No Options'} </p>
      <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
      <p><button onClick={removeAll}>Remove All</button></p>
      {
        //[<p key="1">a</p>, <p key="2">b</p>, <p key="3">c</p> ]
        /* numbers.map((number) =>{
          return <p key={number}>Number: {number}</p>;
        }) */
      }
        <ol>
        {
          app.options.map((option) => <li key={option}>{option}</li>)         
        }
        </ol>
        <form onSubmit={onFormSubmit}> 
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}; 

renderOptions();

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
