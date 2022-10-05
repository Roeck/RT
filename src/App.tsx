import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className='container mt-3'>
        <div className='grid'>
          <div className='row'>
            <div className='col'></div>
            <p className='h3 fw-bold text-primary'>App component</p>
            <p className='fst-italic'>Lorem ipsum</p>
            <button className='btn btn-primary btn-sm'>
              <i className='fa fa-book' />Read more
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;
