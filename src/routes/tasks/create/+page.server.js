import db from "$lib/db.js";

export async function load() {
    return {
        modules: await db.getModules()
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();

        let task = {
            name: data.get("titel"),
            modulID: data.get("modul"),
            typ: data.get("kategorie"),  
            datum: data.get("datum"),
            fertig: false
        };

        await db.createTask(task);

        return { success: true };
    }
};