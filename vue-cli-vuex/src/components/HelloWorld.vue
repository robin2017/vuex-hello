<template>

    <div id="app">
        <p>{{ count1 }}</p>
        <p>ff{{double1}}</p>
        <p>
            <button @click="increment">+</button>
            <button @click="decrement">-</button>
        </p>

    </div>
</template>

<script>
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        computed: {
            //state的映射为函数映射
            ...mapState({
                count1: (state)=>state.count
            }),
            //getter的映射为变量映射
            ...mapGetters({
                double1: 'double'
            })
        },
        methods: {
            ...mapMutations({
                decrement1: 'decrement'
            }),
            ...mapActions([
                'incrementSync',
                'incrementAsync'
            ]),
            increment () {
                //1、mutations方式改变状态
                //this.$store.commit('increment', {amount: 1})
                //2、action同步方式改变状态
                //this.$store.dispatch('incrementSync')
                //3、action异步方式改变状态
                //this.$store.dispatch('incrementAsync')
                //4、action组合-回调(外层必须是action且返回promise，内层随意)
//                this.$store.dispatch('actionA2Add').then(()=> {
//                    //4.1、mutation同步(随意)
//                    //this.$store.commit('decrement1');
//                    //4.2、action异步(随意)
//                    this.$store.dispatch('decrementAsync');
//                })
                //action组合-同步化（只需要调用后者，不需要调用前者）
                this.$store.dispatch('actionB')
            },
            decrement () {
                // this.$store.commit('decrement', {amount: 2})
                this.decrement1({amount: 2})
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
