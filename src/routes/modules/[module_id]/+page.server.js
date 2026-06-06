import db from "$lib/db.js";
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    return {
        module: await db.getModule(params.module_id),
        tasks: await db.getTasksByModule(params.module_id)
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
    createLearninggoal: async ({ request, params }) => {
        console.log("create")
        const data = await request.formData()
        const name = data.get("learninggoal")
        console.log(name)
        const module_id = params.module_id

        await db.addLearningGoal(name, module_id)
    },
    createTask: async ({ request, params }) => {
        console.log("create")
        const data = await request.formData()
        const name = data.get("task")
        const datum = data.get("datum")
        const modulID = params.module_id
        const task = {name, modulID, typ: "To-Do", datum, fertig: false}
        console.log(name)
        
        await db.createTask(task)
    },
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
    },
    deleteLearninggoal: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        const index = data.get("index");
        await db.deleteLearninggoal(id, index);
    },
    deleteModule: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        await db.deleteModule(id);
        throw redirect(303, '/modules');
    },
    toggleFavoriteModule: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        await db.toggleFavoriteModule(id);
    }
};