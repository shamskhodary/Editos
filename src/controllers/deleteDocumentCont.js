import deleteDocumentQuery from '../database/queries/deleteDocumentQuery.js'

const deleteDocumentCont = async (req, res) => {
    try {
        const { id } = req.params
        const deleteDocument = await deleteDocumentQuery(id)
        res.status(200).json({ message: 'Document deleted successfully' })
    } catch (err) {
        res.status(500 || err.status).json({ message: 'Server error' || err.message })
    }

}


export default deleteDocumentCont;