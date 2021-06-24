<template>
    <figure class="page-title mb-4">
        <h3 class="page-title-text">{{ title }}</h3>
    </figure>
</template>

<script>
    export default {
        name : 'PageTitle',
        props: {
            title: {
                type: String,
                default: 'Page Title'
            },
        },
    }
</script>

<style lang="scss" scoped>
</style>