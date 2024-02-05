<template>
    <div class="flex items-center bg-gray-700 text-grey-200 py-4 px-3">
        <div class="text-xl">BTJ Academy</div>
        <div class ="flex items-center space-x-4 ml-4">
            <NuxtLink 
                class="rounded-md hover:bg-grey-600" 
                to="/">Basic</NuxtLink>
            <NuxtLink 
                class="rounded-md hover:bg-grey-600" 
                to="/manga">Advanced</NuxtLink>
            <NuxtLink 
                class="rounded-md hover:bg-grey-600" 
                to="/post-test">Post Test</NuxtLink>
        </div>
    </div>
</template>