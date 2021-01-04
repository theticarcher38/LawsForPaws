import React from 'react';
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import './Tab3.css';
import SettingBtn from '../components/variables/SettingBtn';
import PageContent from '../components/PageContent';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
          <SettingBtn />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Contact</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PageContent
        name="Contact Page"
        subheading="Welcome to the contact page"
        content="placeholder"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
