import {useState} from "react";
import {useUser} from "../../hooks/useUser";

export function LoginForm() {
	const { login } = useUser();
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');

	return <div className={"mt-4"}>
		<input type={"text"} className={"rounded border-2 p-2"} placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
		<input type={"email"} className={"rounded border-2 p-2 mx-2"} placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />

		<button className={"rounded p-2 bg-blue-500 text-white font-bold"} onClick={() => login({username, email})}>Login</button>
	</div>
}
