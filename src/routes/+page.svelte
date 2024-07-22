<script>
  	import Sidepanel from "$lib/components/Sidepanel.svelte"
	import { datalaag } from "$lib/stores.js";
	export let data

	
	$: imageLink = $datalaag === 'Seasonal average temperature' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics_cura/Slide1.PNG":
     $datalaag === 'Maximum temperature' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics_cura/Slide2.PNG":
     $datalaag === 'Maximum rainfall in 24h' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics_cura/Slide3.PNG":
     $datalaag === 'Sea level rise' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics_cura/Slide4.PNG":
	 $datalaag === 'Storms and tropical cyclones' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics_cura/Slide5.PNG":
     $datalaag === 'Storm surges' ? "https://raw.githubusercontent.com/sophievanderhorst/data/main/infographics_cura/Slide6.PNG":
    'no image';

	$: backgroundColor = $datalaag === 'Seasonal average temperature' ? "#E6A079":
		$datalaag === 'Maximum temperature' ? "#E6A079":
		$datalaag === 'Maximum rainfall in 24h' ? "#67ABAB":
		$datalaag === 'Sea level rise' ? "#A1D2D2":
		$datalaag === 'Storms and tropical cyclones' ? "#A1D2D2":
		$datalaag === 'Storm surges' ? "#A1D2D2":
		'green';

</script>

<div class="App">
  
	<div class="content">
		<div class="sidepanel">
		  <header class="header">
			  <h1>Climate Change Curaçao</h1>
		  </header>
			<Sidepanel/>
		</div>
		<div class="main_panel" style="background: {backgroundColor}">
			<div class="infographic-container">
				<img class="infographic" src={imageLink} alt="Infographic">
			</div>
		</div>
	</div>
  </div>

<style>

.App {
	  width: 100%;
	  height: 100vh;
	  display: flex;
	  flex-direction: column;
  }

  .header {
	  background: #5A8A8A;
	  color: white;
	  top:-10%;
	  padding-top: 1rem;
	  padding-left: 1rem;
	  padding-bottom: 1rem;
	  width:100%;
	  text-align: left;
	  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  h1{
	margin: 0rem;
	font-size: 4vh;
	align-self: left;
  }

  .content {
	  display: flex;
	  flex: 1;
  }

  .sidepanel {
	  width: 30%;
	  background: #ecf0f1;
	  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }

  .main_panel {
	  flex: 1;
	  height:100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  transition: background 0.3s ease;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .infographic-container {
	  max-width: 100%;
	  max-height: 100%;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  
  }

  .infographic {
	  max-width: 100%;
	  max-height: 100%
  }	

	

	

</style>
