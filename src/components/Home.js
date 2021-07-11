import axios from "axios";
import React, { Component } from "react";
import { Link } from "@reach/router";
import Loader from "../loader.gif";
import Navbar from "./Navbar";
import Moment from "react-moment";
import renderHTML from "react-render-html";
import clientConfig from "../client-config";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      posts: [],
      error: "",
    };
  }

  createMarkup = (data) => ({
    __html: data,
  });

  componentDidMount() {
    const wordPressSiteURL = clientConfig.siteUrl;
    this.setState({ loading: true }, () => {
      axios
        .get(`${wordPressSiteURL}/wp-json/wp/v2/posts/`)
        .then((res) => {
          if (res.data.length) {
            this.setState({ loading: false, posts: res.data });
            //console.log(res.data);
          } else {
            this.setState({ loading: false, error: "No Posts Found" });
          }
        })
        .catch((err) =>
          this.setState({ loading: false, error: err.response.data.message })
        );
    });
  }
  render() {
    console.log("state:", this.state);
    const { loading, posts, error } = this.state;
    console.log(posts);
    return (
      <div>
        <Navbar />
        {error && (
          <div
            className="alert alert-danger"
            dangerouslySetInnerHTML={this.createMarkup(error)}
          />
        )}
        {posts.length ? (
          <div className="mt-5 posts-container">
            {posts.map((post) => (
              <div
                key={post.id}
                className="card border-dark mb-3"
                style={{ maxWidth: "50rem" }}
              >
                <div className="card-header">
                  <Link
                    to={`/post/${post.id}`}
                    className="text-secondary font-weight-bold"
                    style={{ textDecoration: "none" }}
                  >
                    {renderHTML(post.title.rendered)}
                  </Link>
                </div>
                <div className="card-body">
                  <div className="card-text post-content">
                    {renderHTML(post.excerpt.rendered)}
                  </div>
                </div>
                <div className="card-footer">
                  <Moment fromNow>{post.date}</Moment>
                  <Link
                    to={`/post/${post.id}`}
                    className="btn btn-secondary float-right"
                    style={{ textDecoration: "none" }}
                  >
                    Read More...
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
        {loading && <img className="loader" src={Loader} alt="Loader" />}
      </div>
    );
  }
}
