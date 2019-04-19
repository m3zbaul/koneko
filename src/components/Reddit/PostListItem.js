import React, { Component } from 'react';


class PostListItem extends Component {
  getMediaURL = (post) => {
    switch(post.domain) {
      case 'i.imgur.com':
      return post.url;

      default:
      return post.url;
    }
  }

  handleDownload = (event, url) => {
    location.href = url;
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        { post.thumbnail_width &&
          <img src={post.thumbnail} alt="1"/>
        }
        <p>{post.title}</p>
        <p>
          <button
            onClick={(event) => this.handleDownload(event, post.url)}
          >
            Download
          </button>
        </p>
        <hr/>
      </div>
    )
  }
}

export default PostListItem;
