export default {
    setLang(context, lang) {
        localStorage.setItem('lang', lang)

        context.commit('setLang', lang);
    },
    tryToGetLang(context) {
        const lang = localStorage.getItem('lang');

        if (lang) {
            context.commit('setLang', lang);
        }
    }
};