import db from "$lib/db.js";
import { redirect } from '@sveltejs/kit';

export const actions = {
    create: async ( {request} ) => {
        console.log("create")
        const data = await request.formData()

        const lernzieleArray = data.getAll("lernziele")
        const lernziele = lernzieleArray
            .map(value => ({
                name: value,
                fertig: false
            }));

        let module = {
            name: data.get("name"),
            abkuerzung: data.get("abkuerzung"),
            dozent: data.get("dozent"),
            lernziele,
            favorit: false
        }

        console.log(module)

        await db.createModule(module)
        throw redirect(303, "/modules");
    }
};

