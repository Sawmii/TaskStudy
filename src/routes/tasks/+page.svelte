<script>
    import "../styles.css";
    import TaskList from "$lib/components/Tasklist.svelte";

    let { data } = $props();
</script>

<div class="container-fluid page p-4">
    <div class="row">
        <div class="col-12 col-lg-5">
            <TaskList
                tasks={data.tasks}
                modules={data.modules}
                typ="Termin"
            />

            <div class="mt-5 pt-4">
                <TaskList
                    tasks={data.tasks}
                    modules={data.modules}
                    typ="Prüfungstermin"
                />
            </div>
        </div>

        <div class="col-12 col-lg-6 offset-lg-1 mt-5 mt-lg-0">
            <TaskList
                tasks={data.tasks}
                modules={data.modules}
                typ="To-Do"
                showCheckboxes={true}
            />
        </div>
    </div>
</div>