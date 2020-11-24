import React from 'react';
import { 
    IonButton,
    IonButtons,
    IonIcon
} from '@ionic/react';
import { returnUpBack } from 'ionicons/icons';

const BackBtn: React.FC = () => {
    return (
        <IonButtons slot="end">
            <IonButton>
                <IonIcon slot="icon-only" icon={returnUpBack}></IonIcon>
            </IonButton>
        </IonButtons>
    )
}

export default BackBtn;