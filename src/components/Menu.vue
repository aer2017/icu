<template>
    <div class="language-menu">
        <div @click="handleToOpen" class="current-language">
          {{ currentLanguage }}
        </div>
        <ul v-if="menuShow" class="other-languages">
            <!-- <li v-for="(item,index) in otherLanguages" :key="index">{{ item.text }}</li> -->
            <router-link :to=" '/' + item.name " tag="li" v-for="(item,index) in otherLanguages" :key="index">{{ item.text }}</router-link>
        </ul>
    </div>
</template>

<script>
export default {
    name : 'Menu',
    data(){
        return {
            menuShow : false,
            languages : [
                { name : 'zh_CN' , text : '简体中文' },
                { name : 'en_US' , text : 'English' },
                { name : 'ja_JP' , text : '日本語' },
                { name : 'fr_FR' , text : 'Français' }
            ]
        }
    },
    methods : {
        handleToOpen(){
            this.menuShow = true;
            console.log(this.$router)
        }
    },
    mounted(){
        //console.log( this.$router );
    },
    computed : {
        currentLanguage(){
            return this.languages.filter((item)=> item.name === this.$router.history.current.name )[0].text || '';
        },
        otherLanguages(){
            return this.languages.filter((item)=> item.name !== this.$router.history.current.name );
        }
    }
}
</script>

<style scoped>
   .language-menu{
       position: absolute;
       top: 15px;
       right: 10px;
       min-width: 80px;
       cursor: pointer;
       background-color: #de335e;
       padding: 0 4px;
   } 
   .other-languages{
       margin: 5px 0;
   }
   .other-languages li{
       padding: 3px 0;
   }
</style>
