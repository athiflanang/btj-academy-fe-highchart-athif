<template>
    <div class="my-3">
    <div class="flex items-center justify-between my-3 px-4">
        <div class="text-[24px]">{{title}}</div>
        <input 
            type="text"
            placeholder="search"
            class="border py-1 px-2 rounded-md"
        />
    </div>
    <slot />
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'page title'
        }
    }
}
</script>