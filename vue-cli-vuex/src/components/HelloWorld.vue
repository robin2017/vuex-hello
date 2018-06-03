<template>

    <div id="app">
        <p>{{ count }}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
//        computed: {
//            count () {
//                //获取状态从store.state
//                return this.$store.state.count
//            }
//        },
        computed: mapState({
            count: state => state.count,
        }),
        methods: {
            increment () {
                //改变状态commit给store.mutations
                this.$store.commit('increment')
            },
            decrement () {
                this.$store.commit('decrement')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
