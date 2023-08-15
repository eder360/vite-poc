<template>
  <div class="transparent-counter">
    <p>Count: {{ counter }}</p>
    <button class="increment-button" @click="incrementCount">Increment</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Button",
  computed: {
    ...mapGetters([
      'counter',
  ]),
  },
  methods: {
    ...mapActions(['incrementCount'])
  },
};
</script>

<style scoped>
.transparent-counter {
  background-color: rgba(128, 114, 114, 0.5);
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
}

.increment-button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 10px;
}
</style>
