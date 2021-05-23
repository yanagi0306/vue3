<template>
  <div>
    <table>
      <tr>
        <th>ID</th>
        <th>コメント</th>
        <th>状態</th>
      </tr>
      <tr v-for="(task, index) in tasks" :key="index">
        <td v-if="task.status % 2 != 0">{{ index }}</td>
        <td v-if="task.status % 2 != 0">{{ task.name }}</td>
        <button v-if="task.status % 2 != 0" @click="statusChange(index)">
          作業中
        </button>
        <button v-if="task.status % 2 != 0" @click="del(index)">削除</button>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['tasks'],
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
