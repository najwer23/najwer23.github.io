import { importAll } from '../utils'
importAll(require.context('/assets/img', false, /\.(?:ico|gif|svg|png|jpg|jpeg)$/i));