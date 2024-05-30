import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

const Menu: React.FC = () => {
    return (
        <IonList>
            <IonItem button>
                <IonLabel>Home</IonLabel>
            </IonItem>
            <IonItem button>
                <IonLabel>Settings</IonLabel>
            </IonItem>
            <IonItem button>
                <IonLabel>Profile</IonLabel>
            </IonItem>
        </IonList>
    );
};

export default Menu;
