<script>
    let { module } = $props();

    function getProgress() {
        if (!module.lernziele || module.lernziele.length === 0) return 100;
        const fertigCount = module.lernziele.filter((lz) => lz.fertig).length;
        return Math.round((fertigCount / module.lernziele.length) * 100);
    }

    function getColor() {
        const progress = getProgress();

        if (progress >= 90) return "#04D048";
        if (progress >= 50) return "#FFCB06";
        return "#FB1621";
    }

    function getTint() {
        return getColor() + "1A";
    }
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
            style="background: conic-gradient({getColor()} {getProgress()}%, {getTint()} 0deg);"
        >
            <div class="progress-progress-content">
                {getProgress()}%
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
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        transition: all 0.2s ease;
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

    .module-progress {
        width: 75px;
        height: 75px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }

    .progress-progress-content {
        width: 65px;
        height: 65px;
        background-color: white;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.1rem;
    }
</style>
