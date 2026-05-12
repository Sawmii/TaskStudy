import db from "$lib/db.js"

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
            lernziele
        }

        console.log(module)

        await db.createModule(module)
    }
}