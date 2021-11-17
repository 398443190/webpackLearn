<template>
  <div>
    <img src="../static/vue.png" alt="" class="vue" />
    <img src="../static/vue-copy.png" alt="" class="vue-copy" />
    <div class="example">{{ msg }}</div>
    <button @click="toast">按钮</button>
    <div>
      <router-link to="/tab-a">TabA</router-link>
      <router-link to="/tab-b">TabB</router-link>
      <router-view />
    </div>
    <section>
      <button @click="setVuexValue">Set Vuex Value</button>
      <div>{{ text }}</div>
    </section>
  </div>
</template>

// 《script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
// import { State } from "vuex-class";
// @Component
// export default class FrameWork extends Vue {
//     protected msg = "Example";
//     @State("text") text!: string;
//     protected toast() {
//         window?.alert("ExampleMessage");
//     }
//     protected setVuexValue() {
//         this.$store.commit("setText", "New Value");
//     }
// }
// </script>
<script>
import { mapState } from "vuex";
export default {
  name: "FrameWork",
  data: () => ({
    msg: "Example",
  }),
  computed: mapState({
    text: (state) => state.text,
  }),
  methods: {
    toast: function () {
      window?.alert("ExampleMessage");
    },
    setVuexValue() {
      this.$store.commit("setText", "New Value");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../common/style.scss";
.vue {
  width: 100px;
}
.vue-copy {
  width: 300px;
}
.example {
  color: $color-blue;
  font-size: 30px;
}
</style>
