import React from 'react';
import './FAQ.css';
const FAQ = () => {
    return (
        <div className='faq-container'>
            <div className="faq-card">
                <h2>How does <span style={{color:"purple"}}>React</span> work?</h2>
                <p>React is a JavaScript library for building user interface and it's free open source library. React makes it painless to create interactive UIs. Design simple views for each state in our application, and React will efficiently update and render just the right components when our data changes. Declarative views make our code more predictable, simpler to understand, and easier to debug. Build encapsulated components that manage their state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, we can easily pass rich data through our app and keep the state out of the DOM.</p>
            </div>
            <div className="faq-card">
                <h2>How does <span style={{color:"purple"}}>useState</span> work?</h2>
                <p>The <b>useState</b> hook allows us to have state variables in the JSX functional component. It takes one argument which is the initial state and returns a state value and a function to update it.  React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
            </div>
        </div>
    );
};

export default FAQ;