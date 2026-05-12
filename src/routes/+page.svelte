<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    let { data } = $props();
</script>

<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-md-8 p-5">
            <h1 class="fw-bold mb-4">Heutige To-Dos</h1>
            <h1 class="fw-bold mb-4">Lernfortschritt</h1>
            {#each data.modules as module}
                <ModuleCard {module}/>
            {/each}
        </div>
        <div class="col-12 col-md-4 p-5" style="background-color: #ebebef; min-height: calc(100vh - 94px);">
            
        </div>
    </div>
</div>
