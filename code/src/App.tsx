import React, { useEffect, useState } from 'react';
import menuData from './menu.json';
import { Redirect, Route } from 'react-router-dom';
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
import { menuOutline } from 'ionicons/icons';
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

setupIonicReact();

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
          <IonContent className="ion-padding">
            <Menu menuData={menuData} onSectionSelect={handleSectionSelect} />
          </IonContent>
        </IonMenu>
        <IonPage id="main-content">
          <IonHeader collapse="fade">
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton autoHide={false}>
                  <IonIcon icon={menuOutline} />
                </IonMenuButton>
              </IonButtons>
              <IonTitle slot="start" className="ion-text-center">Academy Drive</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonTabs>
              <IonRouterOutlet>
                <Route path="/AcademyDrive/" render={() => <DriveComponent url={selectedSection?.pdfUrl} />} exact />
                <Route path="/AcademyDrive/contact" render={() => <DriveComponent url={selectedSection?.formUrl} />} exact />

                <Redirect from="/" to="/AcademyDrive/" exact />
                <Redirect from="" to="/AcademyDrive/" exact />
              </IonRouterOutlet>
              <IonTabBar slot="bottom" className='footer-container'>
                <IonTabButton tab="info" href="/AcademyDrive/">
                  <IonIcon aria-hidden="true" />
                  <IonLabel>Info</IonLabel>
                </IonTabButton>
                <IonTabButton tab="contact" href="/AcademyDrive/contact">
                  <IonIcon aria-hidden="true" />
                  <IonLabel>Contact</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonContent>
        </IonPage>
      </IonReactRouter>
    </IonApp>
  );
};
export default App;
