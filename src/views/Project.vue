<template>
  <div class="project pa-4">
    <h1 class="grey--text subtitle-1">My Project</h1>

    <v-container class="my-3">
      <v-expansion-panels focusable>
        <v-expansion-panel v-for="project in myProject" :key="project.id">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content>
            <br/>
            {{ project.content }}
          </v-expansion-panel-content>
        </v-expansion-panel>  
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import data from "@/data.json";

export default {
  data() {
    return {
      projectList: data.todoList,
    };
  },

  computed: {
    myProject() {
      return this.projectList.filter(project => project.person === "Sang Hoang")
    }
  }
};
</script>
