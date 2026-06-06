import db from "$lib/db.js";
import { redirect } from '@sveltejs/kit';

export async function load({url}) {
    return {
        modules: await db.getModules(),
        type: url.searchParams.get("type")
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
        throw redirect(303, "/tasks");
    }
};