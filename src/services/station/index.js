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

export const tagsList = [
  'music',
  'live events',
  'pop',
  'hip-hop',
  'rock',
  'latin',
  'mood',
  'charts',
  'comedy',
  'dance',
  'indie',
  'workout',
  'chill',
  'country',
  'r&b',
  'k-pop',
  'sleep',
  'party',
  'metal',
  'jazz',
  'anime',
  'gaming',
  'soul',
  'classical',
  'punk',
  'blues',
  'alternative',
  'funk & disco',
  'summer',
  'afro',
  'instromental',
  'trending',
]

const service = VITE_LOCAL === 'true' ? local : remote
export const stationService = { getEmptyStation, getDefaultFilter, ...service }

// Easy access to this service from the dev tools console
// when using script - dev / dev:local

if (DEV) window.stationService = stationService
