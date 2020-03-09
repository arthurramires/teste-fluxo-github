import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

const http = Vue.http

http.options.root = 'https://5c0e8a20e1498a001336489e.mockapi.io/api/'

export { http }
