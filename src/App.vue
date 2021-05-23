<template>
  <div>
    <h2>ToDoリスト</h2>
    <form>
      <input type="radio" name="status" value="All" v-model="value" />
      <label>すべて</label>
      <input type="radio" name="status" value="Working" v-model="value" />
      <label>作業中</label>
      <input type="radio" name="status" value="Done" v-model="value" />
      <label>完了</label>
    </form>

    <template v-if="value === 'All'">
      <All v-bind:tasks="tasks"></All>
    </template>
    <template v-else-if="value === 'Done'">
      <Done v-bind:tasks="tasks"></Done>
    </template>
    <template v-else-if="value === 'Working'">
      <Working v-bind:tasks="tasks"></Working>
    </template>

    <h2>タスクの追加</h2>
    <form>
      <input type="text" id="textbox" v-model="task" />
      <input type="button" value="追加" v-on:click="addtask" />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: "",
      tasks: [],
      value: "All",
    };
  },
  methods: {
    addtask() {
      this.tasks.push({
        name: this.task,
        status: 1,
      });
      this.task = "";
    },
  },
};
</script>