<template>
  <div id="app">

    <nav><img src="./assets/kratos.png" width="125px"> </nav>
    <div id="nav">
       <router-link to="./pages/Home">Home</router-link>
    </div>
    <div class="container">
        <h1>Suas Empresas</h1>
        <p>Clique em uma de suas empresas para acessar</p>
        <p>seu perfil no Contador Online</p>
        <body>
          <main> 
            <div class="card" v-for="n in 3">
                <div class="infos" >
                    <img class="avatar" src="./assets/kratos.png" href="">
                    <div class="name capitalize">
                      <router-link to="./pages/Pao">Pão</router-link>   
                    </div>
                </div>
          </div>
          </main>
        </body>

    </div>
  </div>
</template>
<style lang="scss">
    
body main .card {
  width: 260px;
  min-height: 150px;
  display: flex;
  justify-content: center;
  padding: 5px;
 
  border-radius: 5px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background: rgba(255, 255, 255, 0.8);
}
body main .card .avatar {
  width: 100px;
  height: 100px;
  margin-right: 10px;
  border-radius: 50%;
}
</style>
<script>
import { http } from '@/http'
import Config from '@/config'

export default {
  name: 'App',
  data(){
    return{
     empresas: []
    }  
  },
  mounted(){
    Config.listar().then(resposta => {
      console.log(resposta.data)
      this.empresas = resposta.data
    })
  }
  
}
</script>
