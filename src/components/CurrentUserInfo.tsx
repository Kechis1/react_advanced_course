import {useUser} from "../hooks/useUser";

export function CurrentUserInfo() {
	const { user, logout } = useUser();

	return (
		<div className={"mt-5"}>
			<div className={"text-2xl"}>Username: <span className={"text-blue-500"}>{user?.username}</span></div>
			<div className={"text-2xl my-2"}>Email: <span className={"text-blue-500"}>{user?.email}</span></div>
			<button className={"rounded p-2 bg-blue-500 text-white font-bold"} onClick={logout}>Logout</button>
		</div>
	);
}