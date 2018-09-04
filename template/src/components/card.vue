<template>
  <div>
    <p class="card">
      \{{ text }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
