import { 
    IonButton,
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardSubtitle
} from '@ionic/react';
import axios from 'axios';
import React from 'react'

const API_URL = 'http://127.0.0.1:8000/pages/api/petitionPosts/petitionPosts.json';

const SendGetRequest = async () => {

    const response = await axios({
        url: API_URL,
        method: 'get'
    });
    console.log(response);
    return response.data;

}


const PetitionPageContent: React.FC = () => {

    const [petition_posts, setPetitionPosts] = React.useState([]);

    React.useEffect(() => {
        SendGetRequest().then(data => setPetitionPosts(data.petition_posts));
    }, []);
    return (
        <div>
            {
                petition_posts.map(post => {

                    return (
                        <IonCard key={post['id']}>

                            <IonCardHeader>
                            <IonCardSubtitle><strong>{post['petition_title']}</strong></IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent><p>{post['petition_description']}</p></IonCardContent>
                            <IonButton href={post['petition_link']}></IonButton>

                        </IonCard>
                    )
                })
            }
        </div>
    )

}

export default PetitionPageContent;