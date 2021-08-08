import axios from 'axios';
import React, { useState, useEffect }from 'react';

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

  return (
    <div style={{marginTop: '100px', fontSize: '20px'}}>
      <h1>{post.daily_datum[0].date}</h1>
      {/* <p>{post.weight}</p> */}
      {/* <h2>HELLLLLL</h2> */}
    </div>
  )

}
export default TestDisplay;