import "./App.css";
import {RouterProvider} from 'react-router-dom';
import router from "./routes";

// import TextEditor from "./componenets/TextEditor";
function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
