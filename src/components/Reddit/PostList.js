import React, { Component } from 'react';
import PostListItem from './PostListItem';


class PostList extends Component {

  render() {
    const { posts } = this.props;
    const listMap = posts.map(post => (
      <PostListItem key={post.data.name} post={post.data}/>
    ));

    return (
      <div>
        {listMap}
      </div>
    )
  }
}

export default PostList;
