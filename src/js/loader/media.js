import { importAll } from '../utils'
importAll(require.context('/src/media', false, /\.(?:ico|gif|svg|png|jpg|jpeg)$/i));