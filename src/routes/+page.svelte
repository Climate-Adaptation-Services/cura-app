<script>
  	import Sidepanel from "$lib/components/Sidepanel.svelte"
	import { datalaag } from "$lib/stores.js";
	export let data

	
	$: imageLink = $datalaag === 'Seasonal average temperature' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Seasonal%20average%20temperature.PNG":
     $datalaag === 'Maximum temperature' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Maximum%20temperature.PNG":
     $datalaag === 'Maximum rainfall in 24h' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Maximum%20rainfall%20in%2024h.PNG":
     $datalaag === 'Sea level rise' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Sea%20level%20rise.PNG":
	 $datalaag === 'Storms and tropical cyclones' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Storms%20and%20tropical%20cyclones.PNG":
     $datalaag === 'Storm surges' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics/Storm%20surges.PNG":
    'no image';

</script>

<div class='App'>
	<div class='sidepanel'>
		<Sidepanel/>
	</div>
	<div class='main_panel'>
		
		<div class='infographic-container'>
			<img class = infographic src= {imageLink}>
		</div>
	</div>
</div>

<style>

	

	.App{
		width:100%;
		height:100%;
		background: whitesmoke;
		display:flex;
	}

	.sidepanel{
		display:flex;
		flex-direction:column;
		padding-left:2vw;
		padding-right:4vw;
		padding-top:25vh;
		
	}

	.main_panel{
		flex:2;
		display:flex;
		flex-direction:column;	
		height:100%;	
	}

	.infographic-container{
		margin: 0 0;
  		height: 100%;
  		width: 100%;
  		position: relative;
		}

	.infographic{
		max-height: 100%;
  		
  		position: absolute;
 		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
	}

	

</style>
