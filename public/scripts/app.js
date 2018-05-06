'use strict';

//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

console.log('App.js is running!');

// JSX - JavaScript XML

var app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  options: []
};

var onFormSubmit = function onFormSubmit(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;

  if ('option') {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderOptions();
  }

  //console.log('form Submitted');
};

var removeAll = function removeAll() {
  app.options = [];
  renderOptions();
};

var renderOptions = function renderOptions() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      app.title
    ),
    app.subtitle && React.createElement(
      'p',
      null,
      app.subtitle
    ),
    React.createElement(
      'p',
      null,
      app.options.length > 0 ? 'Here are your options' : 'No Options',
      ' '
    ),
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'p',
      null,
      React.createElement(
        'button',
        { onClick: removeAll },
        'Remove All'
      )
    ),
    [99, 98, 97],
    React.createElement(
      'ol',
      null,
      React.createElement(
        'li',
        null,
        'Item one'
      ),
      React.createElement(
        'li',
        null,
        'Item two'
      )
    ),
    React.createElement(
      'form',
      { onSubmit: onFormSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add Option'
      )
    )
  );
  ReactDOM.render(template, appRoot);
};

var appRoot = document.getElementById('app');
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
