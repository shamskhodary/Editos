import getDocumentsQuery from '../database/queries/getDocumentsQuery.js';


const getDocumentsCont = async (req, res) => {
    try {
        const getDocuments = await getDocumentsQuery()
        res.status(200).json(getDocuments.rows)
    } catch (err) {
        res.status(500 || err.status).json({ message: 'Server error' || err.message })
    }

}

export default getDocumentsCont;