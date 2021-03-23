import { 
    IonContent, 
    IonHeader, 
    IonPage, 
    IonTitle, 
    IonToolbar 
} from '@ionic/react'
import React from 'react'
import PetitionPageContent from '../components/PageContent/PetitionPageContent/PetitionPageContent'
import SettingBtn from '../components/variables/SettingBtn'

const Tab7: React.FC = () => {

    return (
        <IonPage>
            <IonToolbar>
                <IonTitle>Petitions</IonTitle>
                <SettingBtn />
            </IonToolbar>
            <IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Petitions</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <PetitionPageContent/>
                </IonContent>
            </IonHeader>
        </IonPage>
    )

}

export default Tab7;