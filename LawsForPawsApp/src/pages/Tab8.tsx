import { 
    IonPage, 
    IonToolbar, 
    IonTitle, 
    IonHeader, 
    IonContent 
} from '@ionic/react'
import React from 'react'
import PetsForAdoptionContent from '../components/PageContent/PetsForAdoptionContent/PetsForAdoptionContent'
import SettingBtn from '../components/variables/SettingBtn'

const Tab8: React.FC = () => {

    return(
        <IonPage>
            <IonToolbar>
                <IonTitle>Pets For Adoption</IonTitle>
                <SettingBtn />
            </IonToolbar>
            <IonHeader>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle size="large">Pets For Adoption</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <PetsForAdoptionContent/>
                </IonContent>
            </IonHeader>
        </IonPage>
    )

}

export default Tab8