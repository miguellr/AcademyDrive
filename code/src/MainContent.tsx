import React, { useEffect, useState } from 'react';
import menuData from './menu.json';
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom';
import {
    IonApp,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonLabel,
    IonMenuButton,
    IonPage,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonTitle,
    IonToolbar,
    setupIonicReact
} from '@ionic/react';
import { menuOutline, informationCircleOutline, callOutline, informationCircleSharp, createSharp, createOutline, homeOutline, videocamOffOutline } from 'ionicons/icons';
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.css';
import './theme/variables.css';
import DriveComponent from './pages/DriveComponent';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

setupIonicReact();

const INDEX_CAMPUS = 0;
const INDEX_GALLERY = 6;

import VideoCarousel from './components/video-carousel/VideoCarousel'; // Import the new component

const MainContent: React.FC<{ selectedSection: Sections; handleSectionSelect: (section: Sections) => void }> = ({ selectedSection, handleSectionSelect }) => {
    const location = useLocation();

    return (
        <IonPage id="main-content">
            <IonHeader collapse="fade">
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton autoHide={false}>
                            <IonIcon icon={menuOutline} />
                        </IonMenuButton>
                    </IonButtons>
                    <IonTitle>{selectedSection?.name}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonTabs>
                    <IonRouterOutlet>
                        {selectedSection.index !== INDEX_GALLERY ? (
                            <Route path="/AcademyDrive/" render={() => <DriveComponent url={selectedSection?.indexUrl} />} exact />
                        ) : (
                            <Route path="/AcademyDrive/" render={() => <VideoCarousel />} exact />
                        )}
                        <Route path="/AcademyDrive/cartel" render={() => <DriveComponent url={selectedSection?.indexUrl} />} exact />
                        <Route path="/AcademyDrive/dossier" render={() => <DriveComponent url={selectedSection?.pdfUrl} />} exact />
                        <Route path="/AcademyDrive/contact" render={() => <DriveComponent url={selectedSection?.formUrl} />} exact />
                        <Route path="/AcademyDrive/video" render={() => <DriveComponent url={selectedSection?.videoUrl} />} exact />
                        <Redirect from="/" to="/AcademyDrive/" exact />
                        <Redirect from="" to="/AcademyDrive/" exact />
                    </IonRouterOutlet>
                    <IonTabBar slot={selectedSection.index === INDEX_GALLERY ? undefined : 'bottom'} className='footer-container'>
                        <IonTabButton tab="cartel" href="/AcademyDrive/" selected={location.pathname === "/AcademyDrive/"}>
                            <IonIcon icon={homeOutline} />
                            <IonLabel>Cartel</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="info" href="/AcademyDrive/dossier" selected={location.pathname === "/AcademyDrive/dossier"}>
                            <IonIcon icon={informationCircleOutline} />
                            <IonLabel>Información</IonLabel>
                        </IonTabButton>
                        <IonTabButton tab="contact" href="/AcademyDrive/contact" selected={location.pathname === "/AcademyDrive/contact"}>
                            <IonIcon icon={createOutline} />
                            <IonLabel>Inscripción</IonLabel>
                        </IonTabButton>
                        {selectedSection.index === INDEX_CAMPUS && (
                            <IonTabButton tab="video" href="/AcademyDrive/video" selected={location.pathname === "/AcademyDrive/video"}>
                                <IonIcon icon={videocamOffOutline} />
                                <IonLabel>Video</IonLabel>
                            </IonTabButton>
                        )}
                    </IonTabBar>
                </IonTabs>
            </IonContent>
        </IonPage>
    );
};

export default MainContent;
