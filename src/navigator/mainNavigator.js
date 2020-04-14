import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Dashboard128901Navigator from '../features/Dashboard128901/navigator';
import Contacts28888Navigator from '../features/Contacts28888/navigator';
import Settings28879Navigator from '../features/Settings28879/navigator';
import EmailAuth28874Navigator from '../features/EmailAuth28874/navigator';
import Maps28872Navigator from '../features/Maps28872/navigator';
import Messaging28871Navigator from '../features/Messaging28871/navigator';
import UserProfile28856Navigator from '../features/UserProfile28856/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
Dashboard128901: { screen: Dashboard128901Navigator },
Contacts28888: { screen: Contacts28888Navigator },
Settings28879: { screen: Settings28879Navigator },
EmailAuth28874: { screen: EmailAuth28874Navigator },
Maps28872: { screen: Maps28872Navigator },
Messaging28871: { screen: Messaging28871Navigator },
UserProfile28856: { screen: UserProfile28856Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
