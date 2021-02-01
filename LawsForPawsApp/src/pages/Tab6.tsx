import React from 'react';
import './Tab6.css';
import { 
    IonContent,
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar
} from '@ionic/react';
import SettingBtn from '../components/variables/SettingBtn';
import UpdatePageContent from '../components/PageContent/UpdatePageContent/UpdatePageContent';

const Tab6: React.FC = () => {



    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Updates</IonTitle>
                    <SettingBtn />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Updates</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <UpdatePageContent/>
            </IonContent>
        </IonPage>
    )
}

export default Tab6;