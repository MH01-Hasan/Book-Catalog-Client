import { Link } from "react-router-dom";
import { iBook } from "../types/globalTypes";

type iProps = {
  book: iBook;
};

const BookGrid = ({ book }: iProps) => {
  return (
      <div className="card card-side bg-base-100 border-2  rounded-md shadow-2xl">
        <div className="w-80">
          <img src={book.banner} alt={book.name}  className="w-80 flex"/>
        </div>
        <div className="card-body">
          <h2 className="card-title">New movie is released!</h2>
		  <p className="text-gray-700 ">by - {book.author}</p>
          <p className="text-gray-700">{book.genre}</p>
          <p className="text-gray-600 text-sm mt-2">
            {new Date(book.publicationDate).toLocaleString()}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              {" "}
              <Link to={`/all-books/${book._id}`}>View Details</Link>
            </button>
          </div>
        </div>
      </div> 
  );
};

export default BookGrid;
