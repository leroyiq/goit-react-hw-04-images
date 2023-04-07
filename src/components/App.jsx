import { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import { requestApi } from './Servises/Servises';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export const App = () => {
  const [page, setPage] = useState(0);
  const [pageNumber, setPageNumber] = useState(false);
  const [imageName, setImageName] = useState('');
  const [imageArray, setImageArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState(false);

  const handleSubmit = getImageName => {
    if (getImageName === imageName) {
      toast.error('Try somthing else', {
        position: 'bottom-center',
        duration: 1500,
      });
      return;
    }

    setImageName(getImageName);
    setImageArray([]);
    setPage(1);
  };

  useEffect(() => {
    if (!imageName) {
      return;
    }
    loadDataImage(imageName, page);
  }, [imageName, page]);

  const loadDataImage = async (imageName, page) => {
    setIsLoading(true);

    try {
      const data = await requestApi(imageName, page);

      if (data.total === 0) {
        return setPageNumber(false);
      }
      data.hits.map(objects => {
        return setImageArray(prevState => [...prevState, objects]);
      });

      if (page === Math.ceil(data.totalHits / 12)) {
        toast.info('You have seen all photos ', {
          position: 'bottom-center',
          duration: 1500,
        });
        return setPageNumber(false);
      }
      setPageNumber(true);
    } catch (error) {
      toast.info('We have a problem ' + error, {
        position: 'bottom-center',
        duration: 1500,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const getLargeImage = getLargeImageURL => {
    setLargeImageURL(getLargeImageURL);
  };
  const toggleModal = () => {
    setLargeImageURL(false);
  };
  const loadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <Searchbar getImageName={handleSubmit} />
      {isLoading && <Loader />}
      <ImageGallery>
        {imageArray === [] ? (
          ''
        ) : (
          <ImageGalleryItem images={imageArray} getLargeImage={getLargeImage} />
        )}
      </ImageGallery>
      {pageNumber && <Button loadMoreImg={loadMore} />}
      {largeImageURL && (
        <Modal addImg={largeImageURL} toggleModal={toggleModal} />
      )}
      <Toaster />;
    </div>
  );
};
