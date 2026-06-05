import db from "$lib/db.js"

export async function load() {
    return {
        tasks: await db.getTasks(),
        modules: await db.getModules()
    };
}

export const actions = {
    toggleTask: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        const fertig = data.get("fertig") === "true";
        await db.updateTask(id, { fertig: fertig });
    },
    deleteTask: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        await db.deleteTask(id);
    }
};