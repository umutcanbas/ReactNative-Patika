import React from 'react';
import 'react-native-gesture-handler';

import DrawerNavigation from './Navigation/DrawerNavigation';
import FavoriteProvider from './Context/FavoriteProvider/FavoriteProvider';

const App = () => {
  return (
    <FavoriteProvider>
      <DrawerNavigation />
    </FavoriteProvider>
  );
};

export default App;
