export interface ICreateUserRequestDTO {
    id: string;
    username: string | null;
    email: string | null;
    password: string | null;
    bio: string | null;
    image: string | null;
}