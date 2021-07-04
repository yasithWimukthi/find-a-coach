
const routes = [
  {path:'/',redirect:'/coaches'},
  {path:'/coaches',component:null},
  {path:'/coaches/:id',component:null,children:[
      {path:'contact',component:null},
  ]},
  {path:'/register',component:null},
  {path:'/request',component:null},
  {path:'/:notFound(.*)',component:null}
];

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router;
