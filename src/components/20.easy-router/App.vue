<template>
    <h1>App根组件</h1>
    <a href="#/home">home</a>&nbsp;
    <a href="#/movie">movie</a> &nbsp;
    <a href="#/about">about</a>
    <hr>
    <component :is="comName"></component>
</template>

<script>
import Home from './Home.vue'
import Movie from './Movie.vue'
import About from './About.vue'
export default {
    name: 'MyApp',
    components: {
        Home,
        Movie,
        About
    },
    data() {
        return {
            comName: 'Home'
        }
    },
    created() {
        window.onhashchange = () => {
            // console.log(location.hash)
            switch(location.hash) {
                case '#/home':
                    this.comName = 'Home'
                    break;
                case '#/about':
                    this.comName = 'About'
                    break;
                case '#/movie':
                    this.comName = 'Movie'
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style lang="less" scoped>
    
</style>
