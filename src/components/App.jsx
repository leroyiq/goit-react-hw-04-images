import { Component } from 'react';
import { Toaster } from 'react-hot-toast';
import { requestApi } from './Servises/Servises';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    page: 1,
    imageName: '',
    imageArray: [],
    isLoading: false,
    largeImageURL: false,
  };

  handleSubmit = async imageName => {
    this.setState({ isLoading: true });
    this.setState({
      imageName,
      page: 1,
      imageArray: [],
      largeImageURL: false,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    if (prevName !== nextName) {
      this.loadDataImage();
    }
  }

  loadDataImage = async () => {
    const { page, imageName } = this.state;
    try {
      const data = await requestApi(imageName, page);
      if (data.hits.length < 11) {
        this.setState({ page: false });
      }
      data.hits.map(objects => {
        return this.setState(({ imageArray }) => ({
          imageArray: [...imageArray, objects],
        }));
      });
      this.setState(({ page }) => ({
        page: page + 1,
      }));
    } catch (error) {
      console.log('!!!!  error', error);
    } finally {
      this.setState({ isLoading: false });
    }
  };
  getLargeImage = largeImageURL => {
    this.setState({ largeImageURL });
  };
  toggleModal = evt => {
    this.setState({ largeImageURL: false });
  };

  render() {
    const { imageArray, page, isLoading, largeImageURL } = this.state;
    return (
      <div>
        <Searchbar getImageName={this.handleSubmit} />

        {isLoading && <Loader />}
        <ImageGallery>
          {imageArray === [] ? (
            ''
          ) : (
            <ImageGalleryItem
              images={imageArray}
              getLargeImage={this.getLargeImage}
            />
          )}
        </ImageGallery>
        {page < 2 ? '' : <Button loadMoreImg={this.loadDataImage} />}

        {largeImageURL && (
          <Modal addImg={largeImageURL} toggleModal={this.toggleModal} />
        )}
        <Toaster />
      </div>
    );
  }
}
