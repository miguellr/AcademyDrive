import React from 'react';
import { IonList, IonItem, IonLabel } from '@ionic/react';

interface MenuProps {
    onSectionSelect: (section: Sections) => void;
    menuData: Sections[];
}

const Menu: React.FC<MenuProps> = ({ onSectionSelect, menuData }) => {
    return (
        <IonList>
            {menuData.map((section, index) => (
                <IonItem key={index} button onClick={() => onSectionSelect(section)}>
                    <IonLabel>{section.name}</IonLabel>
                </IonItem>
            ))}
        </IonList>
    );
};

export default Menu;
