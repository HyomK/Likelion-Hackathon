import React from 'react'
import styled from 'styled-components';
import colors from 'styles/colors';

export const profileArray = [
  {
    postid : 1,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 2,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 3,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 4,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 5,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 6,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 7,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 8,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 9,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 10,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 11,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 12,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 13,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 14,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 15,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 16,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 17,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 18,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 19,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
  {
    postid : 20,
    image : "https://cdn.class101.net/images/7b9546d0-3294-4839-b17b-0c5c9edfc587",
  },
]

export const StyleBox = styled.div`
  width: 130px;
  height: 130px;
  background-color: ${colors.black_30};
`;

export const PostlistBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 130px);
  gap: 1px;
  justify-content: center;
  margin: 0 auto;
  padding-top: 208px;
`;

function ProfilePost() {
  return (
    <>
      <PostlistBox>
            {profileArray.map(({postid, image})=>
              <StyleBox key={postid} image={image}>
                  <img src={image} alt="photo"/>

              </StyleBox>
            )}
      </PostlistBox>
    </>
  )
}

export default ProfilePost