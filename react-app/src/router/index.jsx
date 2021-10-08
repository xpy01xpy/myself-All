import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Reject from '@/component/Reject/index'
import routerList from './routerList'



const index = (props) =>{
  return (<Switch>
        {routerList.map(({path, component, ...routes})=>{
          return <Route key={path} path={path} component={component} {...routes} />
        })}
        <Route path="/Reject"><Reject /></Route>
        <Redirect to="/Reject" />
      </Switch>)
}

export default index;