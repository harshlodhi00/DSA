class Calculator {
    /**
     * @param {number} value
     */
    constructor(val) {
        this.val = val;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.val += value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.val -= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.val *= value;
        return this;
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value !== 0) {
            this.val /= value;
            return this;
        } else {
            throw new Error("Division by zero is not allowed");
        }
    }

    /**
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.val **= value;
        return this;
    }

    /**
     * @return {number}
     */
    getResult() {
        return this.val;
    }
}
