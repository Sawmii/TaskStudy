import db from "$lib/db.js"

export const actions = {
    create: async ( {request} ) => {
        console.log("create")
        const data = await request.formData()

        let module = {
            name: data.get("name"),
            abkuerzung: data.get("abkuerzung"),
            dozent: data.get("dozent")
        }
        
        await db.createModule(module)
    }
}