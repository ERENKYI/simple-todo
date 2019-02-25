<template>
    <div class="todo-list">
        <!-- HEADER -->
        <div class="header">
            <h4>Simple Todo List</h4>
            <img @click="headerButton" :title="headerButtonTitle" :src="headerButtonSrc" width="24">
        </div>
        <!-- HEADER END-->

        <!-- CONTENT -->
        <ul v-if="currentState==='viewTasks'">
            <TodoItem v-for="(item, index) in todoItems" v-if="item.completed===showCompleted" :item="item"
                      :index="index" v-on:completeTask="completeTask"
                      v-on:viewTask="viewTask(index)" v-on:editTask="editTask(index)"/>
        </ul>

        <Modal v-else :modal-content="this.todoItems[modalContent]" :edit-mode="this.currentState==='editTask'"
               v-on:editedValues="changeEditedValues"/>
        <!-- CONTENT END -->

        <!-- INPUT (FOOTER) -->
        <div class="new-task" v-if="currentState==='viewTasks'">
            <input v-model="newTask">
            <div class="add-task" @click="addTask">
                <span>Add Task</span>
            </div>
        </div>

        <div class="footer-buttons" v-else>
            <a class="button" @click="editSaveButton"
               :class="{warning:currentState==='viewSingleTask', success:currentState==='editTask'}">{{modalButtonText}}</a>
            <a class="button primal" @click="toggleTaskStatus">{{markButtonText}}</a>
        </div>
        <!-- INPUT (FOOTER) END -->
    </div>
</template>

<script>
    import TodoItem from './TodoItem'
    import Modal from './Modal'

    export default {
        name: "TodoList",
        components: {
            TodoItem,
            Modal
        },
        data: function () {
            return {
                todoItems: [],
                showCompleted: false,
                newTask: "",
                currentState: "viewTasks",
                modalContent: -1,
                editedValues: {},
                images: {
                    headerButtonCheck: require('../assets/checkmark-outline.png'),
                    headerButtonMark: require('../assets/close-circle-outline.png'),
                    headerButtonBack: require('../assets/arrow-back-outline.png')
                }
            }
        },
        created: function () {
            if (localStorage.todoItems) {
                this.todoItems = JSON.parse(localStorage.todoItems);
            } else {
                this.todoItems = [
                    {
                        name: "Click this long task item to see all of it's title in case you can't see it all. 👍",
                        completed: false
                    },
                    {
                        name: "Hover over this. 😄",
                        completed: false
                    },
                    {
                        name: "Click the top right button to see completed tasks. 👀",
                        completed: false
                    },
                    {
                        name: "You found the completed tasks section! ✨",
                        completed: true
                    }
                ]
            }
        },
        computed: {
            modalButtonText: function () {
                if (this.currentState === "viewSingleTask") {
                    return "Edit"
                } else {
                    return "Save"
                }
            },
            markButtonText: function () {
                let text = "Mark as";

                if (this.todoItems[this.modalContent].completed) {
                    text += " Incomplete"
                } else {
                    text += " Completed"
                }

                return text;
            },
            headerButtonSrc: function() {
                if(this.currentState === "viewTasks") {
                    if(this.showCompleted) {
                        return this.images.headerButtonCheck;
                    } else {
                        return this.images.headerButtonMark;
                    }
                } else {
                    return this.images.headerButtonBack;
                }

            },
            headerButtonTitle: function () {
                if (this.currentState === "viewTasks") {
                    if (this.showCompleted) {
                        return "Show incomplete tasks"
                    } else {
                        return "Show completed tasks"
                    }
                } else {
                    return "Go back to todo list"
                }
            }
        },
        methods: {
            toggleListType: function () {
                this.showCompleted = !this.showCompleted
            },
            addTask: function () {
                if (!this.newTask) return alert("You need to type something in there!");

                this.todoItems.push({
                    name: this.newTask,
                    description: null,
                    completed: false
                });

                this.newTask = "";
                this.saveTasks();
            },
            toggleTaskStatus: function () {
                this.todoItems[this.modalContent].completed = !this.todoItems[this.modalContent].completed;
                this.saveTasks();
            },
            completeTask: function (taskIndex) {
                this.todoItems[taskIndex].completed = true;
                this.saveTasks();
            },
            saveTasks: function () {
                localStorage.todoItems = JSON.stringify(this.todoItems);
            },
            editTask: function (index) {
                this.refreshModalValues(index);
                this.currentState = "editTask"
            },
            viewTask: function (index) {
                this.refreshModalValues(index);
                this.currentState = "viewSingleTask"
            },
            refreshModalValues: function (index) {
                this.modalContent = index;
                this.editedValues = {};
            },
            editSaveButton: function () {
                if (this.currentState === "viewSingleTask") {
                    // Edit button pressed
                    this.editTask(this.modalContent);
                } else {
                    // Save button pressed
                    this.saveSingleTask();

                    this.changeState("viewSingleTask")
                }
            },
            saveSingleTask: function () {
                if (JSON.stringify(this.editedValues) !== JSON.stringify({}) && this.editedValues.name !== "") {
                    this.todoItems[this.modalContent] = this.editedValues;
                    this.saveTasks();
                }
            },
            changeState: function (newState) {
                this.currentState = newState
            },
            changeEditedValues: function (newValues) {
                this.editedValues = newValues
            },
            headerButton: function () {
                if (this.currentState === "viewTasks") {
                    this.toggleListType()
                } else {
                    if (this.currentState === "editTask") {
                        this.saveSingleTask();
                    }

                    this.currentState = "viewTasks";
                }
            }
        }
    }
</script>

<style>
    .todo-list {
        -webkit-border-radius: 8px;
        -moz-border-radius: 8px;
        border-radius: 8px;
        max-height: 80%;
        width: 440px;
        max-width: 85vw;
        background: #F4F4F4;
        color: #6A869B;
        -webkit-box-shadow: 0 0 20px 0 rgba(255, 111, 0, .15);
        -moz-box-shadow: 0 0 20px 0 rgba(255, 111, 0, .15);
        box-shadow: 0 0 20px 0 rgba(255, 111, 0, .15);
        padding: 0 16px 16px 16px;
    }

    .header {
        -webkit-box-shadow: 0 1px #eeeeee;
        -moz-box-shadow: 0 1px #eeeeee;
        box-shadow: 0 1px #eeeeee;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .header h4 {
        margin: 24px 0 16px 0
    }

    .header img {
        cursor: pointer;
    }

    .todo-list ul, .modal {
        margin: 16px 0 16px 4px;
        padding: 0;
        line-height: 32px;
        list-style: none;
    }

    .todo-list li {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .todo-list li span {
        cursor: pointer;
        white-space: nowrap;
        width: calc(100% - 64px);
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .todo-list .options {
        opacity: 0;
        -webkit-transition: opacity .1s;
        -moz-transition: opacity .1s;
        -ms-transition: opacity .1s;
        -o-transition: opacity .1s;
        transition: opacity .1s;
    }

    .todo-list li:hover .options {
        opacity: 1;
    }

    .todo-list .options img {
        cursor: pointer;
        margin-left: 4px;
    }

    .new-task, .footer-buttons {
        margin: 16px -16px -16px -16px;
        position: relative;
        display: flex;
    }

    .new-task input {
        width: 100%;
        border: none;
        height: 48px;
        border-bottom-left-radius: 8px;
        font-size: 16px;
        padding: 0 16px;
    }

    .footer-buttons .button {
        cursor: pointer;
        width: 100%;
        padding: 16px;
        color: white;
        text-align: center;
    }

    .footer-buttons .button:first-child {
        border-bottom-left-radius: 8px;
    }

    .footer-buttons .button:last-child {
        border-bottom-right-radius: 8px;
    }

    .button.primal {
        background: #63B8C8;
    }

    .button.warning {
        background: #f79e5f
    }

    .button.success {
        background: #A9E26F;
    }

    .add-task {
        cursor: pointer;
        width: 128px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: white;
        border-bottom-right-radius: 8px;
    }

    .add-task span {
        color: #68BACA;
    }
</style>