import React from 'react'
import { 
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar
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
                subheading="Placeholder"
                content="Placeholder"
                />
            </IonContent>
        </IonPage>
    );
};

export default DogFighting;