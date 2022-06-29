<template>

  <section class="src-components-parcial">
    <h1>Recuperatorio Corizzo Martin PNT2-21F-YA</h1>

    <div>
      <input type="text" v-model="texto" placeholder="Ingresa texto"/>
    </div>
    <hr>
      <p><u>Resultado</u></p>
      
      <div v-if="texto.length">
        <p> {{ cuentaCaracteres }}</p>
        <p>1 - {{ texto | Codificado}} (codificado)</p>
        <p>2 - {{ texto | Mayuscula }} (mayuscula)</p>
        <p>3 - {{ texto | Minuscula }} (minuscula)</p>
        <!-- <p>4 - {{ texto | Intercalado1 }} (intercalado1)</p> -->
        <!-- <p>4 - {{ texto }} </p>
        <p> cantidad caracteres: {{ cuentaCaracteres }}</p> -->
      </div>
      
      
      
      <br>

      <p>Respuestas: 1:C 2:B 3:C 4:A 5:B .... </p>
     

      <!-- <hr>
      <p><u>formState</u></p>
      <pre>{{ tamanioString }}</pre> -->

  </section>
 

</template>

<script lang="js">

  export default  {
    name: 'src-components-parcial',
    props: [],
    mounted () {},
    data () {
      return {
        texto: [],
      }
    },
    methods: {
      
      

    },
    computed: {
      cuentaCaracteres() {
        let caracteres = 0;
        for (let i = 0; i < this.texto.length(); i++) {
          caracteres++;
        }
        return caracteres;
      },
    }
}


</script>

<style scoped lang="css">
  .src-components-parcial {

  }
</style>
