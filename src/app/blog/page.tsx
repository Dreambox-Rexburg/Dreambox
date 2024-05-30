import React from "react"
import styled from 'styled-components';

const Blog = () => {
    return (
        <div> Blog Page </div>
    )
}


const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
`;

const PostBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #e5e5e5;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 80%;
  height: auto;
`;

const PostText = styled.div`
  padding: 10px;
  font-size: 16px;
  color: #333;
`;

interface Post {
  id: number;
  title: string;
  imageUrl: string;
  date: string;
  readTime: string;
}

const posts: Post[] = [
  { id: 1, title: 'Upgrade Your Selfie Museum Posts: 3 Tips for Crafting the Perfect Captions', imageUrl: 'https://via.placeholder.com/150', date: 'May 19, 2023', readTime: '5 min' },
  { id: 2, title: 'Upgrade Your Selfie Museum Posts: 3 Tips for Crafting the Perfect Captions', imageUrl: 'https://via.placeholder.com/150', date: 'May 19, 2023', readTime: '5 min' },
];

const PostBoxes: React.FC = () => {
  return (
    <BoxContainer>
      {posts.map((post) => (
        <PostBox key={post.id}>
          <Image src={post.imageUrl} alt="Post" />
          <PostText>{post.title}</PostText>
          <div>{post.date}</div>
          <div>{post.readTime}</div>
        </PostBox>
      ))}
    </BoxContainer>
  );
};


export default Blog