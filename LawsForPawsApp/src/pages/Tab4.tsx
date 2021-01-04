import React from 'react';
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import './Tab4.css';
import BackBtn from '../components/variables/BackBtn';
import DarkModeToggle from '../components/variables/DarkModeToggle';
import PageContent from '../components/PageContent';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Settings</IonTitle> 
          <BackBtn />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <DarkModeToggle />
        <PageContent
        name="Settings Page"
        subheading="Welcome to the settings page"
        content="Placeholder"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
