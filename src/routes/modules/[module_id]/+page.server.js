import db from "$lib/db.js"

export async function load({ params }) {
    return {
        module: await db.getModule(params.module_id),
        tasks: await db.getTasks(),
        modules: await db.getModules()
    }
}

export const actions = {
    toggleLernziel: async ({ request, params }) => {
        const data = await request.formData();
        const index = parseInt(data.get("index"));
        const fertig = data.get("fertig") === "true";

        const module = await db.getModule(params.module_id);
        if (module?.lernziele?.[index]) {
            module.lernziele[index].fertig = fertig;
            await db.updateModule(module);
        }
    },
    create: async ({ request, params }) => {
        console.log("create")
        const data = await request.formData()
        const name = data.get("learninggoal")
        console.log(name)
        const module_id = params.module_id

        await db.addLearningGoal(name, module_id)
    },
    toggleTask: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        const fertig = data.get("fertig") === "true";
        await db.updateTask(id, { fertig: fertig });
    }
};