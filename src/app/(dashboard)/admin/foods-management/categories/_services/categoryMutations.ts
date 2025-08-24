"use server";
import db from "@/lib/db"
import { executeAction } from "@/lib/executeAction"

export const deleteCategory = async(id:number) => {
	await executeAction({
		actionFn: () => db.category.delete({ where: { id } }),
	})
}