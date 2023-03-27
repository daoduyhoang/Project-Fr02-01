import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import SignUp from "./component/SignUp";
import Main from "./component/Main";
import Product from "./Pages/Product";
import Users from "./Pages/Users";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="sign-up" element={<SignUp />} />
				<Route path="home" element={<Main />}>
					<Route index element={<Product />} />
					<Route index element={<Product />} />
					<Route path="user" element={<Users />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
