import React from 'react';
import { IonList, IonItem, IonLabel, IonIcon, IonListHeader, IonNote, IonMenuToggle } from '@ionic/react';
import './Menu.css'
import { callOutline } from 'ionicons/icons';

interface MenuProps {
    onSectionSelect: (section: Sections) => void;
    menuData: Sections[];
}

// <IonListHeader>Amarelle Academy</IonListHeader>
// <IonNote>Choose one below to see a demo</IonNote>
/*

            <IonListHeader slot='bottom'>Redes Sociales
                <IonItem className="custom-menu-item" lines="none">

                    <a href={"url"} target="_blank" rel="noopener noreferrer">
                        <IonIcon icon={callOutline} />
                    </a>
                </IonItem>
            </IonListHeader> */
const Menu: React.FC<MenuProps> = ({ onSectionSelect, menuData }) => {
    return (
        <>
            <IonList className="custom-menu">
                <IonMenuToggle autoHide={false} className="test">
                    <IonListHeader className='custom-menu-header'>
                        <img src="/AcademyDrive/logo.png" alt="logo" className="custom-logo" />
                        <h4>Amarelle Academy</h4>
                    </IonListHeader>
                    {menuData.map((section, index) => (

                        <IonItem
                            key={index}
                            button
                            onClick={() => onSectionSelect(section)}
                            className="custom-menu-item"
                        >
                            <IonLabel>{section.name}</IonLabel>
                        </IonItem>

                    ))}
                </IonMenuToggle>
            </IonList>
        </>
    );
};

export default Menu;
