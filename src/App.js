import React from 'react';
import UserForm from './components/form.jsx'; // Assuming the path
import ItemList from './components/list.jsx';

function App() {

    return (
        <>
            <div>
                <UserForm />
            </div>
            <div className="container">
                <ItemList />

            </div>
        </>

    );
}

export default App;
