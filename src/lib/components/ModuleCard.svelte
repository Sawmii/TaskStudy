<script>
    let { module } = $props();

    let progress = $derived.by(() => {
        if (!module.lernziele || module.lernziele.length === 0) return 100;
        const fertigCount = module.lernziele.filter((lz) => lz.fertig).length;
        return Math.round((fertigCount / module.lernziele.length) * 100);
    });

    let color = $derived(
        progress >= 90 ? "#04D048" : progress >= 50 ? "#FFCB06" : "#FB1621",
    );
    let tint = $derived(color + "1A");
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

        <div
                class="module-progress"
                style="background: conic-gradient({color} {progress}%, {tint} 0deg);"
            >
                <div class="progress-progress-content">
                    {progress}%
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
