import {useContext} from "react";
import { userContext } from "../components/providers/UserProvider";

export function useUser() {
	const context = useContext(userContext);
	if (context === undefined) {
		throw new Error("useUser must be used within a UserProvider");
	}
	return context;
}