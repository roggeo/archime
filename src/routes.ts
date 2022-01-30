import HomeScreen from "./screens/Home";
import HowToLearnScreen from "./screens/HowToLearn";
import LabScreen from "./screens/Lab";


export default function mainRoutes() {
    return [
        {
            Title: 'Archime',
            ScreenName: 'HomeScreen',
            ComponentFunc: HomeScreen
        },
        {
            Title: 'To Learn',
            ScreenName: 'HowToLearn',
            ComponentFunc: HowToLearnScreen
        },
        {
            Title: 'My Lab',
            ScreenName: 'LabScreen',
            ComponentFunc: LabScreen
        }
    ]
}