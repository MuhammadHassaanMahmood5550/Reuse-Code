
//this is Yet Another React Lightbox
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
const EkkoLight = () => {
    const [open, setOpen] = useState(false);
    return ( 
        <div id="Main_ekkolight">
 <button type="button" onClick={() => setOpen(true)}>
        Open Lightbox
      </button>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: require(`../images/hassaan.jpg`), width: 320, height: 213 },
          { src: require(`../images/hassaan1st.jpeg`), width: 640, height: 427 },
          { src: require(`../images/hassaan.jpg`), width: 1200, height: 800 },
          { src: require(`../images/hassaan1.jpg`), width: 2048, height: 1365 },
          { src: require(`../images/hassaan.jpg`), width: 3840, height: 2560 },
        ]}
      />

        </div>
     );
}
 
export default EkkoLight;