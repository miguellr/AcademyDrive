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
import { ellipse, menuOutline, square, triangle } from 'ionicons/icons';
import GoogleForm from './pages/GoogleForm';
import DrivePDF from './pages/DrivePDF';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';
import Menu from './Menu';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonMenu side="start" contentId="main-content">
        <IonContent className="ion-padding">
          <Menu />
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
              <Route path="/contact" component={GoogleForm} exact />
              <Route path="/static-content" component={DrivePDF} exact />
              <Redirect from="/" to="/contact" exact />
            </IonRouterOutlet>
            <IonTabBar slot="bottom" className='footer-container'>
              <IonTabButton tab="contact" href="/contact">
                <IonIcon aria-hidden="true" />
                <IonLabel>Contact</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/static-content">
                <IonIcon aria-hidden="true" />
                <IonLabel>Info</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonContent>
      </IonPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
