import React, {Component} from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const images = [{ src: "path/to/image-1.jpg", src: "path/to/image-2.jpg" }];

class ReactImages extends Component {
  state = { modalIsOpen: false };
  toggleModal = () => {
    this.setState((state) => ({ modalIsOpen: !state.modalIsOpen }));
  };
  render() {
    const { modalIsOpen } = this.state;

    return (
      <ModalGateway>
        {modalIsOpen ? (
          <Modal onClose={this.toggleModal}>
            <Carousel views={images} />
          </Modal>
        ) : null}
      </ModalGateway>
    );
  }
}

export default ReactImages;
