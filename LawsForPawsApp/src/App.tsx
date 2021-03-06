import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { 
    callOutline, 
    informationCircleOutline, 
    homeOutline,
    helpCircleOutline,
    mailOutline,
} from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';
import Tab6 from './pages/Tab6';
import Tab7 from './pages/Tab7';
import Tab8 from './pages/Tab8';
import DogFighting from './pages/InformationPages/DogFighting';
import CockFighting from './pages/InformationPages/CockFighting';

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

/* Theme variables */
import './theme/variables.css';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

toggleDarkTheme(prefersDark.matches);

prefersDark.addListener((mediaQuery) => toggleDarkTheme(mediaQuery.matches));

function toggleDarkTheme(shouldAdd: any) {
  document.body.classList.toggle('dark', shouldAdd);
}

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" component={Tab1} exact={true} />
          <Route path="/about" component={Tab2} exact={true} />
          <Route path="/contact" component={Tab3} exact={true} />
          <Route path="/settings" component={Tab4} exact={true} />
          <Route path="/information" component={Tab5} exact={true} />
          <Route path="/updates" component={Tab6} exact={true} />
          <Route path="/petitions" component={Tab7} exact={true} />
          <Route path="/adoptions" component={Tab8} exact={true} />
          <Route path="/DogFighting" component={DogFighting} exact={true} />
          <Route path="/CockFighting" component={CockFighting} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={homeOutline} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="About" href="/about">
            <IonIcon icon={informationCircleOutline} />
            <IonLabel>About</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Contact" href="/contact">
            <IonIcon icon={callOutline} />
            <IonLabel>Contact</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Information" href="/information">
            <IonIcon icon={helpCircleOutline} />
            <IonLabel>Information</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Posts" href="/updates">
            <IonIcon icon={mailOutline} />
            <IonLabel>Posts</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
