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
import { menuOutline, informationCircleOutline, callOutline, informationCircleSharp, createSharp, createOutline, homeOutline, videocamOffOutline, image } from 'ionicons/icons';
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
import GalleryComponent from './pages/Gallerycomponent';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
setupIonicReact();


const INDEX_CAMPUS = 0;
const INDEX_GALLERY = 6;

const MainContent: React.FC<{ selectedSection: Sections; handleSectionSelect: (section: Sections) => void }> = ({ selectedSection, handleSectionSelect }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const history = useHistory();

  const images = [
    { src: "https://mediaplus.quincemil.com/imagen4_3/78/780465.jpg", width: 1920, height: 1080 },
    { src: "https://huelvabuenasnoticias.com/wp-content/uploads/2013/07/DEPORTES-CAMPUS-RAMIRO-AMARELLE-FOTO-FAMLIA.jpg", width: 1920, height: 1080 },
    { src: "https://pbs.twimg.com/media/GIzIdQLWIAA1Ex6?format=jpg&name=large", width: 1920, height: 1080 },
  ];

  // con esto se intenta mostrar la galería con el botón del menú de la izq, pero no hace caso...
  useEffect(() => {
    if (selectedSection.index === INDEX_GALLERY) {
      setOpen(true);
    }
  }, []);

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
            <Route path="/AcademyDrive/" render={() => <DriveComponent url={selectedSection?.indexUrl} />} exact />
            <Route path="/AcademyDrive/cartel" render={() => <DriveComponent url={selectedSection?.indexUrl} />} exact />
            <Route path="/AcademyDrive/dossier" render={() => <DriveComponent url={selectedSection?.pdfUrl} />} exact />
            <Route path="/AcademyDrive/contact" render={() => <DriveComponent url={selectedSection?.formUrl} />} exact />
            <Route path="/AcademyDrive/video" render={() => <DriveComponent url={selectedSection?.videoUrl} />} exact />
            <Route path="/AcademyDrive/prueba" render={() => <DriveComponent url={selectedSection?.videoUrl} />} exact />
            <Redirect from="/" to="/AcademyDrive/" exact />
            <Redirect from="" to="/AcademyDrive/" exact />
          </IonRouterOutlet>
          {
            // por si lees esto 
            // si a slot no se le pasa nada, no muestra el IonTabBar. Ejemplo:
            // slot={location.pathname === "/AcademyDrive/gallery" ? undefined : 'bottom'}
            // si la ruta es /AcademyDrive/gallery no se muestra la barra de abajo
          }
          <IonTabBar slot={location.pathname === "/AcademyDrive/prueba" ? undefined : 'bottom'} className='footer-container'>+
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
            <IonTabButton tab="contact" onClick={() => setOpen(true)}>
              <IonIcon icon={image} />
              <IonLabel>Galería</IonLabel>
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

      <Lightbox
        open={open}
        slides={images}
      />
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
