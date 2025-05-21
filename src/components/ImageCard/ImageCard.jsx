const ImageCard = ({ photo, onClick }) => {
    return (

        <img className="image-card" onClick={() => onClick(photo.urls.regular)}
            src={photo.urls.small}
            alt={photo.alt_description}
            loading="lazy"
            width={400}
            height={300}
        />

    );
};

export default ImageCard;