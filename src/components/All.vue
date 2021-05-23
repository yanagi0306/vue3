<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td>{{ index }}</td>
        <td>{{ task.name }}</td>
        <button v-if="task.status % 2 != 0" v-on:click="statusChange(index)">
          作業中
        </button>
        <button v-else v-on:click="statusChange(index)">完了</button>
        <button v-on:click="del(index)">削除</button>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["tasks"],
  methods: {
    statusChange(i) {
      this.tasks[i].status++;
    },
    del(i) {
      this.tasks.splice(i, 1);
    },
  },
};
</script>