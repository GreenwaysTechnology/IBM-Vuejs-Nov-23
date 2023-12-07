export default {
    install(app, options) {
        //application object reference inside plugin as firt arg
        app.config.globalProperties.$uppercase = key => {
            return key.toUpperCase()
        }
    }
}