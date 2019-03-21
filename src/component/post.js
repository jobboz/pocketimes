import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'


class post extends Component {
    handleClick = (id) => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/') //how we redirect 

    }
    render() { 
        console.log(this.props)
        const post = this.props.post ? (
            <div className="post">
            <h4 className="center">{this.props.post.title}</h4>
            <p>{this.props.post.body}</p>
            <div className="center">
            <button className="btn grey"onClick={this.handleClick}>Delete post</button>
            </div>
            </div>
        ) : (
           <div className="center">Loading post...</div>

        )
        return ( 
            <div className="container">
            <h4>
                { post }
            </h4>
            </div> 
        
         )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.Home_id;
    return {
        post: state.posts.find ( post => post.id  == id )
        //basically this is d kind of property or object we are mapping to the props of the component
    }
}
 
const mapDispatchToProps = (disptach) => {
    return {
deletePost: (id) => { disptach (deletePost(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(post);