import React from 'react';
import { IonButtons, IonButton, IonIcon } from '@ionic/react';
import { cogOutline } from 'ionicons/icons';

interface ContainerProps {
  name: string;
}

const SettingBtn: React.FC<ContainerProps> = ({ name }) => {
  return (
      <IonButtons slot="end">
          <IonButton href="/settings">
              <IonIcon slot="icon-only" icon={cogOutline}></IonIcon>
          </IonButton>
      </IonButtons>
  );
};

export default SettingBtn;