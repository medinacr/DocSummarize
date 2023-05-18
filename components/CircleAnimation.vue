<template>
    <span class="circle-animation" :class="{ 'fade': show }"></span>
</template>

<script>
export default {
    props: {
        show: Boolean
    }
}
</script>

<style>
.circle-animation {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: #ccc;
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.fade {
    opacity: 1;
}
</style>
