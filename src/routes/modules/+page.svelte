<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import "../styles.css";

    let { data } = $props();
</script>

<div class="container-fluid page p-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="fw-bold">Module</h1>
        <a href="/modules/create" class="btn">Neues Modul</a>
    </div>

    <div class="d-flex flex-column">
        {#each data.modules as module}
            <ModuleCard {module} />
        {/each}
    </div>
</div>
