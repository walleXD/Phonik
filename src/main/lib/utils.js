import { createBlacklistFilter } from 'redux-persist-transform-filter'

export const blackListFilters = () => [
  // createBlacklistFilter('example', ['score']),
  createBlacklistFilter('library', ['activeAudioFile']),
  createBlacklistFilter('libraryView', ['books', 'loading', 'activeBook'])
]
