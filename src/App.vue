<template>
  <v-app>
    <v-main>   
      <Header/>
     <Students/>
    </v-main>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Students from "./components/Students.vue";

export default {
  name: 'App',

  components: {
    Header,
    Students
  },

  data: () => ({
    //
  }),
};
</script>
