
export type PropsNavMenu = {
    navigation: {
        goBack: ()=>{}
        navigate: (screen: string)=>{}
    };
    route: {
        name: string;
    };
    options: {
        headerStyle: any
    };
    back: any;
}