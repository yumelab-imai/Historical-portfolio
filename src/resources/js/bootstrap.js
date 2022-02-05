// ここでは Ajax 通信で用いる Axios ライブラリの設定を記述している

import { getCookieValue } from './util'

window.axios = require('axios');

// Ajaxリクエストであることを示すヘッダーを付与する
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


window.axios.interceptors.request.use(config => {
  // クッキーからトークンを取り出してヘッダーに添付する
  config.headers['X-XSRF-TOKEN'] = getCookieValue('XSRF-TOKEN')

  return config
})

// axios の responseインターセプターにまとめる
window.axios.interceptors.response.use(
  response => response,
  error => error.response || error
)
