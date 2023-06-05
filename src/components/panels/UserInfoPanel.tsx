import {LoginForm} from "../forms/LoginForm";
import {CurrentUserInfo} from "../CurrentUserInfo";
import {useUser} from "../../hooks/useUser";

export function UserInfoPanel() {
	const { user } = useUser();

	return <div>
		{user ? <CurrentUserInfo /> : <LoginForm />}
	</div>
}