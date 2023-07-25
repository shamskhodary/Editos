import React, { useState, useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";
import { useParams } from "react-router-dom";
import "../styles/editor.css";
import toolbarOptions from "../helpers/formats";
import axios from "axios";

const TextEditor = ({setSaved}) => {
  const [content, setContent] = useState("");
  const wrapperRef = useRef(null);
  const editorRef = useRef(null);
  const { id } = useParams();

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.innerHTML = "";
      const editor = document.createElement("div");
      wrapperRef.current.append(editor);

      const fonts = [
        "Roboto",
        "Mirza",
        "Arial",
        "Courier",
        "Montserrat",
        "Monospace",
      ];

      const fontNames = fonts.map((font) => font);
      let fontStyles = "";

      fonts.forEach(function (font) {
        const fontName = font;
        fontStyles += `.ql-snow .ql-picker.ql-font .ql-picker-label[data-value=${fontName}]::before, .ql-snow .ql-picker.ql-font .ql-picker-item[data-value=${fontName}]::before {
          content: '${font}';
          font-family: '${font}', sans-serif;
        }
        .ql-font-${fontName} {
          font-family: '${font}', sans-serif;
        }`;
      });

      const styleNode = document.createElement("style");
      styleNode.innerHTML = fontStyles;
      document.body.appendChild(styleNode);

      var Font = Quill.import("formats/font");
      Font.whitelist = fontNames;
      Quill.register(Font, true);

      var icons = Quill.import("ui/icons");
      icons["do"] = {
        undo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="arrow-u-up-left"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" points="80 136 32 88 80 40"></polyline><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M80,200h88a56,56,0,0,0,56-56v-.00011A55.99988,55.99988,0,0,0,168.00011,88H32"></path></svg>`,
        redo: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" id="arrow-u-up-right"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" points="176 136 224 88 176 40"></polyline><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M176,200H88a56,56,0,0,1-56-56v-.00011A55.99988,55.99988,0,0,1,87.99989,88H224"></path></svg>`,
      };

      const quill = new Quill(editor, {
        theme: "snow",
        modules: {
          toolbar: {
            container: toolbarOptions,
            handlers: {
              "do": (event) => {
                if (event === "undo") {
                  quill.history.undo();
                } else if (event === "redo") {
                  quill.history.redo();
                }
              },
            },
          },
        },
      });
      editorRef.current = quill;
      quill.on("text-change", handleChange);
      const delta = quill.clipboard.convert(content);

      quill.setContents(delta);
    }
  }, [content]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/document/${id}`);
        setContent(data[0]?.all_contents);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const addContent = async (val) => {
    try {
      setSaved(false)
      setTimeout(async()=> {
        await axios.post(`/document/${id}/content`, { inner_content: val });
        setSaved(true)
      },[2000])
     
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = () => {
    if (editorRef.current) {
      const html = editorRef.current.root.innerHTML;
      addContent(html);
    }
  };

  return <div className="container" ref={wrapperRef}></div>;
};

export default TextEditor;
