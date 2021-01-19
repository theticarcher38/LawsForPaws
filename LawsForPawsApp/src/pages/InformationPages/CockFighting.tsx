import React from 'react'
import { 
    IonContent,
    IonHeader,
    IonPage, 
    IonTitle, 
    IonToolbar
} from '@ionic/react'
import SettingBtn from '../../components/variables/SettingBtn'
import InformationPageContent from '../../components/PageContent/InformationPageContent/InformationPageContent'

const CockFighting: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Cock Fighting</IonTitle>
                    <SettingBtn />
                </IonToolbar>
                <IonContent fullscreen>
                    <IonHeader collapse="condense">
                        <IonToolbar>
                            <IonTitle>Cock Fighting</IonTitle>
                        </IonToolbar>
                    </IonHeader>

                    <InformationPageContent
                    name="Cock Fighting"
                    subheading="Information about cock fights"
                    content="placeholder"
                    tip1=""
                    tip2=""
                    />
                </IonContent>
            </IonHeader>
        </IonPage>
    )
}

export default CockFighting