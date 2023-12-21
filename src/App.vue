<script setup>
import Header from "@/components/Header.vue";
import Sprite from "@/components/Sprite.vue";
import router from "@/router/index.js";
</script>

<template>
    <Sprite />
    <Header v-if="router.currentRoute.value.path !== '/auth'"/>
    <RouterView />
</template>

<style scoped>

</style>
