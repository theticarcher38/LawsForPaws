import React from 'react';
import { IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import './Tab2.css';
import SettingBtn from '../components/variables/SettingBtn';
import PageContent from '../components/PageContent';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>About</IonTitle>
          <SettingBtn />
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">About</IonTitle>
          </IonToolbar>
        </IonHeader>
        <PageContent
        name="About Page"
        subheading="Welcome to the about page"
        content="Placeholder"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
