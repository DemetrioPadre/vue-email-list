const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'ciao Padrone sono qua per servirti ed onorarti',
        };
    },

    methods: {},

    mounted() { },
});

app.mount('#app');

for (let i = 0; i < 10; i++) {
    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
        const randomEmail = response.data.response;
        console.table(randomEmail);
    });
}


