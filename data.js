const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            title: 'ciao Padrone sono qua per servirti ed onorarti, ecco a te le randoMail richieste ma se apri la console le troverai anche li',
            list: [],
        };
    },

    methods() { },
    created() {

        for (let i = 0; i < 12; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((response) => {
                console.table(response.data.response);
                this.list.push(response.data.response);

            });
        }
    }

});

app.mount('#app');



