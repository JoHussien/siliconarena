import './App.css';
import axios from 'axios'
import React, { Component } from 'react';

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/posts'
})

class App extends Component {
  state= {
    posts: []
  }
  constructor() {
    super();
    api.get('/').then( res =>{
      console.log(res.data)
      this.setState({posts: res.data})
    })
  }
  

  render() {
    return (
      <div className="App">
        
        <h1 className="App-header"> Posts' Titles </h1>
        <div className="title-style">{this.state.posts.map(post=> <h2 key={post.id}>{post.title}</h2>)}</div> 
        <h1 className="App-header"> Posts Bodies  </h1>
        <div className="body-style"> {this.state.posts.map(post=>  <h2 key={post.id}>{post.body}</h2>)}</div>
      </div>
    );
  }
};

export default App;