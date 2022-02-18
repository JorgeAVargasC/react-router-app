import { useHistory, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";

export default function LoginPage() {

	const history = useHistory();
	const location = useLocation();
	const auth = useAuth();

	const previousURL = location.state?.from;

	const handleLogin = () => {
		auth.login();
		history.push(previousURL || "/dashboard");
	}

	return (
		<div>
			<h1>LoginPage</h1>
			<button onClick={handleLogin}>
				Signin
			</button>
		</div>
	)
}
