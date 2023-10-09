<script setup>
import { ref } from 'vue'
import tabs from "./components/Tabs.vue";
import tab from "./components/Tab.vue";

const selectedTabName = ref("Services");

function handleTabChange(tabName) {
  selectedTabName.value = tabName;
}

</script>

<template>
  <div>
    <tabs @tab-change="handleTabChange">
      <tab name="Services" :selected="selectedTabName === 'Services'">
        <h1>Hello Services</h1>
      </tab>
      <tab name="Pricing" :selected="selectedTabName === 'Pricing'">
        <h1>How much we do it for</h1>
      </tab>
      <tab name="About Us" :selected="selectedTabName === 'About Us'">
        <h1>Why we do it</h1>
      </tab>
    </tabs>
  </div>
</template>

