<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import "../styles.css";

    let { data } = $props();

    let filter = $state("favorites");

    let filteredModules = $derived.by(() => {
        if (filter === "favorites") {
            return data.modules.filter((module) => module.favorit);
        }

        return data.modules;
    });
</script>

<div class="container-fluid p-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h1 class="fw-bold">Module</h1>
        <a href="/modules/create" class="btn">Neues Modul</a>
    </div>

    <div class="mb-4 d-flex gap-2">
        <button
            class="btn-sm filter-btn"
            class:active={filter === "favorites"}
            onclick={() => (filter = "favorites")}
        >
            Favoriten
        </button>

        <button
            class="btn-sm filter-btn"
            class:active={filter === "all"}
            onclick={() => (filter = "all")}
        >
            Alle
        </button>
    </div>

    {#if filteredModules.length === 0}
        <p class="text-muted">
            {#if filter === "favorites"}
                Keine Favoriten vorhanden.
            {:else}
                Keine Module vorhanden.
            {/if}
        </p>
    {:else}
        <div class="d-flex flex-column">
            {#each filteredModules as module}
                <ModuleCard {module} />
            {/each}
        </div>
    {/if}
</div>
