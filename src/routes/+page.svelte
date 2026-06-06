<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import TaskList from "$lib/components/Tasklist.svelte";
    let { data } = $props();

    const today = new Date().toISOString().split("T")[0];

    const todayTodos = data.tasks.filter(
        (task) => task.typ === "To-Do" && task.datum === today,
    );

    let moduleFilter = $state("favorites");

    let filteredModules = $derived.by(() => {
        if (moduleFilter === "favorites") {
            return data.modules.filter((module) => module.favorit);
        }

        return data.modules;
    });
</script>

<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-8 p-5">
            <h1 class="fw-bold mb-4">Heutige To-Dos</h1>
            <TaskList
                tasks={todayTodos}
                modules={data.modules}
                typ="To-Do"
                showCheckboxes={true}
                showTitle={false}
                showDate={false}
                showFilter={false}
            />

            <h1 class="fw-bold mb-4">Lernfortschritt</h1>
            <div class="mb-4 d-flex gap-2">
                <button
                    class="btn-sm filter-btn"
                    class:active={moduleFilter === "favorites"}
                    onclick={() => (moduleFilter = "favorites")}
                >
                    Favoriten
                </button>

                <button
                    class="btn-sm filter-btn"
                    class:active={moduleFilter === "all"}
                    onclick={() => (moduleFilter = "all")}
                >
                    Alle
                </button>
            </div>
            {#if filteredModules.length === 0}
                <p class="text-muted">Keine Favoriten vorhanden.</p>
            {:else}
                {#each filteredModules as module}
                    <ModuleCard {module} />
                {/each}
            {/if}
        </div>

        <div class="col-12 col-lg-4 p-5 sidebar">
            <TaskList tasks={data.tasks} modules={data.modules} typ="Termin" />
            <div class="mt-5 pt-5">
                <TaskList
                    tasks={data.tasks}
                    modules={data.modules}
                    typ="Prüfungstermin"
                />
            </div>
        </div>
    </div>
</div>
