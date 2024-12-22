// ES5
function _deepClone(origin, target) {
  var tar = target || {}
  var toStr = Object.prototype.toString
  var arrType = "[object Array]"

  for (let key in origin) {
    if (origin.hasOwnProperty(key)) {
      if (typeof origin[key] === "object" && origin[key] !== null) {
        tar[key] = toStr.call(origin[key]) === arrType ? [] : {}
        _deepClone(origin[key], tar[key])
      } else {
        tar[key] = origin[key]
      }
    }
  }
  return tar
}

// ES6
function deepClone(origin) {
  if (origin == undefined || typeof origin !== "object") {
    return origin
  }
  if (origin instanceof Date) {
    return origin
  }
  if (origin instanceof RegExp) {
    return origin
  }
  const target = new origin.constructor()
  for (let key in origin) {
    if (origin.hasOwnProperty(key)) {
      target[key] = deepClone(origin[key])
    }
  }
  return target
}

// ES6，解决对象相互引用的问题
function superDeepClone(origin, hashMap = new WeakMap()) {
  if (origin == undefined || typeof origin !== "object") {
    return origin
  }
  if (origin instanceof Date) {
    return origin
  }
  if (origin instanceof RegExp) {
    return origin
  }
  const hashKey = hashMap.get(origin)
  if (hashKey) {
    return hashKey
  }
  const target = new origin.constructor()
  hashMap.set(origin, target)
  for (let k in origin) {
    if (origin.hasOwnProperty(k)) {
      target[k] = superDeepClone(origin[k], hashMap)
    }
  }
  return target
}

export { _deepClone, deepClone, superDeepClone }
