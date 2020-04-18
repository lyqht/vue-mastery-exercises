<template>
  <div>
    <h1>This is {{ username }}</h1>
  </div>
</template>

<script>
export default {
  props: ["username"]
};
</script>
