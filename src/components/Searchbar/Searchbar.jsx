import { Component } from 'react';
import toast from 'react-hot-toast';
import { Header, Input, Button, SearchForm, Search } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleChange = evt => {
    const value = evt.currentTarget.value;
    this.setState({ searchImage: value.toLowerCase() });
  };

  handleSubmitSearch = evt => {
    evt.preventDefault();
    const { searchImage } = this.state;
    if (searchImage.trim() === '') {
      toast.error(' Enter name of image!', {
        duration: 1500,
        position: 'top-right',
      });
      return;
    }
    this.props.getImageName(searchImage);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({ searchImage: '' });
  };

  render() {
    const { searchImage } = this.state;
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmitSearch}>
          <Button type="submit">
            <Search />
          </Button>

          <Input
            onChange={this.handleChange}
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
  }
}
