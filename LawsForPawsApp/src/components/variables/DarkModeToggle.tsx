import React from 'react';
import { IonList, IonItem, IonIcon, IonLabel, IonToggle } from '@ionic/react';
import { moon } from 'ionicons/icons';

const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
}

const DarkModeToggle: React.FC = () => {
    return (
        <IonList className="ion-margin-top">
            <IonItem>
                <IonIcon slot="start" icon={moon}></IonIcon>
                <IonLabel>Dark Mode</IonLabel>
                <IonToggle
                    slot="end"
                    name="darkMode"
                    onIonChange={toggleDarkModeHandler}
                />
            </IonItem>
        </IonList>
    )
}

export default DarkModeToggle;
