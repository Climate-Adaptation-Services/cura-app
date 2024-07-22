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
    
    <p class = 'source'>Source: <a href={"http://curports.com/wp-content/uploads/2023/01/Climate-Risk-Assessment-Curacao-Ports-Authority-Roadmap-report_091222.pdf"} target="_blank">CPA report</a></p>
    
  
    
</section>

<style>
    .keuzes{
        margin-top:1vh;
        margin-left:1rem;
        font-size: 2vh;
    }   
  
    h2{
        font-size: 2.4vh;
        margin-left:1rem;
        margin-top: 4rem;
    }

    .source{
        margin-left:1rem;
        font-size: 2vh;
    }

</style>
  