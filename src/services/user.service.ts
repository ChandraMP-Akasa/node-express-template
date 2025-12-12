// src/services/user.service.ts
// NOTE: Write pure functions in services
export interface UserDTO {
  id: number;
  name: string;
}

export interface CreateUserRequest {
  name: string;
}

export async function getAllUsers(): Promise<UserDTO[]> {
  return [
    { id: 1, name: "Chandra" },
    { id: 2, name: "John Doe" },
  ];
}

export async function getUserById(id: number): Promise<UserDTO | null> {
  const users = await getAllUsers();
  const u = users.find((x) => x.id === Number(id)) ?? null;
  console.warn('user -', u)
  return u;
}

export async function createUser(payload: CreateUserRequest): Promise<UserDTO> {
  if (!payload?.name) {
    throw { statusCode: 400, message: "Name is required" };
  }
  const newUser: UserDTO = {
    id: Math.floor(Math.random() * 1000000),
    name: payload.name,
  };
  return newUser;
}

export async function searchUser(id: number, age?: number, active?: boolean): Promise<object>{
  return {
    status: 'success',
    statuscode: 200,
    data: true
  };
}
