import db from "$lib/db.js"

export async function load() {
    return {
        modules: await db.getModules(),
        tasks: await db.getTasks()
    };
}