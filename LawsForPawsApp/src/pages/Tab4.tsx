import React from 'react';
import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab4.css';
import BackBtn from '../components/variables/BackBtn';
import DarkModeToggle from '../components/variables/DarkModeToggle';

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
        <ExploreContainer name="Settings Page" />
        <DarkModeToggle />
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
