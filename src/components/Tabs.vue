<script setup>
import { ref, onMounted, getCurrentInstance } from "vue";
const emit = defineEmits(['tab-change'])
const instance = getCurrentInstance();
const children = instance.slots.default();
const selectedTab = ref(null);
const tabs = ref([]);

const selectTab = (tab) => {
    selectedTab.value = tab;
    emit('tab-change', tab.props.name)
};


onMounted(() => {
    selectedTab.value = children.filter(childTab => childTab.props.selected)[0]
    tabs.value = children ? children : [];
});
</script>


<template>
    <div>
        <div class="tab-nav">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index" @click="selectTab(tab)"
                    :class="{ selected: selectedTab.props.name === tab.props.name }">
                    {{ tab.props.name }}
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

  
<style scoped>
.tab-nav {
    background-color: #f0f0f0;
    padding: 10px;
}

.tab-nav ul {
    list-style: none;
    padding: 0;
    display: flex;
}

.tab-nav li {
    cursor: pointer;
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin-right: 10px;
    background-color: #fff;
    user-select: none;
}

.tab-nav li.selected {
    background-color: #007BFF;
    color: white;
}

.tab-content {
    padding: 20px;
}
</style>
  