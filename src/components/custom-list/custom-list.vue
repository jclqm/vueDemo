<template>
    <div class="cl">
        <div v-for="item in list" :key="item.name">
            <p>{{item.name}}</p>
            <CustomList v-if="item.children && item.children.length" :list="item.children"></CustomList>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CustomList',
    props: {
        list: Array
    }
}
</script>
