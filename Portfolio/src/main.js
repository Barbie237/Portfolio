import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import translate from './translate';
import { createI18n } from 'vue-i18n';
// import { createPinia } from "pinia";

// import "./main.css";
// createApp(App).mount('#app')


// Vérifiez si la locale est déjà enregistrée dans le stockage local
const storedLocale = localStorage.getItem('locale');
// Utilisez la locale enregistrée ou utilisez la locale par défaut si aucune n'est enregistrée
const defaultLocale = 'en';
const initialLocale = storedLocale || defaultLocale;

const i18n = createI18n({
    legacy: false,
    locale: initialLocale,
    messages: translate
})
const app = createApp(App)

// app.use(createPinia());

app.use(i18n)
app.mount('#app')
//app.use('Pinia')

// Enregistrez la valeur de locale dans le stockage local lorsqu'elle est modifiée
i18n.global.watchI18nLocale = (locale) => {
    localStorage.setItem('locale', locale);
};