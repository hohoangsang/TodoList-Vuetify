<template>
  <nav>
    <v-app-bar app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text shrink-on-scroll">
        <span class="font-weight-light">Todo</span>
        <span class="font-weight-bold">List</span>
      </v-toolbar-title>

      <v-spacer />

      <v-btn plain class="font-weight-bold">
        <span>Sign out</span>
        <v-icon right>mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-system-bar />
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png" />
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link dark>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Sang Hoang </v-list-item-title>
            <v-list-item-subtitle>sanghh@unitech.vn</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>

      <v-divider dark />

      <v-list nav dense>
        <v-list-item-group v-model="selectedLink" class="white--text" dark>
            <v-list-item v-for="link in links" :key="link.route" router :to="link.route">
                <v-list-item-icon>
                    <v-icon>{{ link.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>
                        {{ link.text }}
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: true,
      links: [
        {
          icon: "mdi-view-dashboard",
          text: "Dashboard",
          route: "/",
        },
        {
          icon: "mdi-folder",
          text: "My Project",
          route: "/project",
        },
        {
          icon: "mdi-account-group-outline",
          text: "Team",
          route: "/team",
        },
      ],
      selectedLink: 0,
    };
  },
};
</script>