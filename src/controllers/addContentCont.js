import addContentQuery from "../database/queries/addContentQuery.js";

const addContentCont = async (req, res) => {
    try {
        const id = req.params.id;
        const { inner_content } = req.body;
        const { rows } = await addContentQuery(inner_content, id);
        res.status(201).json({ message: "Content added successfully", content: rows[0] });

    } catch (err) {
        console.log(err);
        res
            .status(500 || err.status)
            .json({ message: "Internal Server Error" || err.message });
    }
}


export default addContentCont;