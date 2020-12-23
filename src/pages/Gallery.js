import React, {useState} from 'react';
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import "./gallery.scss";
const Gallery = () => {
  const bottles = useStaticQuery(graphql`
  query {
    imageSet:  allFile(filter: {relativeDirectory: {eq: "gallery_bottles"}}) {
      edges {
        node {
          id
          childImageSharp {
            fluid(fit: INSIDE,maxWidth:600){
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
  `)
  const [open, setOpen] = useState(false);
  const [photo, setPhoto] = useState(bottles.imageSet.edges[0].node.childImageSharp.fluid);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const choosePhoto = (photoSrc) => {
    setPhoto(photoSrc);
    handleOpen();
  }
    return (
        <Layout>
        <SEO title="Page two" />
        <div className="gallery-main-container">
            <h1 style={{textAlign:"center"}}>Gallery</h1>
            <h4 style={{textAlign:"center",color:"rgb(113, 113, 113)"}}>Here are some of the things we've made so far.</h4>
            <div className="gallery-images">
                   {
                        bottles.imageSet.edges.map((image, index) => {
                           return (
                             <div key={index} style={{display:"grid"}} onClick={() => choosePhoto(image.node.childImageSharp.fluid)}>
                               <Img fluid={image.node.childImageSharp.fluid} className="gallery-image" alt="gallery-image" aria-label="gallery-image"/>
                               </div>
                           )
                        })
                    }
            </div>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
        }}
        disableEnforceFocus
        disableAutoFocus
        className="modal-styles"
         >
        <Fade in={open}>
          <div className="modal-image-container">
          <CancelRoundedIcon className="modal-close-icon" onClick={handleClose}/>
            <Img fluid={photo} className="modal-image"></Img>
          </div>
        </Fade>
      </Modal>
        </div>
      </Layout>
            
    
    )
}

export default Gallery;