export type UserContext = {
    user: User | null,
    login: (user: User) => void;
    logout: () => void;
}

export type User = {
    username: string;
    email: string;
};