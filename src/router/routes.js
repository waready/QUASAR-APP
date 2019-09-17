
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'programas', component: () => import('pages/Error404.vue') },
      { path: 'login', name: 'login', component: () => import('pages/app/Loguin.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
