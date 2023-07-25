import getDocumentQuery from "../database/queries/getDocumentQuery.js";
import htmlPdf from "html-pdf";

const saveAsPDFCont = async (req, res) => {
  const { id } = req.params;

  const { rows } = await getDocumentQuery(id);

  const options = {
    format: "Letter",
    orientation: "portrait",
    border: {
      top: "1cm",
      right: "1cm",
      bottom: "1cm",
      left: "1cm",
    },
    type: "pdf",
  };

  htmlPdf
    .create(
      rows[0].all_contents ? rows[0].all_contents : "<div></div>",
      options
    )
    .toStream((err, stream) => {
      if (err) {
        res.status(500).send("Error generating PDF");
      } else {
        res.setHeader("Content-Type", "application/pdf");
        res.setHeader(
          "Content-Disposition",
          `attachment; filename=${rows[0].title}.pdf`
        );
        stream.pipe(res);
      }
    });
};

export default saveAsPDFCont;
