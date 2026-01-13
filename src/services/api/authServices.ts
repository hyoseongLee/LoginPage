export type LoginRequest = { userName: string, passWord: string };
export type LoginResponse = { accessToken: string };

export async function login(req: LoginRequest): Promise<LoginResponse> {
    const res = await fetch('api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
    });

    if (!res.ok) throw new Error('LOGIN_FAILED');
    return res.json()
}