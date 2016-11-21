import React, { Component } from 'react';
import * as firebase from 'firebase';
import Post from './Post';

var listItems = null;
var starCountRef = null;
class ViewPosts extends Component {

  constructor(props) {
   super(props);
   this.state = {renderedList: []};
   this.getDatafromDB = this.getDatafromDB.bind(this);
   starCountRef = firebase.database().ref('posts');
  }

  getDatafromDB() {
    listItems = [];
    starCountRef.once('value', snapshot => {
      var results = snapshot.val();
      var resultsKeys = Object.keys(results);
      listItems = resultsKeys.map((key,i) => <Post key={results[key].uid.toString()} value={results[key].value + i } />);

      this.setState({
        renderedList : listItems
      });
    });
  }
  componentDidMount(){

    // Get the data on a post that has been removed
    starCountRef.on("child_removed", snapshot =>  {
      var deletedPost = snapshot.val();
      console.log("The post valued '" + deletedPost.value + "' has been deleted");
      this.getDatafromDB();
    });

    // Get the data on a post that has been removed
    starCountRef.on("child_added", snapshot =>  {
      var addedPost = snapshot.val();
      console.log("The post value '" + addedPost.value + "' has been added");
      this.getDatafromDB();
    });

    starCountRef.on("child_changed", snapshot =>  {
      var changedPost = snapshot.val();
      console.log("The updated post value is " + changedPost.value);
      this.getDatafromDB();
      console.log("this.state.listItems " + this.state.renderedList);
    });

  }
   render() {
   return(
     <div>
      <ul>
        {this.state.renderedList}
      </ul>
      </div>
   );
 }
}

export default ViewPosts;
