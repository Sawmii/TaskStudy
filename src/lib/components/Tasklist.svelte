<script>
    let { tasks = [], typ, modules, showCheckboxes = false } = $props();

    // Nach Kategorie filtern
    let filteredTasks = tasks.filter((task) => task.typ === typ);

    // Nach Datum sortieren
    filteredTasks.sort((a, b) => new Date(a.datum) - new Date(b.datum));

    // Nach Datum gruppieren
    let groupedTasks = {};

    filteredTasks.forEach((task) => {
        const date = task.datum;

        if (!groupedTasks[date]) {
            groupedTasks[date] = [];
        }

        groupedTasks[date].push(task);
    });
</script>

<div class="task-list">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h1 class="fw-bold m-0">{typ}</h1>
        <a
            href="/tasks/create"
            class="btn add-btn btn-outline-dark d-flex align-items-center justify-content-center"
            ><img src="../images/add.svg" alt=""></a
        >
    </div>

    {#each Object.entries(groupedTasks) as [date, tasksForDate]}
        <div class="mb-4">
            <h4 class="mb-2 fw-light">
                {new Date(date).toLocaleDateString("de-CH")}
            </h4>

            {#each tasksForDate as task}
                <div class="d-flex align-items-center mb-2 task-item ps-3">
                    {#if showCheckboxes}
                        <input class="form-check-input me-4" type="checkbox" />
                    {:else}
                        <span class="me-3">•</span>
                    {/if}

                    <span class="fs-5">
                        {modules.find((m) => m._id === task.modulID)
                            .abkuerzung}: {task.name}
                    </span>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .add-btn {
        width: 32px; 
        height: 32px; 
        min-width: auto; 
        padding: 0 !important; 
        border-radius: 8px; 
        display: flex; 
        align-items: center; 
        justify-content: center; 
        flex-shrink: 0; 
        font-size: 2.2rem; 
        line-height: 1;
    }

    .add-btn:hover {
        background-color: #8fbfc2;
    }
</style>
