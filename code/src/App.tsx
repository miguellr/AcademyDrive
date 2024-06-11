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
  IonMenu,
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
import { IonReactRouter } from '@ionic/react-router';
import { menuOutline, informationCircleOutline, callOutline, informationCircleSharp, createSharp, createOutline, homeOutline, videocamOffOutline } from 'ionicons/icons';
import Menu from './components/menu/Menu';
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
import '@ionic/react/css/palettes/dark.system.css';
import './theme/variables.css';
import DriveComponent from './pages/DriveComponent';
import VideoCarousel from './components/video-carousel/VideoCarousel';

setupIonicReact();


const INDEX_CAMPUS = 0;
const INDEX_GALLERY = 6;


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
            <Route path="/AcademyDrive/prueba" render={() => <DriveComponent url={selectedSection?.videoUrl} />} exact />
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

const App: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<Sections>(menuData[0]);

  useEffect(() => {
    setSelectedSection(menuData[0]);
  }, []);

  const handleSectionSelect = (section: Sections) => {
    setSelectedSection(section);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonMenu side="start" contentId="main-content">
          <IonContent>
            <Menu menuData={menuData} onSectionSelect={handleSectionSelect} />
          </IonContent>
        </IonMenu>
        <MainContent selectedSection={selectedSection} handleSectionSelect={handleSectionSelect} />
      </IonReactRouter>
    </IonApp>
  );
};

export default App;