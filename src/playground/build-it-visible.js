console.log('build-it-visible.js is running!');

class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        }) ;         
    }
    
    render() {
        return(
            <div>
              <h1>Visiblity Toggle</h1>
              <button onClick={this.handleToggleVisibility}>
              {this.state.visibility ? 'Hide Details' : 'Show Details'}
              </button>
              {this.state.visibility && (
                  <div>
                  <p> Some Details </p>
                  </div>
              )}
              
            </div>
          );

    }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
/* 
const build = {
    title: 'Visibility Toggle',
    details: 'Some Details'
};

let visibility = false;
 */
/* const appRoot = document.getElementById('app');

 */

/* const render = () => {
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
};  */
