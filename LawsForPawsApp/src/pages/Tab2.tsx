import React from 'react';
import { IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react';
import './Tab2.css';
import SettingBtn from '../components/variables/SettingBtn';
import AboutPageContent from '../components/PageContent/AboutPageContent/AboutPageContent';

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

        <AboutPageContent
        name="About Page"
        subheading="Welcome to the about page"
        content="Laws for Paws is a program that was started as part of
        my Leadership 401 capstone project. The main reason behind Laws For Paws
        was that I wanted something that would display who I am as a person while
        aiding to a cause. I like coding so I decided I would make an application
        The cause I hope to aid against is animal abuse/cruelty."
        aboutHeading="About Me"
        aboutContent="I think that it is only fair that you know the face behind
        the organization you may or may not be supporting"
        />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
