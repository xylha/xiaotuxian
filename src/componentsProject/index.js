import XtuImageView from './imageView/index.vue'
import XtuSku from './XtxSku/index.vue'

export const componentPlugins = {
    install(app) {
        app.component('XtuImageView', XtuImageView)
        app.component('XtuSku', XtuSku)
    }
}
