import React, { useState } from 'react';
import data from './data';
function App() {
  //count - number of paragraphs to display
  //text - array with data
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(typeof count); string
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > 8) {
      amount = 8;
    }
    //new array with amount of paragraphs that user choose to display
    setText(data.slice(0, amount));
    setCount('');
  };
  return (
    <section className="section-center">
      <h3>Tired of boring ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="text"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
