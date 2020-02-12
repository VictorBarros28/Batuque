<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class = "texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
</div>
</template>

<script>
export default {
  name: 'servicos',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{  
  width: 1920px;
  height: 906.8px;
  background-color: #e48f8e;
  -webkit-clip-path: polygon(100% 6%, 100% 90%, 0 100%, 0 0);
}
h1{
  
  font-family: 'Times New Roman';
  font-size: 50px;
  font-weight: lighter;
  color: #ffffff;
  padding-top: 94px;

}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.texto{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight:lighter;
  color: #ffffff;
  padding-top: 233px;
  margin-left: 620px;
  margin-right: 619px;
  height: 124px;

}
</style>
