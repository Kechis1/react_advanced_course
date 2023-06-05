import React, { useState, createContext } from "react";
import {User, UserContext} from "../../types/userTypes";

export const userContext = createContext<UserContext | undefined>(undefined);

type Props = {
	children: React.ReactNode
}

export function UserProvider({ children }: Props) {
	const [user, setUser] = useState<User | null>(null);

	const login = (user: User) => setUser(user);

	const logout = () => setUser(null);

	return (
		<userContext.Provider value={{ user, login, logout }}>
			{children}
		</userContext.Provider>
	);
};