
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/LH-GAMES/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/LH-GAMES/inicio",
    "route": "/LH-GAMES"
  },
  {
    "renderMode": 2,
    "route": "/LH-GAMES/inicio"
  },
  {
    "renderMode": 2,
    "route": "/LH-GAMES/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27958, hash: '66c9699ff5cfc33f90a5547fbca1d2b29605fed270bb4f8dea8a4c56d76983ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17200, hash: '2622d2d5432f29aadfb3c7ce79e8c426d856481596dd2a0778b0d51194780940', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 68392, hash: '6df86b50877a39dfced6f62ea70d9132d89621c07dcf11e72a82b475b3abda29', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 39929, hash: '9279b0013e573351a60528b6270d9d2bb9a16506441ce1f6e05b5f75545244e6', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'styles-6ZKAOBQU.css': {size: 240049, hash: 'iCxkWN0oNwo', text: () => import('./assets-chunks/styles-6ZKAOBQU_css.mjs').then(m => m.default)}
  },
};
