<script>
    import ModuleCard from "$lib/components/ModuleCard.svelte";
    import TaskList from "$lib/components/Tasklist.svelte";
    let { data } = $props();
</script>

<div class="container-fluid">
    <div class="row">
        <div class="col-12 col-lg-8 p-5">
            <h1 class="fw-bold mb-4">Heutige To-Dos</h1>



            <h1 class="fw-bold mb-4">Lernfortschritt</h1>
            {#each data.modules as module}
                <ModuleCard {module}/>
            {/each}
        </div>

        <div class="col-12 col-lg-4 p-5 sidebar">
            <TaskList
                tasks={data.tasks}
                modules={data.modules}
                typ="Termin"
            />
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
