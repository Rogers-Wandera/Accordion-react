import React from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {

  return (
    <main>
      <div className='container'>
        <h3>Questions and answers about Login</h3>
        <section className='info'>
          {
            data.map((qns) => {
              return <SingleQuestion key={qns.id} {...qns} />
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App;
