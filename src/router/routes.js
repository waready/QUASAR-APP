import * as faker from 'faker'
// const id_1 = faker.random.alphaNumeric(16)

// console.log('maquina_1', id_1)

// const id_2 = faker.random.alphaNumeric(16)
// console.log('maquina_2', id_2)

// const id_3 = faker.random.alphaNumeric(16)
// console.log('maquina_3', id_3)

// const id_4 = faker.random.alphaNumeric(16)
// console.log('maquina_4', id_4)

console.log('maquina_1', 'mlwe2ia0x5rlmtsp')
console.log('maquina_2', 'h6im6ea3o63t0p4l')
console.log('maquina_3', 'w5p9ljgjrlgck1tv')
console.log('maquina_4', 'dm4x4vojx7uy9h2n')

const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '', name: 'index', component: () => import('pages/Index.vue') },
      { path: 'programas', component: () => import('pages/Error404.vue') },
      { path: 'login', name: 'login', component: () => import('pages/app/Loguin.vue') },
      { path: 'main', name: 'main', component: () => import('pages/app/maquina1.vue'), meta:{ requiresAuth: true } }

    ]
  },
  {
    path: '/entro',
    component: () => import('layouts/Layout.vue'),
    children:[
      // {path: id_1, name: 'main', component: () => import('pages/app/Index.vue'), meta:{ requiresAuth: true }},
      // {path: id_2, name: 'main', component: () => import('pages/app/Index.vue'), meta:{ requiresAuth: true }},
      // {path: id_3, name: 'main', component: () => import('pages/app/Index.vue'), meta:{ requiresAuth: true }},
      // {path: id_4, name: 'main', component: () => import('pages/app/Index.vue'), meta:{ requiresAuth: true }}
      
      {path: 'mlwe2ia0x5rlmtsp', name: 'main', component: () => import('pages/app/maquina1.vue')},
      {path: 'h6im6ea3o63t0p4l', name: 'main', component: () => import('pages/app/maquina2.vue')},
      {path: 'w5p9ljgjrlgck1tv', name: 'main', component: () => import('pages/app/maquina3.vue')},
      {path: 'dm4x4vojx7uy9h2n', name: 'main', component: () => import('pages/app/maquina4.vue')}



    ],
    name:'intro'
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
