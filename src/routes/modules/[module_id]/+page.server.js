import db from "$lib/db.js"

export async function load( {params} ) { 
    return {
        module: await db.getModule(params.module_id)
    }
}