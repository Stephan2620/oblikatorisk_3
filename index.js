Vue.createApp({

    data() {

        return {

            
            word:null,
            message:null,
            words: [] 
        }

    },

    methods: {


        save(word) { 
    
            var bruh = word.toUpperCase()
            var bruh2 = word.toLowerCase()
            this.words.push(word)
            this.words.push(bruh2)
            this.words.push(bruh)
            


        },
        show() { 


            this.message = this.words 
            

        },
        clear() { 
            this.words = []
            this.message = null
            
        },

    }

}).mount("#app")