import axios from "axios";

export async function getAllCategories() {
    try {
        const { data: categories } = await axios.get("/api/categories");
        return categories;
    } catch (err) {
        console.error(err);
    }
}
