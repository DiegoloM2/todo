import React from 'react';
import ConnectedTodoList from "./todos/todoListContainer.jsx";

class App extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div>
                <ConnectedTodoList />
            </div>
        )
    }
} 
export default App;