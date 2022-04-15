import React from 'react';
import './App.css';

const users = [
    {
        id: 1,
        name: 'Robyn Williams',
        occupation: 'teacher',
        age: 34,
        sexe: 'woman',
    },
    {
        id: 2,
        name: 'John Doe',
        occupation: 'gardener',
        age: 25,
        sexe: 'man',
    },
    {
        id: 3,
        name: 'Bob Sinclar',
        occupation: 'DJ',
        age: 40,
        sexe: 'man',
    },
    {
        id: 4,
        name: 'Jayson Stone',
        occupation: 'Developper',
        age: 26,
        sexe: 'man',
    }
];

const WordList = () => (
    <ul>
        {users.map(user => (
            <li key={user.id}>
                <div>{user.id}</div>
                <div>{user.name}</div>
                <div>{user.occupation}</div>
                <div>{user.age}</div>
                <div>{user.sexe}</div>
            </li>            
        ))}        
    </ul>    
);

export default WordList;