const ImageCard = ({ photo, onClick }) => {
    return (
        <li className="image-card" onClick={() => onClick(photo.urls.regular)}>
            <img
                src={photo.urls.small}
                alt={photo.alt_description}
                loading="lazy"
                width={400}
                height={300}
            />
        </li>
    );
};

export default ImageCard;