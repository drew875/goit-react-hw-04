import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ photos, onImageClick }) => {
    return (
        <ul className="image-gallery">
            {photos.map(photo => (
                <ImageCard key={photo.id} photo={photo} onClick={onImageClick} />
            ))}
        </ul>
    );
};

export default ImageGallery;