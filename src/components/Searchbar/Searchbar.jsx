import { useState } from 'react';
import toast from 'react-hot-toast';
import { Header, Input, Button, SearchForm, Search } from './Searchbar.styled';
import PropTypes from 'prop-types';

export const Searchbar = ({ getImageName }) => {
  const [searchImage, setSearchImage] = useState('');

  const handleChange = evt => {
    setSearchImage(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmitSearch = evt => {
    evt.preventDefault();

    if (searchImage.trim() === '') {
      toast.error(' Enter name of image!', {
        duration: 1500,
        position: 'bottom-center',
      });
      return;
    }
    getImageName(searchImage);
    resetForm();
  };
  const resetForm = () => {
    setSearchImage('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmitSearch}>
        <Button type="submit">
          <Search />
        </Button>

        <Input
          onChange={handleChange}
          type="text"
          name="name"
          autoComplete="off"
          value={searchImage}
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.prototype = {
  getImageName: PropTypes.func.isRequired,
};
