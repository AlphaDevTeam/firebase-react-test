import React, { Component } from 'react';
import * as firebase from 'firebase';
import * as _ from 'lodash';

class PostComponent extends Component {

  constructor(props) {

   super(props);
   this.state = {value: ''};

   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.writeNewPost = this.writeNewPost.bind(this);
 }

 handleChange(event) {
   this.setState({value: event.target.value});
 }

 handleSubmit(event) {
   console.log(this.state.value);
   this.writeNewPost(_.uniqueId('postList_'),this.state.value);
   event.preventDefault();
   this.setState({value: ''});
 }

 writeNewPost(uid,value) {
  // A post entry.
  var postData = {
    uid: uid,
    value: value
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  //updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

 render() {
   return (
     <form onSubmit={this.handleSubmit}>
       <input type="text" value={this.state.value} onChange={this.handleChange} />
       <input type="submit" value="Submit" />
     </form>
   );
 }
}

export default PostComponent;
