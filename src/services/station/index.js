/* eslint-disable no-unused-vars */
const { DEV, VITE_LOCAL } = import.meta.env

import { getRandomIntInclusive, makeId } from '../util.service'

import { stationService as local } from './station.service.local'
import { stationService as remote } from './station.service.remote'

function getEmptyStation() {
  return {
    name: '',
    tags: [],
    createdBy: {
      _id: '',
      fullname: '',
      imgUrl: '',
      createdAt: Date.now(),
    },
    likedByUsers: [], // '{minimal-user}'
    songs: [],
    msgs: [],
  }
}

function getDefaultFilter() {
  return {
    name: '',
    tags: '',
    sortField: '',
    sortDir: '',
  }
}

const service = VITE_LOCAL === 'true' ? local : remote
export const stationService = { getEmptyStation, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.stationService = stationService
