const { DEV, VITE_LOCAL } = import.meta.env

import { ytService as local } from './youtube-api.service.local'
import { ytService as remote } from './youtube-api.service.remote'

const service = VITE_LOCAL === 'true' ? local : remote
export const ytService = { ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.ytService = ytService
