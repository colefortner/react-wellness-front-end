import axios from 'axios';
import React, { useState, useEffect }from 'react';
import Plot from 'react-plotly.js';

const TestDisplay = () => {
  const [post, setPost] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/daily_data')
    .then((response) => {
      console.log(response)
      setPost(response.data);
      console.log(post)
    });
  }, []);

  if(!post) return null;

  let arr = post.daily_datum.sort((a, b) => new Date(a.date) - new Date(b.date));
  console.log(arr)
  let xaxis = post.daily_datum.map(x => x.date)
  let yaxis = post.daily_datum.map(x => x.weight)



  return (
    <div style={{marginTop: '100px', fontSize: '20px'}}>
      <h1>{post.daily_datum[0].date}</h1>
      <p>{post.daily_datum[0].weight} Lbs</p>
      {/* <h2>HELLLLLL</h2> */}
      <Plot
        data={[
          {
            x: xaxis,
            y: yaxis,
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          }
          // ,
          // {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 800, height: 400, title: 'Weight'} }
      />
    </div>
  )

}
export default TestDisplay;