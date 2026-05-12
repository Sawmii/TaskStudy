import db from "$lib/db.js"

export async function load( {params} ) { 
    return {
        module: await db.getModule(params.module_id)
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
    }
};