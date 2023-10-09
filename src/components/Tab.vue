<template>
    <div v-if="selected">
        <slot></slot>
    </div>
</template>

<script setup >
const props = defineProps(["name", "selected"]);
</script>