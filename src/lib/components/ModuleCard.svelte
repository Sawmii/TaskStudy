<script>
    let { module } = $props();
</script>

<a href={"/modules/" + module._id} class="module-link">
    <div class="module-card">
        <div class="module-info">
            <div class="module-title">
                {module.abkuerzung} - {module.name}
            </div>
            <div class="module-teacher">
                {module.dozent}
            </div>
        </div>
    </div>
</a>

<style>
    .module-link {
        display: block;
        text-decoration: none;
        color: inherit;
    }

    .module-link:hover,
    .module-link:focus,
    .module-link:active,
    .module-link:visited {
        text-decoration: none;
        color: inherit;
    }

    .module-card {
        background-color: white;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 1.3rem 3.5rem;
        margin-bottom: 4px;
        min-height: 108px;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }

    .module-card:hover {
        background-color: #fafafa;
    }

    .module-info {
        display: flex;
        flex-direction: column;
        gap: 0.6rem;
    }

    .module-title {
        font-size: 1.25rem;
        color: #111;
        font-weight: 400;
    }

    .module-teacher {
        font-size: 0.95rem;
        color: #8a8a8a;
    }
</style>
