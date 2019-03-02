import Expo from 'expo';
import { YellowBox } from 'react-native';
import Main from './App/Main';

// hide warrning khong can thiet tren  thiet bi mobile
// muon xem thi bat debug tren tool
YellowBox.ignoreWarnings(['Warning: ...']);
// this is root page
Expo.registerRootComponent(Main);