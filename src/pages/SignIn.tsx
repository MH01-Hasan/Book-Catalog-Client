import { ChangeEvent } from "react";
import { toast } from "react-hot-toast";
import { useSignInUserMutation } from "../redux/features/user/userApi";
import { setUser } from "../redux/features/user/userSlice";
import { useAppDispatch } from "../redux/hooks";
import { Link } from "react-router-dom";

const SignIn = () => {
	const [signInUser] = useSignInUserMutation();
	const dispatch = useAppDispatch();
	  
	const handleSignIn = async (event: ChangeEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.target;

		const data = {
			email: form.email.value,
			password: form.password.value,
		};

		await signInUser(data).then((data: any) => {
			if (data?.data) {
				toast.success("Login Successfull.");
				form.reset();
				window.location.href = "/";
				dispatch(setUser(data?.data.data.user));
				localStorage.setItem("token", data?.data.data.accessToken);
			} else if (data?.error) {
				toast.error(data.error?.data?.message);
			}
		});
	};

	return (
		<div className="hero min-h-screen bg-base-200 h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 w-96">Provident cupiditate voluptatem et in.</p>
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
			<form onSubmit={handleSignIn}>
			<div className='form-control w-full max-w-xs'>
				<div className='p-5'>
					<div className='mb-5'>
						<h3 className='text-xl font-semibold'>SignIn</h3>
						<p>Login to your account.</p>
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Email</span>
						</label>

						<input type="text" name='email' placeholder="Type here your Email" className="input input-bordered input-accent w-full max-w-xs" />
						
					</div>
					<div className='form-control w-full'>
						<label className='label'>
							<span className='label-text'>Password</span>
						</label>
						<input type='password'
							name='password' placeholder="Type here your Password" className="input input-bordered input-accent w-full max-w-xs" />

					</div>
					<button className="btn btn-primary mt-6">signin</button>

				</div>
			</div>
		 </form>


            <label className="label">
              <span className="label-text">
                {" "}
                New to Book  Catalouge{" "}
                <Link to="/signup" className="text-primary font-bold">
                  Creat an Account
                </Link>
              </span>
            </label>
         
          </div>
        </div>
      </div>
    </div>
		
	);
};

export default SignIn;
