import React from "react";
import Gallery from "react-grid-gallery";
import { emoteData, badgeData } from './GalleryImages'

export function EmoteGridList() {
    return (
        <div className={'imageGallery'} style={{
            display: "block",
            height: '632px',
            margin: '10px 70px',
            width: "1272px",
            overflow: "hidden"}}>
        <Gallery
            images={emoteData}
            enableLightbox={true}
            enableImageSelection={false}
            maxRows={2}
            margin={5}
            rowHeight={309}
            backdropClosesModal
        />
        </div>
    );
}

export function BadgeGridList() {
    return (
        <div className={'imageGallery'} style={{
            display: "block",
            height: '500.75px',
            margin: '10px 70px',
            width: "1272px",
            overflow: "hidden"}}>
            <Gallery
                images={badgeData}
                enableLightbox={true}
                enableImageSelection={false}
                maxRows={3}
                margin={5}
                rowHeight={145}
                backdropClosesModal
            />
        </div>
    );
}