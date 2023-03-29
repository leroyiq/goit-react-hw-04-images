import axios from 'axios';
import PropTypes from 'prop-types';
import { toast } from 'react-hot-toast';

export const requestApi = async (inputValue, page) => {
  const URL =
    'https://pixabay.com/api/?key=31600135-5645a7576922c275040b0e37d&';
  const OPTION = `q=${inputValue}&image_type=photo&orientation=horizontal&`;
  const PAGES = `page=${page}&per_page=12`;
  try {
    const response = await axios.get(`${URL}${OPTION}${PAGES}`);

    if (response.data.total === 0) {
      toast.error(' Nothing found! Try again', {
        duration: 1500,
        position: 'top-right',
      });
    }
    return response.data;
  } catch (error) {
    return toast.error('ERROR in Servises', error);
  }
};
requestApi.propTypes = {
  inputValue: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
