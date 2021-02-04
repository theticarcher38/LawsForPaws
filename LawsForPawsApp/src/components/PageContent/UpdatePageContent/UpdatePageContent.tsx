import React from 'react';
import axios from 'axios';

// For testing purposes
// const API_KEY = 'f21b679d38e741059d7f80dde84fc864';
// const URL = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`;

// Local Machine URL
 const API_URL = 'http://127.0.0.1:8000/pages/api/updatePosts/updatePosts.json';

// Network URL
// const API_URL = 'http://192.168.1.193/pages/api/updatePosts/updatePosts.json';

const SendGetRequest = async () => {

    const response = await axios({
        url: API_URL,
        method: 'get'
    });
    console.log(response);
    return response.data;
}


const UpdatePageContent: React.FC = () => {

    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        SendGetRequest().then(data => setPosts(data.posts));
    }, []); 

    return (
        <>
          {
            posts.map(post => {

              return (
                <div key={post['id']}>
                   <strong> {post['title']}</strong>
                    <br/><br/>
                    {post['post_content']}
                    <hr/>
                </div>
              );
            })
          }
    </>
    )

}

export default UpdatePageContent;