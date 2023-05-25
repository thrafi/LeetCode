// Context Provider Sample 

import React, { createContext, useState } from 'react';

// Create the context
const CounterContext = createContext({});

// Create the context provider component
const CounterProvider = ({ children }) => {
  // Define the state variable for the counter
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  // Function to decrement the counter
  const decrementCounter = () => {
    setCount(count - 1);
  };

  // Define the context value object with the state variable and functions
  const contextValue = {
    count,
    incrementCounter,
    decrementCounter,
  };

  // Return the provider component with the context value
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };


// Fetch data
const [data, setData] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://api.example.com/data');
      if (!response.ok) {
        throw new Error('Request failed');
      }
      const jsonData = await response.json();
      setData(jsonData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  fetchData();
}, []);

// Post Data
const [postData, setPostData] = useState('');
const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    const response = await fetch('https://api.example.com/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    // Handle the response as needed
    console.log('Data successfully posted');
    setLoading(false);
  } catch (error) {
    setError(error.message);
    setLoading(false);
  }
};


// Map objects
import React from 'react';

const ObjectList = ({ objects }) => {
  return (
    <div>
      <h2>List of Objects</h2>
      {objects.map((object) => (
        <div key={object.id}>
          <h3>{object.name}</h3>
          <p>{object.description}</p>
        </div>
      ))}
    </div>
  );
};

//Map every key and value to a table in React
function ObjectTable({ data }) {
  return (
    <table>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

//Map JSON response to an object
const [data, setData] = useState(null);

  useEffect(() => {
    // Simulating a JSON API response
    const jsonResponse = '[{"id": 1, "name": "John"}, {"id": 2, "name": "Jane"}, {"id": 3, "name": "Alice"}]';

    // Parsing the JSON response
    const parsedData = JSON.parse(jsonResponse);

    // Creating an object where the id is the object key
    const dataObject = {};
    parsedData.forEach(item => {
      dataObject[item.id] = item;
    });

    // Setting the data state
    setData(dataObject);
  }, []);

  return (
    <div>
      <h1>Data Object</h1>
      {data && (
        <ul>
          {Object.entries(data).map(([id, item]) => (
            <li key={id}>
              ID: {id}, Name: {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ObjectList;

//UseReducer Example
// useReducer is very similar to useState, but it lets you move the state update logic from event handlers into a single function outside of your component. Read more about choosing between useState and useReducer.

import { useReducer } from 'react';

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1
    };
  }
  throw Error('Unknown action.');
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button onClick={() => {
        dispatch({ type: 'incremented_age' })
      }}>
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}


// React Routes
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

//UseRef Example
import React, { useRef } from 'react';

function App() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    // Access the input field using the ref and focus on it
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>Focus Example</h1>
      <input type="text" ref={inputRef} />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}


