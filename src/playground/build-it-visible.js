console.log('build-it-visible.js is running!');

const build = {
    title: 'Visibility Toggle',
    details: 'Some Details'
};

let visibility = false;

const appRoot = document.getElementById('app');
const changeVisibility = () => {
    if (visibility == true) {
        visibility = false;
    }
    else{
        visibility = true;
    }
    render();
}

const render = () => {
    const templateOne = (
      <div>
        <h1>{build.title}</h1>
        <button onClick={changeVisibility}>
        {visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {visibility && (
            <div>
            <p> Some Details </p>
            </div>
        )}
        
      </div>
    );
    const templateTwo = (
        <div>
          <h1>{build.title}</h1>
          <p><button onClick={ReactDOM.render(templateOne, appRoot)}>Hide Details</button></p>
          <p> {build.details} </p>
          
        </div>
    );
    ReactDOM.render(templateOne, appRoot);
    console.log('rendering');
}; 

render();