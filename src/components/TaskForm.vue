<template>
  <div class="col-md-4 offset-4">
    <div class="card card-body">
      <h1 class="card-title my-3 text-center">Create a Task</h1>
      <form @submit.prevent="saveTask()">
        <input
          class="form-control mb-3"
          placeholder="Write a title"
          type="title"
          v-model="task.title"
          autofocus
        />
        <textarea
          class="form-control mb-3"
          placeholder="Write a Description"
          rows="3"
          v-model="task.description"
        ></textarea>
        <button
          class="btn btn-primary w-100"
          :disabled="!task.title || !task.description"
        >
          save
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { createTask } from "@/services/TaskService";

export default defineComponent({
  data() {
    return {
      task: {} as Task,
    };
  },
  methods: {
    async saveTask() {
      try {
        const res = await createTask(this.task);
        console.log(res);
        this.$router.push({ name: "tasks" });
      } catch (error) {
        console.error(error);
      }
    },
  },
});
</script>