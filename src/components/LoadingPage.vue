<template>
    <div>
        <div v-for="(item, index) in spaceT" class="py-5" :key="index"></div>
        <div class="loader container">
            <span></span>
            <span></span>
        </div>
        <div
            v-for="(item, index) in spaceB"
            class="py-5"
            :key="'A' + index"
        ></div>
    </div>
</template>

<script>
export default {
    props: ["spaceT", "spaceB"],
};
</script>

<style scoped>
.loader {
    border: 16px solid #f3f3f3; /* Light grey */
    border-top: 16px solid var(--primary-color); /* Blue */
    border-radius: 50%;
    width: 120px;
    height: 120px;
    animation: spin 0.8s linear infinite;
    margin: 60px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
</style>
