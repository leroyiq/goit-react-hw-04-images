import { ModalContainer, Overlay } from 'components/Modal/Modal.styled';
import { Spinner } from './Loader.styled';

export const Loader = () => {
  return (
    <Overlay style={{ backgroundColor: 'transparent' }}>
      <ModalContainer>
        <Spinner
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#b8c480', '#B2A3B5', '#F4442E', '#51E5FF', '#429EA6']}
        />
      </ModalContainer>
    </Overlay>
  );
};
