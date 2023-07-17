import { Link } from "react-router-dom";
import { logout } from "../redux/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Header = () => {
	const { data: user } = useAppSelector((state) => state.user);
	const dispatch = useAppDispatch();
		return (
			<div className="navbar bg-base-100">
			<div className="flex-1">
			  <a className="btn btn-ghost normal-case text-xl">Book Catalouge</a>
			</div>
			<div className="flex-none">
			  <ul className="menu menu-horizontal px-1">
			  <li>
					<Link to='/'>Home</Link>
				</li>
				<li>
					<Link to='all-books'>All Books</Link>
				</li>
				{!user ? (
					<>
						<li>
							<Link to='/signin'>SignIn</Link>
						</li>
						<li>
							<Link to='/signup'>SignUp</Link>
						</li>
					</>
				) : (
					<>
						<li>
							<Link to='/add-new-book'>Add New Book</Link>
						</li>
						<li>
							<Link to='/wishlist'>Wishlist</Link>
						</li>
						<li>
							<Link to='/reading'>Reading</Link>
						</li>
						<li>
							<button onClick={() => dispatch(logout())}>Logout</button>
						</li>
					</>
				)}
				
			  </ul>
			</div>
		  </div>
		);
};

	


export default Header;
