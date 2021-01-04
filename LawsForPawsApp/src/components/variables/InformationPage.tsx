import React from 'react';
import { IonList, IonItem } from '@ionic/react';
import './InformationPage.css';

const InformationPage: React.FC = () => {
    return ( 
        <IonList> 
            <a href="/DogFighting"><IonItem>Dog Fighting</IonItem></a>
        </IonList>
    )
}

export default InformationPage;