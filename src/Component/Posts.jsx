import React from "react";


const Posts=({posts,loading})=>{
  if(loading){
    return <h2>Loading...</h2>
  }

    return (
        <table className="table table-bordered">
        <thead>
          <tr>
            <th>SR.No.</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
        {posts.map((post, i) => {
              debugger;
              return (
                <>
                  <tr key={i}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </table>
    );
};

export default Posts;

