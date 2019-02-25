<template>
    <div id="app">
        <TodoList/>
    </div>
</template>

<script>
    import TodoList from './components/TodoList'

    export default {
        name: 'app',
        components: {
            TodoList
        }
    }
</script>

<style>
    html, body {
        height: 100%;
        margin: 0;
        background: #ffd54f
    }

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>
