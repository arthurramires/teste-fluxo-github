import { http } from './http/index'

export default {
  listar: () => {
    return http.get('empresas')
  }

}
