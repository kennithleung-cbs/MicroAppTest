<script>
    let gold = 0;

    const increment = () => {
        gold += 1;
    };
</script>

<div class="container">
    <div class="title">Mining in Svelte</div>
    <div>Gold: {gold}</div>
    <div><button class="button primary" on:click={increment}>Mining</button></div>
</div>

<style>
    .container .title {
        font-size: 5rem;
    }
</style>
