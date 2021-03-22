import React from 'react';
import { 
    IonContent,
    IonHeader, 
    IonItem, 
    IonList, 
    IonMenu, 
    IonTitle, 
    IonToolbar
} from '@ionic/react';

export const Menu: React.FC = () => {

    return(
        <>
            <IonMenu side="start" menuId="first">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <IonList>
                        <IonItem>Item One</IonItem>
                    </IonList>
                </IonContent>
            </IonMenu>
        </>
    )

}

export default Menu