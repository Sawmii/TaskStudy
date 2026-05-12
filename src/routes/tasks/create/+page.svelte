<script>
    import "../../styles.css"
    let { data, form } = $props();
</script>

<div class="container-fluid p-4">
    <h1>Neuer Termin</h1>
    <form method="POST" action="?/create">
        <div class="mb-3">
            <label for="" class="form-label">Kategorie</label>
            <select name="kategorie" class="form-select" required>
                <option value="">Bitte auswählen</option>
                <option value="To-Do">To-Do</option>
                <option value="Termin">Termin</option>
                <option value="Prüfungstermin">Prüfungstermin</option>
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Modul</label>
            <select name="modul" class="form-select" required>
                <option value="">Bitte auswählen</option>

                {#each data.modules as module}
                    <option value={module._id}>
                        {module.abkuerzung} - {module.name}
                    </option>
                {/each}
            </select>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Titel</label>
            <input name="titel" class="form-control" type="text" required/>
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Datum</label>
            <input name="datum" class="form-control" type="date" required/>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <a href="/tasks" class="btn btn-secondary">Abbrechen</a>
            <button type="submit" class="btn">Termin erstellen</button>
        </div>
        
    </form>
</div>

{#if form?.success}
    <p>Termin erstellt</p>
{/if}
