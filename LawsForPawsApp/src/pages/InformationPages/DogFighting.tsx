import React from 'react'
import { 
    IonPage, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent
} from '@ionic/react'
import SettingBtn from '../../components/variables/SettingBtn'
import PageContent from '../../components/PageContent'

const DogFighting: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>DogFighting</IonTitle>
                    <SettingBtn />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Dog Fighting</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <PageContent
                name="Dog Fighting"
                subheading="Information about Dog Fighting"
                content="Place holder"
                 />
            </IonContent>
        </IonPage>
    )
}

export default DogFighting;