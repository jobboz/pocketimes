import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import Image from "../andela.png";
import { connect } from 'react-redux';//hoc
// asychronously means it takes some time to get the the job done
// we can also use fetch instead of axios
// this gets a promise which means that the action we complete at some point in time


 class Home extends Component {
    
   
      //the .then method handles how callback which is
      //basically the call back to be executed when the promise is resolved
      //then  taking th responds(res) object from axios.get() as a parametet
    
    render () {
        
        const { posts } = this.props,

        postList = posts.length ? (
            posts.map(post => {
                return (
                    <div className="post card" key={post.id}>
                    <img src={Image} alt="andela"/>
                    <div className="card-content">
                    <Link to={'/' + post.id}>
                    <span className="card-title red-text">{post.title}</span>
                    </Link>
                    <p>{post.body}</p>
                    </div>
                    </div>  //object literal
                )
            })
        ) : (
            //returns false
            <div className="center">No posts yet!</div>
        ) 
  return (
      <div className="container home">
      <h4 className="center">Home</h4>
     {postList}
     </div>
 )
}

 }
 const mapStateToProps = (state) => {
     return {
         posts:state.posts
     }

 }
export default connect(mapStateToProps)(Home); //connect is a func dat returns an higher other component then d hoc is rapping the home component