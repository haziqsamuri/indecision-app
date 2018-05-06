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

var appRoot = document.getElementById('app');

//const numbers = [55, 101, 1000];

var onMakeDecision = function onMakeDecision() {
  var randomNum = Math.floor(Math.random() * app.options.length);
  var option = app.options[randomNum];
  alert(option);
  console.log(randomNum);
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
      'button',
      { disabled: app.options.length == 0, onClick: onMakeDecision },
      'What should I do?'
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
    React.createElement(
      'ol',
      null,
      app.options.map(function (option) {
        return React.createElement(
          'li',
          { key: option },
          option
        );
      })
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
