import fetch from "./fetch";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreButton from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from './components/ImageModal/ImageModal';
import ImageCard from "./components/ImageCard/ImageCard";
import "./App.css"


const App = () => {
  const [photosName, setPhotosData] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);


  const handleSearch = async (querySearch) => {
    console.log("u a search", querySearch);
    setPage(1);
    setCurrentQuery(querySearch);
    setLoading(true);
    try {
      const res = await fetch(querySearch);
      setPhotosData(res.results);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (url) => {
    setSelectedImage(url);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const res = await fetch(currentQuery, nextPage);
      setPhotosData((prev) => [...prev, ...res.results]);
      setPage(nextPage);
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleSearch} />
      {loading && <Loader />}
      {!loading && photosName.length > 0 && <ImageGallery photos={photosName} onImageClick={handleImageClick} />}
      {!loading && photosName.length > 0 && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        imageUrl={selectedImage}
      />
    </>
  )

}

export default App;