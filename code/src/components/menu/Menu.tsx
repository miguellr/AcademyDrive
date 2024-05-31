import React from 'react';
import { IonList, IonItem, IonLabel, IonIcon, IonListHeader, IonNote, IonMenuToggle } from '@ionic/react';
import './Menu.css'

interface MenuProps {
    onSectionSelect: (section: Sections) => void;
    menuData: Sections[];
}

// <IonListHeader>Amarelle Academy</IonListHeader>
// <IonNote>Choose one below to see a demo</IonNote>
const Menu: React.FC<MenuProps> = ({ onSectionSelect, menuData }) => {
    return (
        <IonList className="custom-menu">
            {menuData.map((section, index) => (
                <IonMenuToggle key={index} autoHide={false}>
                    <IonItem
                        key={index}
                        button
                        onClick={() => onSectionSelect(section)}
                        className="custom-menu-item"
                    >
                        <IonLabel>{section.name}</IonLabel>
                    </IonItem>
                </IonMenuToggle>
            ))}
        </IonList>
    );
};

export default Menu;
