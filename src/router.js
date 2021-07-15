import {createRouter,createWebHashHistory} from 'vue-router'

import CoachesList from './pages/coaches/CoachesList';
import CoachDetails from './pages/coaches/CoachDetails';
import ContactCoach from './pages/requests/ContactCoach';
import CoachRegistration from './pages/coaches/CoachRegistration';
import RequestsReceived from './pages/requests/RequestsReceived';
import NotFound from './pages/NotFound';
import UserAuth from './pages/auth/UserAuth';

const routes = [
  {path:'/',redirect:'/coaches'},
  {path:'/coaches',component:CoachesList},
  {path:'/coaches/:id',component:CoachDetails,props:true,children:[
      {path:'contact',component:ContactCoach},
  ]},
  {path:'/register',component:CoachRegistration},
  {path:'/requests',component:RequestsReceived},
  {path:'/auth',component:UserAuth},
  {path:'/:notFound(.*)',component:NotFound}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router;
