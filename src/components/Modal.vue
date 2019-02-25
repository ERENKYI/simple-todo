<template>
    <div class="modal">
        <h4 v-if="editMode===false">{{modalContent.name}}</h4>
        <input v-else v-model="modalContent.name" @change="sendNewValues" minlength="1">
    </div>
</template>

<script>
    export default {
        name: "Modal",
        props: {
            modalContent: Object,
            tempContent: Object,
            editMode: Boolean
        },
        methods: {
            sendNewValues: function () {
                this.$emit('editedValues', this.modalContent)
            }
        }
    }
</script>

<style scoped>
    .modal h4 {
        margin: 0
    }

    .modal input {
        color: #6A869B;
        border: 1px solid #6A869B;
        padding: 8px;
        border-radius: 8px;
        width: calc(100% - 18px);
    }
</style>