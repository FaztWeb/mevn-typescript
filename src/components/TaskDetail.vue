<template>
  <div class="col-md-4 offset-md-4">
    <form @submit.prevent="handleUpdate()" class="card card-body">
      <h1 class="card-title my-3 text-center">Update a Task</h1>

      <input
        type="text"
        v-model="currentTask.title"
        class="form-control mb-3"
      />

      <textarea
        v-model="currentTask.description"
        class="form-control mb-3"
      ></textarea>

      <button class="btn btn-primary">Update</button>
    </form>

    <button @click="handleDelete()" class="btn btn-danger my-4">delete</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Task } from "@/interfaces/Task";
import { deleteTask, getTask, updateTask } from "@/services/TaskService";

export default defineComponent({
  name: "task",
  data() {
    return {
      currentTask: {} as Task,
    };
  },
  methods: {
    async loadTask(id: string) {
      try {
        const { data } = await getTask(id);
        this.currentTask = data;
      } catch (error) {
        console.error(error);
      }
    },
    async handleUpdate() {
      try {
        if (typeof this.$route.params.id === "string") {
          await updateTask(this.$route.params.id, this.currentTask);
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
    async handleDelete() {
      try {
        if (typeof this.$route.params.id === "string") {
          deleteTask(this.$route.params.id);
          this.$router.push("/");
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    if (typeof this.$route.params.id === "string") {
      this.loadTask(this.$route.params.id);
    }
  },
});
</script>