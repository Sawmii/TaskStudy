<script>
    let {
        label,
        name,
        items = $bindable([])
    } = $props();

    function addItem() {
        items.push("");
    }

    function removeItem(index) {
        items.splice(index, 1);
    }
</script>

<div class="mb-4">
    <div class="d-flex justify-content-between gap-4 align-items-center mb-3">
        {#if label}
            {label}
        {/if}
        <button type="button" class="btn btn-secondary" onclick={addItem}>Hinzufügen</button>
    </div>

    {#each items as item, i}
        <div class="d-flex align-items-center mb-2">
            <input
                {name}
                bind:value={items[i]}
                class="form-control me-2 fs-5"
                type="text"
            />
            <button
                type="button"
                class="btn d-flex align-items-center justify-content-center"
                style="width: 38px; height: 38px; min-width: auto; padding: 0; line-height: 0; font-size: 1.8rem; flex-shrink: 0; border-radius: 8px;"
                onclick={() => removeItem(i)}
            >
                <span style="margin-top: -5px;">&times;</span>
            </button>
        </div>
    {/each}
</div>
