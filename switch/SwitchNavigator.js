import { createSwitchNavigator,createAppContainer,reateStackNavigator } from 'react-navigation';
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'


const stack = createSwitchNavigator({
    Page1Screen:{screen:Page1,navigationOptions:{title:'Page1'}},
    Page2Screen:{screen:Page2,navigationOptions:{title:'Page2'}},
    Page3Screen:{screen:Page3,navigationOptions:{title:'Page3'}}

});

export default createAppContainer(stack)