import React from "react";
import Gallery from "react-grid-gallery";
import TileData from './GalleryImages'

export default function ImageGridList() {
    return (
        <div className={'imageGallery'} style={{
            display: "block",
            height: '650px',
            margin: 'auto',
            width: "1272px",
            overflow: "hidden"}}>
        <Gallery
            images={TileData}
            enableLightbox={true}
            enableImageSelection={false}
            maxRows={2}
            rowHeight={320}
            backdropClosesModal
        />
        </div>
    );
}