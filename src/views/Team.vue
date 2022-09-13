<template>
  <div class="team pa-4">
    <h1 class="grey--text subtitle-1">My Team</h1>

    <v-container class="my-3">
      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in teamList"
          :key="person.id"
          class="text-center"
        >
          <v-card class="py-4">
            <v-responsive>
              <v-avatar size="150">
                <v-img
                  src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                ></v-img>
              </v-avatar>
            </v-responsive>

            <v-card-text>
              <div class="subtitle-2">{{ person.name }}</div>
              <div>{{ person.role }}</div>
            </v-card-text>

            <v-card-actions>
              <v-row justify="center">
                <v-btn depressed class="text-capitalize mb-3">
                  <v-icon small left>mdi-message-processing</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import data from "@/data.json";
export default {
  data() {
    return {
      teamList: data.team,
    };
  },
};
</script>