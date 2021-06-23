const calculator = {
  add(a, b) {
    if (this.validate(a, b) == null) return null;
    return a + b;
  },
  subtract(a, b) {
    if (this.validate(a, b) == null) return null;
    return a - b;
  },
  multiply(a, b) {
    if (this.validate(a, b) == null) return null;
    return a * b;
  },
  division(a, b) {
    if (this.validate(a, b) == null) return null;
    if (b == 0) {
      return null;
    }
    return a / b;
  },

  validate(a, b) {
    if (a == null || b == null) return null;
    if (!isFinite(a) || !isFinite(b)) return null;
    if (isNaN(a) || isNaN(b)) return null;
    return true;
  },
};

export default calculator;
