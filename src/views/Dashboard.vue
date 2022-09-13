<template>
  <div class="dashboard pa-4">
    <h1 class="grey--text subtitle-1">Dashboard</h1>

    <v-container class="my-3">
      <v-row class="mx-1 my-4">
        <v-tooltip top max-width="11rem">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              small
              @click="sortBy('title')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>

        <v-tooltip top max-width="11rem">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              plain
              small
              @click="sortBy('person')"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon left>mdi-account-group</v-icon>
              <span class="caption text-lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sort project by person</span>
        </v-tooltip>
      </v-row>

      <v-card v-for="project in projectList" :key="project.id" flat>
        <v-row
          no-gutters
          :class="`pa-3 rounded-3 project ${project.status}`"
          align="center"
        >
          <v-col cols="12" md="6">
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col cols="12" sm="4" md="2">
            <div>
              <v-chip :class="`${project.status} w-10`" text-color="white">
                {{ project.status }}
              </v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider />
      </v-card>
    </v-container>
  </div>
</template>

<script>
import data from "../data.json";

export default {
  data() {
    return {
      initProjectList: data.todoList,
      projectList: data.todoList,
    };
  },

  methods: {
    sortBy(prop) {
      this.projectList.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },

  destroyed() {
    this.projectList = this.initProjectList;
  },
};
</script>

<style scoped>
.project.pending {
  border-left: 5px solid #f4511e;
}

.project.complete {
  border-left: 5px solid #2e7d32;
}

.project.overdue {
  border-left: 5px solid #b71c1c;
}

.v-chip.pending {
  background-color: #f4511e;
}

.v-chip.complete {
  background-color: #2e7d32;
}

.v-chip.overdue {
  background-color: #b71c1c;
}
</style>
