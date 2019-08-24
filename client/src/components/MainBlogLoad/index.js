import React, { Component } from "react";
import axios from "axios";


class MainBlog extends Component {
    state = {
        blogs: []
    }


    componentDidMount() {
        axios.get("api/blog").then(
            blogs => {this.setState({blogs:
            blogs.data})
            console.log(this.state.blogs)}
        )
    }

    render() {
        let blogLimiter = 4;
        console.log(this.state);
        return (
                <div className="row little-breathing-room">
                    {this.state.blogs.slice(1).slice(-4).map(blog => (
                        //  <div className="col-md-3">
                         <div className="card bg-dark">
                             <img className="card-img-top main-card-img" src={blog.blogImageURL} alt="Card image cap" />
                             <div className="card-body">
                                 <h5 className="card-title main-card-title">{blog.blogTitle}</h5>
                                 <p className="card-text main-card-runningCopy">{blog.blogBody.substring(0, 125)} -<small>(read more)</small></p>
                                 <div className="text-center">
                                     <a href={"/FullBlogPost/" + blog._id} class="btn btn-danger">Visit this article</a>
                                 </div>
                             </div>
                         {/* </div> */}
                     </div>
                ))} 
            </div>
        )
    }
}

export default MainBlog;