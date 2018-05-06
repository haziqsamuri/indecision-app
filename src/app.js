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

const renderOptions = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? 'Here are your options': 'No Options'} </p>
      <p>{app.options.length}</p>
      <p><button onClick={removeAll}>Remove All</button></p>
      {
        [99, 98, 97]
      }
        <ol>
  
          <li>Item one</li>
          <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}> 
          <input type="text" name="option"/>
          <button>Add Option</button>
        </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
}; 

const appRoot = document.getElementById('app');
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
