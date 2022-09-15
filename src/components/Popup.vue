<template>
  <v-row justify="center" class="my-4">
    <v-dialog width="600" v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="cyan darken-4 text-none" dark v-bind="attrs" v-on="on">
          Create new Project
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <h3>Add a new project</h3>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" lazy-validation v-model="valid">
            <v-text-field
              label="Project Name"
              v-model="name"
              prepend-icon="mdi-folder"
              :counter="100"
              :rules="nameRules"
              required
            ></v-text-field>
            <v-textarea
              label="Content"
              v-model="content"
              prepend-icon="mdi-image-text"
              rows="2"
              :rules="contentRules"
              required
            ></v-textarea>

            <v-menu offset-y bottom max-width="290px">
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  slot="activator"
                  label="Due date"
                  prepend-icon="mdi-calendar-range"
                  v-bind="attrs"
                  v-on="on"
                  :value="formatDue"
                  :rules="dueDateRules"
                ></v-text-field>
              </template>
              <v-date-picker v-model="dueDate"></v-date-picker>
            </v-menu>

            <v-row class="mt-3">
              <v-col>
                <v-btn class="secondary" @click="reset" rounded block
                  >Reset</v-btn
                >
              </v-col>
              <v-col>
                <v-btn class="primary white--text" @click="submit" rounded block
                  >Submit</v-btn
                >
              </v-col>
              <v-col>
                <v-btn
                  class="grey white--text"
                  @click="dialog = false"
                  rounded
                  block
                  >Close</v-btn
                >
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import moment from "moment";
// import db from "@/firebase";

export default {
  data() {
    return {
      dialog: false,
      valid: true,
      name: "",
      nameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 100) || "Name must be less then 100 character",
      ],
      content: "",
      contentRules: [(v) => !!v || "Content is required"],

      dueDate: null,
      dueDateRules: [
        (v) => !!v || "Due date is required"
      ]
    };
  },

  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const submitProject = {
          title: this.name,
          content: this.content,
          status: "pending",
          person: "Sang Hoang",
          due: this.dueDate
        }

        console.log(submitProject)

        // db.collection('projects').add(submitProject).then(() => {
        //   console.log("added to firebase")
        // }).catch((err) => {
        //   console.log("error ", err)
        // });
      }
    },

    reset() {
      this.$refs.form.reset();
    },
  },

  computed: {
    formatDue() {
      return this.dueDate ? moment(this.dueDate).format("Do MMM YYYY") : "";
    },
  },
};
</script>