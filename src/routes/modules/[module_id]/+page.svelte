<script>
    let { data } = $props();
    import "../../styles.css";
</script>

<div class="container-fluid page p-4">
    <h1 class="fw-bold">{data.module.abkuerzung} - {data.module.name}</h1>
    <div class="fs-5 text-muted">{data.module.dozent}</div>

    <div class="row mt-5">
        <div class="col-12 col-lg-6 mb-5">
            <h3 class="fw-bold mb-3">Lernziele</h3>

            {#each data.module.lernziele as lernziel}
                <div class="d-flex align-items-center mb-3">
                    <input class="form-check-input me-4" type="checkbox" />
                    <span class="fs-5">{lernziel}</span>
                </div>
            {/each}
        </div>

        <div class="col-12 col-lg-6">
            <h3 class="fw-bold mb-3">To-Dos</h3>

            <div class="d-flex align-items-center mb-3">
                <input class="form-check-input me-4" type="checkbox" />
                <span class="fs-5">
                    Strategisches Management Test abgeben
                </span>
            </div>

            <div class="d-flex align-items-center mb-3">
                <input class="form-check-input me-4" type="checkbox" />
                <span class="fs-5">
                    Strategisches Management Wissenschaftliche Arbeit beginnen
                </span>
            </div>
        </div>
    </div>
</div>
