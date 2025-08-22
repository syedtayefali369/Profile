import React from 'react';
import Card from './components/Card';
import './styles/glow.css';
import './styles/card.css';

function App() {
    return (
        <div className="App">
            <h1>My Portfolio</h1>
            <div className="card-container">
                <Card 
                    title="Project 1" 
                    description="Description of project 1." 
                    imageUrl="https://via.placeholder.com/150" 
                />
                <Card 
                    title="Project 2" 
                    description="Description of project 2." 
                    imageUrl="https://via.placeholder.com/150" 
                />
                <Card 
                    title="Project 3" 
                    description="Description of project 3." 
                    imageUrl="https://via.placeholder.com/150" 
                />
            </div>
        </div>
    );
}

export default App;