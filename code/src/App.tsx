import React, { useEffect, useState } from 'react';
import menuData from './menu.json';
import { IonApp, IonContent, IonMenu, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Menu from './components/menu/Menu';
import MainContent from './MainContent';
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
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

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
