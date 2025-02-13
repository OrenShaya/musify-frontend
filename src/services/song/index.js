const { DEV, VITE_LOCAL } = import.meta.env

import { songService as local } from './song.service.local'
import { songService as remote } from './song.service.remote'

export function getEmptySong() {
  return {
    title: '',
    url: '',
    imgUrl: '',
    lengthInSeconds: 0,
    addedBy: '',
    likedBy: [],
  }
}

function getDefaultFilter() {
  return {
    title: '',
    minLength: 0,
    sortField: '',
    sortDir: '',
  }
}

const service = VITE_LOCAL === 'true' ? local : remote
export const songService = { getEmptySong, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.songService = songService
