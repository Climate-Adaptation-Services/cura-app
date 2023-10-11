<script>
    import {datalaag} from "$lib/stores.js";

    const options = ['Seasonal average temperature', 'Maximum temperature', 'Maximum rainfall in 24h', 'Sea level rise', 'Storms and tropical cyclones', 'Storm surges']

</script>

<section>  
    <h2>Choose a theme:</h2>
    {#each options as option}
        <label class='keuzes'>
            <input
                type="radio"
                name="laag"
                value={option}
                bind:group={$datalaag}
            />
            {option}
        </label>
    {/each}
</section>

<style>
    .keuzes{
        margin-top:1vh;
        font-size: 2vh;
    }   
  
    h2{
	font-size: 2.6vh;
}

</style>
  