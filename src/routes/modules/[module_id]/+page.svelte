<script>
    let { data } = $props();
    import "../../styles.css";
</script>

<div class="container-fluid p-4">
    <h1 class="fw-bold">{data.module.abkuerzung} - {data.module.name}</h1>
    <div class="fs-5 text-muted">{data.module.dozent}</div>

    <div class="row mt-5">
        <div class="col-12 col-lg-6 mb-5">
            <h3 class="fw-bold mb-3">Lernziele</h3>

            <div>
                {#each data.module.lernziele as lernziel, i}
                    <div class="d-flex align-items-center mb-3">
                        <form method="POST" action="?/toggleLernziel">
                            <input type="hidden" name="index" value={i} />
                            <input
                                type="hidden"
                                name="fertig"
                                value={!lernziel.fertig}
                            />
                            <input
                                class="form-check-input me-4"
                                type="checkbox"
                                checked={lernziel.fertig}
                                onchange={(e) => e.target.form.requestSubmit()}
                            />
                        </form>
                        <span class="fs-5">
                            {lernziel.name}
                        </span>
                    </div>
                {/each}
            </div>
            <form method="POST" action="?/create">
                <div class="mb-3">
                    <label for="" class="form-label">Lernziel</label>
                    <input name="learninggoal" class="form-control" type="text" />
                </div>
                <button type="submit" class="btn">Lernziel hinzufügen</button>
            </form>
        </div>

        <div class="col-12 col-lg-6">
            <h3 class="fw-bold mb-3">To-Dos</h3>

            {#each data.tasks as task}
                <div class="d-flex align-items-center mb-3">
                    <form method="POST" action="?/toggleTask">
                        <input type="hidden" name="id" value={task._id} />
                        <input
                            type="hidden"
                            name="fertig"
                            value={!task.fertig}
                        />
                        <input
                            class="form-check-input me-4"
                            type="checkbox"
                            checked={task.fertig}
                            onchange={(e) => e.target.form.requestSubmit()}
                        />
                    </form>
                    <span class="fs-5">
                        {task.name}
                    </span>
                </div>
            {/each}

        </div>
    </div>
</div>
