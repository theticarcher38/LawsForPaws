import React from 'react';
import axios from 'axios';
import { error } from 'console';

interface ContainerProps {
    id: number;
    title: string;
    content: string;
}

const defaultProps:ContainerProps[] = [];

const UpdatePageContent: React.FC<ContainerProps> = ({id, title, content}) => {

    const [posts, setPosts]: [ContainerProps[], (posts: ContainerProps[]) => void] = React.useState(defaultProps);

    const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);

    const [error, setError]: [string, (error: string) => void] = React.useState("");

    React.useEffect(() => {
        axios.get<ContainerProps[]>("http://192.168.1.193:8000/pages/api/updatePosts/updatePosts.json");
        .then(response => {
            setPosts(response.json());
            setLoading(false);
    }, []);


    return (
        <div>
            {posts.map((post) => {
                return (
                    <h1>{post.title}</h1>
                )
            })}
        </div>
    )

}

export default UpdatePageContent;