import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Index';
import Dashboard from './components/Dashboard';
import Vehicle from './components/Vehicle';
import VehicleList from './components/VehicleList'
import Notifications from './components/Notifications'
import Sinistres from './components/Sinistres'
import SinistresList from './components/SinistresList'
import Collab from './components/Collaborators'
import CollabList from './components/CollaboratorList'
import collab_form1 from './components/Collab_multiforms1';
import collab_form2 from './components/Collab_multiforms2';
import collab_form3 from './components/Collab_multiforms3';
import collab_form4 from './components/Collab_multiforms4';
import collab_form5 from './components/Collab_multiforms5';
import collab_form6 from './components/Collab_multiforms6';
import collab_form7 from './components/Collab_multiforms7';

import vehicle_form1 from './components/Vehicle_multiforms1';
import vehicle_form2 from './components/Vehicle_multiforms2';
import vehicle_form3 from './components/Vehicle_multiforms3';
import vehicle_form4 from './components/Vehicle_multiforms4';
import vehicle_form5 from './components/Vehicle_multiforms5';
import vehicle_form6 from './components/Vehicle_multiforms6';

import sinistre_form1 from './components/Sinistres_multiforms1';
import sinistre_form2 from './components/Sinistres_multiforms2';
import sinistre_form3 from './components/Sinistres_multiforms3';
import sinistre_form4 from './components/Sinistres_multiforms4';
import sinistre_form5 from './components/Sinistres_multiforms5';
import sinistre_form6 from './components/Sinistres_multiforms6';
import sinistre_form7 from './components/Sinistres_multiforms7';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />

          <Route exact path='/dashboard' component={Dashboard} />

          <Route exact path='/vehicle' component={Vehicle} />
          <Route exact path='/vehicle_list' component={VehicleList} />

          <Route exact path='/notifications' component={Notifications} />

          <Route exact path='/sinistres' component={Sinistres} />
          <Route exact path='/sinistres_list' component={SinistresList} />

          <Route exact path='/collab' component={Collab} />
          <Route exact path='/collab_list' component={CollabList} />

          <Route exact path='/collab_wizard1' component={collab_form1} />
          <Route exact path='/collab_wizard2' component={collab_form2} />
          <Route exact path='/collab_wizard3' component={collab_form3} />
          <Route exact path='/collab_wizard4' component={collab_form4} />
          <Route exact path='/collab_wizard5' component={collab_form5} />
          <Route exact path='/collab_wizard6' component={collab_form6} />
          <Route exact path='/collab_wizard7' component={collab_form7} />

          <Route exact path='/vech_wizard1' component={vehicle_form1} />
          <Route exact path='/vech_wizard2' component={vehicle_form2} />
          <Route exact path='/vech_wizard3' component={vehicle_form3} />
          <Route exact path='/vech_wizard4' component={vehicle_form4} />
          <Route exact path='/vech_wizard5' component={vehicle_form5} />
          <Route exact path='/vech_wizard6' component={vehicle_form6} />

          <Route exact path='/sin_wizard1' component={sinistre_form1} />
          <Route exact path='/sin_wizard2' component={sinistre_form2} />
          <Route exact path='/sin_wizard3' component={sinistre_form3} />
          <Route exact path='/sin_wizard4' component={sinistre_form4} />
          <Route exact path='/sin_wizard5' component={sinistre_form5} />
          <Route exact path='/sin_wizard6' component={sinistre_form6} />
          <Route exact path='/sin_wizard7' component={sinistre_form7} />

        </Switch>
      </Router>
    );

  }
}

export default App;