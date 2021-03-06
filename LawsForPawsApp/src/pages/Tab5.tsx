import React from 'react'
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent
} from '@ionic/react'
import SettingBtn from '../components/variables/SettingBtn'
import InformationPage from '../components/variables/InformationPage'

const Tab5: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Information</IonTitle>
                    <SettingBtn/>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Information</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <InformationPage />
            </IonContent>
        </IonPage>
    )
}

export default Tab5;