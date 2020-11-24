import React from 'react';
import { 
    IonButtons,
    IonIcon,
    IonBackButton
} from '@ionic/react';
import { 
    returnUpBack 
} from 'ionicons/icons';

const BackBtn: React.FC = () => {
    return (
        <IonButtons slot="end">
            <IonBackButton defaultHref="/">
                <IonIcon slot="icon-only" icon={returnUpBack}></IonIcon>
            </IonBackButton> 
        </IonButtons>
    )
}

export default BackBtn;