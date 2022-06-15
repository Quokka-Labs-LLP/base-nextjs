// eslint-disable-next-line
function toVal(mix: any) {
  let k,
    y,
    str = ''

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ')
            str += y
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ')
          str += k
        }
      }
    }
  }
  return str
}

// eslint-disable-next-line
export default function clsx(...args: any): string {
  let x,
    str = ''
  for (const key of args) {
    if ((x = toVal(key))) {
      str && (str += ' ')
      str += x
    }
  }
  return str
}
