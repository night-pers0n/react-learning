class TodoStore extends EventEmitter {
  
  constructor() {
    super();
    this.todos = [];
  }
  
  handleActions(action) {
    switch (action.type) {
      case 'ADD_TODO':
        this.todos.push(action.text);
        this.emit('change');
        
        break;
      
      default: 
      
    }
  }
  
}