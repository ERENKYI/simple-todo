<template>
    <li>
        <span @click="emitToParent(index, 'view')">{{item.name}}</span>
        <div class="options">
            <img @click="emitToParent(index, 'edit')" src="../assets/edit-outline.png" width="16">
            <img @click="emitToParent(index, 'complete')" src="../assets/checkmark-outline.png" width="16">
        </div>
    </li>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            item: Object,
            index: Number
        },
        methods: {
            emitToParent: function (index, type) {
                this.$emit(type + 'Task', index);
            }
        }
    }
</script>