import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ToEnglish from './toEnglish';
import ToZuish from './toZuish';
import Character from './character';
import Glyph from './glyph';
import { ALPHAOFFSET, GLYPHOFFSET } from '../constants/offsets';

const Tab = createBottomTabNavigator();

const alphaA = (focused) => {
  return (
    <Character
      leftOffset={ALPHAOFFSET.A.left}
      topOffset={ALPHAOFFSET.A.top}
      focused={focused} />
  );
}

const glyphA = (focused) => {
  return (
    <Glyph
      leftOffset={GLYPHOFFSET.A.left}
      topOffset={GLYPHOFFSET.A.top}
      focused={focused} />
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused }) => {
    if (route.name === 'ToEnglish') {
      return alphaA(focused);
    } else if (route.name === 'ToZuish') {
      return glyphA(focused);
    }
  },
  tabBarActiveBackgroundColor: '#c6c6c6',
  tabBarInactiveBackgroundColor: '#2d2d2d',
  tabBarShowLabel: false,
  tabBarStyle: {
    height: 60,
    backgroundColor: '#2d2d2d',
  },
  headerShown: false,
});

// DEFAULT
export default function TabsContainer() {
  return (
    <Tab.Navigator screenOptions={screenOptions} >
      <Tab.Screen name="ToEnglish" component={ToEnglish} />
      <Tab.Screen name="ToZuish" component={ToZuish} />
    </Tab.Navigator>
  );
}