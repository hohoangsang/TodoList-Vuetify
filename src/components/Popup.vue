<template>
  <v-row justify="center" class="my-4">
    <v-dialog width="600">
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="cyan darken-4" dark v-bind="attrs" v-on="on">
          Create new Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
            <h3>Add a new project</h3>
        </v-card-title>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {};
</script>