<script>
    import { enhance } from "$app/forms";

    let {
        tasks = [],
        typ,
        modules,
        showCheckboxes = false,
        showTitle = true,
        showDate = true,
        showFilter = true,
    } = $props();

    // Todos filtern
    let filter = $state(typ === "To-Do" ? "open" : "upcoming");

    // Nach Kategorie filtern
    let filteredTasks = $derived.by(() => {
        const today = new Date().toISOString().split("T")[0];

        let result = tasks.filter((task) => task.typ === typ);

        if (typ === "To-Do") {
            if (filter === "open") {
                result = result.filter((task) => !task.fertig);
            } else if (filter === "done") {
                result = result.filter((task) => task.fertig);
            }
        } else {
            if (filter === "upcoming") {
                result = result.filter((task) => task.datum >= today);
            } else if (filter === "past") {
                result = result.filter((task) => task.datum < today);
            }
        }

        return result.sort((a, b) => new Date(a.datum) - new Date(b.datum));
    });

    // Nach Datum gruppieren
    let groupedTasks = $derived.by(() => {
        const groups = {};

        filteredTasks.forEach((task) => {
            const date = task.datum;

            if (!groups[date]) {
                groups[date] = [];
            }

            groups[date].push(task);
        });

        return groups;
    });
</script>

<div class="task-list">
    {#if showTitle}
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h1 class="fw-bold m-0">{typ}</h1>
            <a
                href="/tasks/create"
                class="btn add-btn btn-outline-dark d-flex align-items-center justify-content-center"
                ><img src="../images/add.svg" alt="" /></a
            >
        </div>
    {/if}

    {#if showFilter}
        <div class="mb-3 d-flex gap-2">
            {#if typ === "To-Do"}
                <button
                    class="btn-sm filter-btn"
                    class:active={filter === "open"}
                    onclick={() => (filter = "open")}>Offene</button
                >
                <button
                    class="btn-sm filter-btn"
                    class:active={filter === "done"}
                    onclick={() => (filter = "done")}>Abgeschlossene</button
                >
                <button
                    class="btn-sm filter-btn"
                    class:active={filter === "all"}
                    onclick={() => (filter = "all")}>Alle</button
                >
            {:else}
                <button
                    class="btn-sm filter-btn"
                    class:active={filter === "upcoming"}
                    onclick={() => (filter = "upcoming")}>Anstehende</button>

                <button
                    class="btn-sm filter-btn"
                    class:active={filter === "past"}
                    onclick={() => (filter = "past")}>Vergangene</button>

                <button
                    class="btn-sm filter-btn"
                    class:active={filter === "all"}
                    onclick={() => (filter = "all")}>Alle</button>
            {/if}
        </div>
    {/if}

    {#each Object.entries(groupedTasks) as [date, tasksForDate]}
        <div class="mb-4">
            {#if showDate}
                <h4 class="mb-2 fw-light">
                    {new Date(date).toLocaleDateString("de-CH")}
                </h4>
            {/if}

            {#each tasksForDate as task}
                <div class="d-flex align-items-center mb-2 task-item ps-3">
                    {#if showCheckboxes}
                        <form method="POST" action="?/toggleTask" use:enhance>
                            <input type="hidden" name="id" value={task._id} />
                            <input type="hidden" name="fertig" value={!task.fertig}/>

                            <input
                                class="form-check-input me-4"
                                type="checkbox"
                                checked={task.fertig}
                                onchange={(e) => e.target.form.requestSubmit()}
                            />
                        </form>
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

    .filter-btn {
        border: 1px solid #8fbfc2;
        background-color: white;
        color: #333;
        border-radius: 8px;
        padding: 0.35rem;
        font-size: 0.85rem;
        font-weight: 500;
        width: 120px;
        max-width: 120px;
        transition: all 0.2s ease;
    }

    .filter-btn:hover {
        background-color: #8fbfc2;
        color: white;
        border-color: #8fbfc2;
    }

    .filter-btn.active {
        background-color: #8fbfc2;
        color: white;
        border-color: #8fbfc2;
        box-shadow: 0 2px 8px rgba(143, 191, 194, 0.3);
    }
</style>
