// import React from 'react';
// import './styles.css';  // Import the CSS file
// import 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css';

// const Blog = ({ imageUrl, text }) => {
//     return (
//         <div className="blog-container">
//             <img className="blog-image" src={imageUrl} alt="Blog" />
//             <div className="blog-overlay">
//                 <div className="blog-icons">
//                     <i className="fas fa-heart"></i>
//                     <i className="fas fa-comment"></i>
//                     <i className="fas fa-share"></i>
//                 </div>
//                 <div className="blog-text">
//                     {text}
//                 </div>
//             </div>
//         </div>
//     );
// }

// const BlogGrid = () => {
//     const blogPosts = [
//         { imageUrl: 'https://via.placeholder.com/300', text: 'Post 1' },
//         { imageUrl: 'https://via.placeholder.com/300', text: 'Post 2' },
//         { imageUrl: 'https://via.placeholder.com/300', text: 'Post 3' },
//         { imageUrl: 'https://via.placeholder.com/300', text: 'Post 4' },
//         { imageUrl: 'https://via.placeholder.com/300', text: 'Post 5' },
//         { imageUrl: 'https://via.placeholder.com/300', text: 'Post 6' },
//     ];

//     return (
//         <div className="blog-grid">
//             {blogPosts.map((post, index) => (
//                 <Blog key={index} imageUrl={post.imageUrl} text={post.text} />
//             ))}
//         </div>
//     );
// }

// export default BlogGrid;

import React from "react";
import Cards from "./BCards"; // Adjust the path as necessary

const App = () => {
  return (
    <div>
      <Cards />
    </div>
  );
};

export default App;
