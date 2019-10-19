import React from 'react';
import Layout from './Layout/Layout';
import { Switch }  from 'react-router-dom';

import Home from './Components/home';
import SignIn from './Components/signin';
import Dashboard from './Components/admin/Dashboard';
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players';
import AddEditPlayer from './Components/admin/players/addEditPlayer';
const Routes = (props) => {

  //console.log(props); props user truyen App -> Routes -> here
  return(
    <Layout>
        <Switch>
            <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
           
            {/* <Route exact component={Dashboard} path="/dashboard"/> */}
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
            <PrivateRoute {...props} path="/admin_matches" exact component={AdminMatches}/>
            <PrivateRoute {...props} path="/admin_matches/add_match" exact component={AddEditMatch}/>
            <PrivateRoute {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch}/>

            <PrivateRoute {...props} path="/admin_players" exact component={AdminPlayers}/>
            <PrivateRoute {...props} path="/admin_players/add_player" exact component={AddEditPlayer}/>
            <PrivateRoute {...props} path="/admin_players/edit_player/:id" exact component={AddEditPlayer}/>

            <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
            <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
        </Switch>
    </Layout>
   
  )
}

export default Routes;