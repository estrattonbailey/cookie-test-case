import * as cookie from 'cookie'

export const route = '*'

export function handler(ctx) {
  return {
    headers: {
      'Set-Cookie': cookie.serialize('cookie-test-case', 'value', {
        expires: new Date(2022, 1, 1),
        domain: ctx.path.includes('override') ? 'netlify.app' : undefined
      })
    },
    html: `<a href='/override'>/override</a>`
  }
}
