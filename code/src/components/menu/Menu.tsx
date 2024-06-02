import React from 'react';
import { IonList, IonItem, IonLabel, IonIcon, IonListHeader, IonNote, IonMenuToggle } from '@ionic/react';
import './Menu.css';
import { logoFacebook, logoTwitter, logoInstagram, callOutline } from 'ionicons/icons';

interface MenuProps {
    onSectionSelect: (section: Sections) => void;
    menuData: Sections[];
}

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
            <IonList className="social-media-icons">
                <IonItem className="custom-menu-item" lines="none">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <IonIcon icon={logoFacebook} />
                    </a>
                </IonItem>
                <IonItem className="custom-menu-item" lines="none">
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <IonIcon icon={logoTwitter} />
                    </a>
                </IonItem>
                <IonItem className="custom-menu-item" lines="none">
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <IonIcon icon={logoInstagram} />
                    </a>
                </IonItem>
            </IonList>
        </>
    );
};

export default Menu;
