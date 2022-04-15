import React from 'react';
import ReactDOM from 'react-dom';
import WordList from './App';

const words = ['sky', 'blue', 'falcon', 'falcon', 'wood', 'cloud'];

ReactDOM.render(
    <WordList words={words} />,
    document.getElementById('root')
);