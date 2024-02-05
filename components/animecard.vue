<template>
    <div 
    class="text-sm px-1 py-2"
    >{{ anime.title }}</div>
</template>

<script>
export default {
    props: {
        anime: {
            type: Object,
            required: true
        }
    }
}
</script>