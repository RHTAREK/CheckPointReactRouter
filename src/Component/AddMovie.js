import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddMovie = ({ addMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
 const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [rating, setRating] = useState('0');
  const [image, setImage] = useState('');

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleSubmit = () => {
    let newMovie = {
      name,
      date,
      rating,
      image,
     
    };

    addMovie(newMovie);
    setIsOpen(false);
     setName('');
     setDate('');
     setRating('');
     setImage('');
   
  };

  return (
    <div>
      <div className="Add-btn-container">
        <button className="Add-btn" onClick={openModal}>
          +
        </button>
        <Modal
          className="add-modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        >
          <h1 className="addMovie-h1">Add A Movie</h1>
          <form>
            <label>Movie Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />
            <label>Movie Rate</label>
            <div className="rating-search">
            </div>
            { <input
              type="number"
              name="rating"
              value={rating}
              required
              onChange={(e) => setRating(e.target.value)}
            /> }
            <label>Movie Release Date</label>
            <input
              type="number"
              name="date"
              value={date}
              required
              onChange={(e) => setDate(e.target.value)}
            />
            <label>Movie Image</label>
            <input
              type="url"
              name="image"
              value={image}
              required
              onChange={(e) => setImage(e.target.value)}
            />
          
          </form>
          <button className="Modal-btn" onClick={handleSubmit}>
            Submit
          </button>
          <button className="Modal-btn" onClick={closeModal}>
            close
          </button>
        </Modal>
      </div>
    </div>
  );
};

export default AddMovie;