import React from 'react'
import axios from 'axios'
import { 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle 
} from '@ionic/react';

const API_URL = 'http://127.0.0.1:8000/pages/api/petsForAdoption/petsForAdoption.json';

const SendGetRequest = async () => {

    const response = await axios({
        url: API_URL,
        method: 'get'
    });
    console.log(response);
    return response.data;

}

const PetsForAdoptionContent: React.FC = () => {
    const [adoption_posts, setAdoptionPosts] = React.useState([]);

    React.useEffect(() => {
        SendGetRequest().then(data => setAdoptionPosts(data.adoption_posts));
    }, []);
    return (
        <div>
            {
                adoption_posts.map(post => {

                    return (
                        <IonCard key={post['id']}>

                            <IonCardHeader>
                                <IonCardSubtitle><strong>{post['title']}</strong></IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent><p>{post['body']}</p></IonCardContent>

                        </IonCard>
                    )

                })
            }
        </div>
    )

}

export default PetsForAdoptionContent