import React from 'react';
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import './Tab1.css';
import SettingBtn from '../components/variables/SettingBtn';
import PageContent from '../components/PageContent/RegularPageContent/PageContent';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
           <SettingBtn />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PageContent
        name="Home Page"
        subheading="Welcome to the Laws for Paws app"
        content="This application is designed to inform
        the masses on animal abuse. This is in a effort
        to educate people on what is and what isn't animal
        abuse and what to do if you witness animal abuse."
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
