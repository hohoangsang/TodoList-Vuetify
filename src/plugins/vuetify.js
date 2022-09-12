import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    breakpoint: {
        scrollBarWidth: 24,
    },
    iconfont: "md",
    theme: {
        themes: {
            light: {
                primary: "#600080"
            },
            dark: {
            }
        }
    }
});
