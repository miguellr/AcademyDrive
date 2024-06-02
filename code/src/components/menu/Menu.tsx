import React, { useState } from 'react';
import { IonList, IonItem, IonLabel, IonIcon, IonListHeader, IonNote, IonMenuToggle } from '@ionic/react';
import './Menu.css';
import { logoFacebook, logoTwitter, logoInstagram, callOutline, logoYoutube, logoWhatsapp } from 'ionicons/icons';
import { useHistory } from 'react-router';

interface MenuProps {
    onSectionSelect: (section: Sections) => void;
    menuData: Sections[];
}


const Menu: React.FC<MenuProps> = ({ onSectionSelect, menuData }) => {
    const [selectedSection, setSelectedSection] = useState<Sections>(menuData[0]);
    const history = useHistory();

    const handleSectionSelect = (section: Sections) => {
        history.push("/AcademyDrive/");
        onSectionSelect(section)
        setSelectedSection(section);
    };

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
                            onClick={() => handleSectionSelect(section)}
                            className={"custom-menu-item " + (selectedSection.name === section.name ? 'item-selected' : '')}
                        >
                            <IonLabel>{section.name}</IonLabel>
                        </IonItem>
                    ))}
                </IonMenuToggle>
            </IonList>
            <IonList className="social-media-icons">
                <a href=" https://wa.me/692395562?text=TextodePrueba" target="_blank" rel="noopener noreferrer">
                    <IonItem className="custom-menu-item" lines="none">
                        <IonIcon icon={logoWhatsapp} />
                    </IonItem>
                </a>
                <a href="https://x.com/AmarelleAcademy" target="_blank" rel="noopener noreferrer">
                    <IonItem className="custom-menu-item" lines="none">
                        <IonIcon icon={logoTwitter} />
                    </IonItem>
                </a>
                <a href="https://www.instagram.com/amarelleacademy/" target="_blank" rel="noopener noreferrer">
                    <IonItem className="custom-menu-item" lines="none">
                        <IonIcon icon={logoInstagram} />
                    </IonItem>
                </a>
                <a href="https://www.youtube.com/@AmarelleAcademy/featured" target="_blank" rel="noopener noreferrer">
                    <IonItem className="custom-menu-item" lines="none">
                        <IonIcon icon={logoYoutube} />
                    </IonItem>
                </a>
            </IonList>
        </>
    );
};

export default Menu;
