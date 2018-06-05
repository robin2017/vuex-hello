<template>
    <div id="app">
        <p>{{ aVar }}</p>
        <p>{{bVar}}</p>
    </div>
</template>
<script>
    import {mapState} from 'vuex'
    import {moduleA, moduleB} from '../main'
    export default {
        data(){
            return {
                count1: 3
            }
        },
        computed: {
            ...mapState({
                //引用时在变量前面添加一个模块名
                aVar: (state)=>state.a.stateAvar,
                bVar: (state)=>state.b.stateBvar,
            })
        }
    }
</script>