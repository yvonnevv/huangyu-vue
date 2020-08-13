import axios from 'axios'

axios.defaults.baseURL = 'http://mobile.royalhonors.group/'
axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json; charset=utf-8'
  }
})

/**
 * 请求拦截
 */
axios.interceptors.request.use(config => {
  if (localStorage.hasOwnProperty('token')) {
    config.headers['token'] = localStorage.getItem('token');
  }
  vm.$showSnake()
  return config;
}, error => {
  vm.$closeSnake()
  return Promise.reject(error);
})

/**
 * 响应拦截
 */
axios.interceptors.response.use(response => {
  vm.$closeSnake();
  return response;
}, error => {
  if (error && error.response) {
    switch (error.response.status) {
      case 404:
        vm.$dialog.toast({ mes: '404 请求错误,未找到该资源!', timeout: 1500, icon: 'error' });
        break
      case 502:
        vm.$dialog.toast({ mes: '502 网络错误!', timeout: 1500, icon: 'error' });
        break
      case 503:
        vm.$dialog.toast({ mes: '503 服务不可用!', timeout: 1500, icon: 'error' });
        break
      case 504:
        vm.$dialog.toast({ mes: '504 网络超时求!', timeout: 1500, icon: 'error' });
        break
      case 505:
        vm.$dialog.toast({ mes: '505 http版本不支持该请求!', timeout: 1500, icon: 'error' });
        break
    }
  } else {
    vm.$dialog.toast({ mes: '连接到服务器失败!', timeout: 1500, icon: 'error' });
  }
  vm.$closeSnake()
  return Promise.reject(error)
})

let HTTP = (type, url, params, config = {
}) => {
  let args = [url, params, config].filter(x => Boolean(x));
  return axios[type](...args).then(
    res => {
      return res.data;
    }
  )
}

export default {
  get: HTTP.bind(null, 'get'),
  post: HTTP.bind(null, 'post'),
  put: HTTP.bind(null, 'put'),
  delete: HTTP.bind(null, 'delete')
}
