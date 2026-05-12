<script>
    import { moduleRunnerTransform } from "vite";

    let { tasks = [], typ, modules, showCheckboxes = false } = $props();

    // Nach Kategorie filtern
    let filteredTasks = tasks.filter(
        (task) => task.typ === typ
    );

    // Nach Datum sortieren
    filteredTasks.sort(
        (a, b) => new Date(a.datum) - new Date(b.datum)
    );

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
        <a href="/tasks/create" class="btn add-btn">+</a>
    </div>

    {#each Object.entries(groupedTasks) as [date, tasksForDate]}
        <div class="mb-4">
            <h4 class="mb-2">
                {new Date(date).toLocaleDateString("de-CH")}
            </h4>

            {#each tasksForDate as task}
                <div class="d-flex align-items-center mb-2 task-item">
                    {#if showCheckboxes}
                        <input class="form-check-input me-4" type="checkbox" />
                    {:else}    
                        <span class="me-3">•</span>
                    {/if}

                    <span class="fs-5">
                        {modules.find((m)=> m._id === task.modulId).abkuerzung}: {task.titel}
                    </span>
                </div>
            {/each}
        </div>
    {/each}
</div>

<style>
    .add-btn {
        background-color: #a9cfd1;
        color: #555;
        font-size: 2rem;
        font-weight: bold;
        line-height: 1;
        padding: 0 0.45rem;
        border-radius: 5px;
        border: none;
    }

    .add-btn:hover {
        background-color: #8fbfc2;
    }
</style>