const LoadMoreButton = ({ onClick }) => {
    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <button onClick={onClick}>Load more</button>
        </div>
    );
};

export default LoadMoreButton;