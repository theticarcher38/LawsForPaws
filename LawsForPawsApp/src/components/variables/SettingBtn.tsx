import React from 'react';
import { 
    IonButtons, 
    IonButton, 
    IonIcon 
} from '@ionic/react';
import { 
    cogOutline 
} from 'ionicons/icons';

const SettingBtn: React.FC = () => {
  return (
      <IonButtons slot="end">
          <IonButton href="/settings">
              <IonIcon slot="icon-only" icon={cogOutline}></IonIcon>
          </IonButton>
      </IonButtons>
  );
};

export default SettingBtn;