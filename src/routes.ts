import HomeScreen from "./screens/Home";
import LabScreen from "./screens/Lab";


export default function mainRoutes() {
    return [
        {
            Title: 'Archime',
            ScreenName: 'HomeScreen',
            ComponentFunc: HomeScreen
        },
        {
            Title: 'My Lab',
            ScreenName: 'LabScreen',
            ComponentFunc: LabScreen
        }
    ]
}