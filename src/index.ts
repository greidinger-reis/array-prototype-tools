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
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return structuredClone(this).reverse()
}

Array.prototype.sorted = function <T>(this: T[]): T[] {
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return structuredClone(this).sort()
}

Array.prototype.shuffled = function <T>(this: T[]): T[] {
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return structuredClone(this).sort(() => Math.random() - 0.5)
}

Array.prototype.random = function <T>(this: T[]): T | undefined {
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this[Math.floor(Math.random() * this.length)]
}

Array.prototype.shuffle = function <T>(this: T[]): T[] {
    //eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return this.sort(() => Math.random() - 0.5)
}

export {}
