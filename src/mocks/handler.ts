import { http, HttpResponse } from 'msw'

export const handler = [
  http.post('/api/login', async ({ request }) => {
    const body = (await request.json()) as { userName: string; passWord: string }

    if (body.userName === 'hyoseong' && body.passWord === '1111') {
      return HttpResponse.json({ accessToken: 'ADMIN_TOKEN' })
    }
    return HttpResponse.json({ message: 'LOGIN_FAILED' }, { status: 401 })
  }),
]
