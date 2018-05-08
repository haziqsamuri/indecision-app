const obj = {
  name: 'Todd',
  getName(){
    return this.name;
  }
};

const getName = obj.getName.bind({name: 'Jeff'});

console.log(getName());
