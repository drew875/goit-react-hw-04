

const ImageGallery = ({ photos, onImageClick }) => {
    return (
        <ul>
            {photos.map(photo => (
                <li key={photo.id}>
                    <img src={photo.urls.small}
                        onClick={() => onImageClick(photo.urls.full)}
                        style={{ cursor: "pointer" }} />
                </li>
            ))}
        </ul>
    );
};


export default ImageGallery;