import {useUser} from "../hooks/useUser";

export function CurrentUserInfo() {
	const { user, logout } = useUser();

	return (
		<div className={"mt-5"}>
			<span className={"text-3xl"}>Username: <span className={"text-blue-500"}>{user?.username}</span></span>,
			<span className={"text-3xl mx-2"}>Email: <span className={"text-blue-500"}>{user?.email}</span></span>
			<button className={"rounded p-2 bg-blue-500 text-white font-bold"} onClick={logout}>Logout</button>
		</div>
	);
}