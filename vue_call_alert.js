<!DOCTYPE HTML>

<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
	<title>Your Website</title>
</head>

<body>

<!-- Aqui temos a chamada da função Vue pelo v-on-->
<div id="app">
  <button v-on:click="dizerOi"> Seja educado </button>
</div>

<!-- Aqui temos a escrita da função Vue no script-->
<script>
    new Vue({
     el: '#app',
     methods:{dizerOi(){alert('Diga: Oi!')}}
    })
</script>
	
</body>

</html>
