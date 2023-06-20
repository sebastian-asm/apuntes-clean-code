// ❌ Mal
const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
  let result: number
  if (isDead) {
    result = 1500
  } else {
    if (isSeparated) {
      result = 2500
    } else {
      if (isRetired) {
        result = 3000
      } else {
        result = 4000
      }
    }
  }
  return result
}

// ✅ Bien
const getPayAmount2 = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
  if (isDead) return 1500
  if (isSeparated) return 2500
  return isRetired ? 3000 : 4000
}
