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
                subheading="Information about dog fighting"
                content="Placeholder"
                tip1="If you witness a dog fight in progress you should call 911 immediately"
                tip2="If you suspect that there is dog fighting going on then you should
                call the HSUS tipline: 1-877-TIP-HSUS"
                />
            </IonContent>
        </IonPage>
    );
};

export default DogFighting;