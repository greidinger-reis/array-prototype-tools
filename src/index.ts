import structuredClone from "@ungap/structured-clone"

Array.prototype.sum = function (this: number[]): number {
    return this.reduce((acc, val) => Number(acc + val), 0)
}

Array.prototype.avg = function (this: number[]): number {
    return this.sum()! / this.length
}

Array.prototype.max = function (this: number[]): number | undefined {
    if (this.length === 0) {
        return undefined
    }
    return Math.max(...this)
}

Array.prototype.min = function (this: number[]): number | undefined {
    if (this.length === 0) {
        return undefined
    }
    return Math.min(...this)
}

Array.prototype.isEmpty = function (this: any[]): boolean {
    return this.length === 0
}

Array.prototype.reversed = function <T>(this: T[]): T[] {
    return structuredClone(this).reverse()
}

Array.prototype.sorted = function <T>(this: T[]): T[] {
    return structuredClone(this).sort()
}



Array.prototype.shuffled = function <T>(this: T[]): T[] {
        const shuffledArr = structuredClone(this).sort(() => Math.random() - 0.5)

        if(shuffledArr === this) {
            return this.shuffled()
        }

        return shuffledArr
    }

Array.prototype.random = function <T>(this: T[]): T | undefined {
    return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.shuffle = function <T>(this: T[]): T[] {
    const prev = structuredClone(this)
    this.sort(() => Math.random() - 0.5)
    if (this === prev) {
        return this.shuffle()
    }
    return this
}

export {}
