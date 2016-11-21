import React, { Component } from 'react';

class Post extends Component {

  constructor(props) {
   super(props);
   this.state = {value: props.value};
  }

 render() {
   return(
     <li>{this.state.value}</li>
   );
 }
}

export default Post;
