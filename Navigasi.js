import LoginScreen from './Login';
import HomeScreen from './Home'; 
import AboutScreen from './About';
import DaftarScreen from './DaftarMhs';
import ScannerScreen from './Scanner';
import { createStackNavigator, createAppContainer} from "react-navigation";

const Navigation = createStackNavigator({
    Login: LoginScreen,
    Home: HomeScreen,
    About: AboutScreen,
    DaftarMhs: DaftarScreen,
    Scanner: ScannerScreen,
},{
    initialRouteName: 'Login'
});
  
const AppContainer = createAppContainer(Navigation)
export default AppContainer;