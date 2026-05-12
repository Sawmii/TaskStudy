<script>
    import DynamicList from "$lib/components/DynamicList.svelte";
    import "../../styles.css"
    let { form } = $props();
    let lernziele = $state([]);
</script>

<div class="container-fluid p-4">
    <h1>Neues Modul</h1>
    <form method="POST" action="?/create">
        <div class="mb-3">
            <label for="" class="form-label">Titel</label>
            <input name="name" class="form-control" type="text" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Abkürzung</label>
            <input name="abkuerzung" class="form-control" type="text" />
        </div>
        <div class="mb-3">
            <label for="" class="form-label">Dozent</label>
            <input name="dozent" class="form-control" type="text" />
        </div>
        <DynamicList name="lernziele" bind:items={lernziele}/>
        <div class="d-flex justify-content-between align-items-center">
            <a href="/modules" class="btn btn-secondary">Abbrechen</a>
            <button type="submit" class="btn">Modul erstellen</button>
        </div>
        
    </form>
</div>

{#if form?.success}
    <p>Modul erstellt</p>
{/if}
