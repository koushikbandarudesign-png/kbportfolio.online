export const ROUTES = ['home', 'connx', 'connx-process', 'telmy', 'telmy-process'] as const

export type Route = (typeof ROUTES)[number]

export const TITLES: Record<Route, string> = {
  home: 'Koushik Bandaru — Product Designer',
  connx: 'CONNX — Koushik Bandaru',
  'connx-process': 'CONNX, full process — Koushik Bandaru',
  telmy: 'Telmy — Koushik Bandaru',
  'telmy-process': 'Telmy, full process — Koushik Bandaru',
}

export function isRoute(value: string): value is Route {
  return (ROUTES as readonly string[]).includes(value)
}

export function routeFromHash(hash: string): Route {
  const token = hash.replace(/^#/, '')
  return isRoute(token) ? token : 'home'
}
