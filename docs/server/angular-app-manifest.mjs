
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/inicio",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/inicio"
  },
  {
    "renderMode": 2,
    "route": "/login"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27949, hash: '39b917289c454bbb37f395361fd4fddde635e104e3ebe05a35a31fb794d03249', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17191, hash: '4adf37dfeb9bfb9734ef7035ebea45f54391e7a7ffbce998755106a1bd1b2940', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 39893, hash: 'ee34e875f93e82eb0d7aba616589840b3aed498ebe8b512b5ca8f0bb67ee33ab', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'inicio/index.html': {size: 68356, hash: '6b884b96c3d8036cbcc6a14c8f3756c6ff1f8f433763c54cf3571077fc1479bc', text: () => import('./assets-chunks/inicio_index_html.mjs').then(m => m.default)},
    'styles-6ZKAOBQU.css': {size: 240049, hash: 'iCxkWN0oNwo', text: () => import('./assets-chunks/styles-6ZKAOBQU_css.mjs').then(m => m.default)}
  },
};
