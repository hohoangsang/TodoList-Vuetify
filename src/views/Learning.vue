<template>
  <div class="home">
    <h1>Home Page</h1>

    <!-- Text-color -->
    <p class="brown darken-2 white--text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
      voluptates commodi explicabo beatae, fuga ducimus molestias voluptas odio
      illo aliquid sit libero cumque officiis, molestiae dolore magni sequi
      autem? Fugiat!
    </p>

    <p class="">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      omnis distinctio dolorem doloribus repellendus eveniet id temporibus, nam
      voluptatum sed earum quae hic saepe, voluptate odit molestiae vero autem
      voluptatibus.
    </p>

    <p class="text-md-h1 text-sm-h3 hidden-xs-only">This is H1</p>

    <p class="title">This is title</p>
    <p class="subtitle-1">This is sub title 1</p>
    <p class="subtitle-2">This is sub title 2</p>

    <p class="caption">This is caption</p>

    <div class="font-weight-bold text-center">
      Test text.
    </div>

    <!-- button & icon -->
    <v-btn :loading="false" class="red accent-4 white--text mr-2">Click me</v-btn>

    <v-btn depressed dark color="pink" class="mr-2">Click me</v-btn>

    <v-btn plain color="pink" class="mr-2">Click me</v-btn>

    <v-btn class="red accent-4 white--text mr-2 text-capitalize" large>
      <v-icon left large>mdi-email</v-icon>
      <span>Email me</span>
    </v-btn>

    <v-btn class="red accent-4 white--text mr-2" small>
      <span>Call me</span>
      <v-icon small right>mdi-phone</v-icon>
    </v-btn>

    <v-spacer></v-spacer>

    <v-btn class="my-2 mx-2" depressed dark fab small>
      <v-icon small>mdi-format-list-bulleted-square</v-icon>
    </v-btn>

    <v-btn class="my-2 mx-2" depressed dark fab>
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>

    <v-btn class="my-2 mx-2" depressed dark fab large color="purple">
      <v-icon large>mdi-format-list-bulleted-square</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Learning",
};
</script>