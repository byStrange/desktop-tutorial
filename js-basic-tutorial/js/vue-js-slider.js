const AnimationApp = {
	data(){
		return{
		
		}
	},

}
const animate = Vue.createApp(AnimationApp);

animate.mount('#animate');

// const App = {
// 	data(){
// 		return{
// 			title:'Task list',
// 			placeString:'Please write your task name...',
// 			task:'',
// 			tasks:[],
// 			num:0
// 		}
// 	},
// 	mounted(){

// 	},
// 	methods:{
// 		addTask(){
// 			if (this.task !== ''){
// 				this.tasks.push({
// 					title:this.task,
// 					done:false
// 				})
// 				this.task = ''
// 				console.log(this.tasks[0]['done'])
// 			}			
// 		},
// 		keyPress(event){
// 			if(event.key == 'Enter'){
// 				this.addTask()
// 			}
// 		},
// 		remove(index){
// 			this.tasks.splice(index,1)
// 		}
// 	},
// 	computed:{
// 		doubleCount(){
// 			return this.tasks.length * 2
// 		}
// 	}

// }

// Vue.createApp(App).mount('#app');

