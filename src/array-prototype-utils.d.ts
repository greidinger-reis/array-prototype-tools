interface Array<T> {
    /**
    Sums the array
    @param this - The array to sum
        @returns The sum of the array
        @example
            const a = [1, 2, 3, 4]
            const sum = a.sum()
            console.log(sum) // 10
    */
    sum(this: T[]): number
    /**
    Calculates the average of the array
    @param this - The array to calculate the average of
        @returns The average of the array
        @example
        const a = [1, 2, 3, 4]
        const avg = a.avg()
        console.log(avg) // 2.5
    */
    avg(this: T[]): number
    /**
    Finds the maximum value in the array
    @param this - The array to find the maximum value of
        @returns The maximum value of the array
        @example
        const a = [1, 2, 3, 4]
        const max = a.max()
        console.log(max) // 4
    */
    max(this: T[]): number | undefined
    /**
    Finds the minimum value in the array
    @param this - The array to find the minimum value of
        @returns The minimum value of the array
        @example
        const a = [1, 2, 3, 4]
        const min = a.min()
        console.log(min) // 1
    */
    min(this: T[]): number | undefined
    /**
    Checks if the array is empty
    @param this - The array to check
        @returns True if the array is empty, false otherwise
        @example
        const a = []
        const isEmpty = a.isEmpty()
        console.log(isEmpty) // true
        const b = [1, 2, 3, 4]
        const isEmpty2 = b.isEmpty()
        console.log(isEmpty2) // false
    */
    isEmpty(this: T[]): boolean

    /**
     * Returns a new array with the elements in reverse order
     * @param this - The array to reverse
     * @returns A new array with the elements in reverse order
     * @example
     * const a = [1, 2, 3, 4]
     * const reversed = a.toReversed()
     * console.log(reversed) // [4, 3, 2, 1]
     * console.log(a) // [1, 2, 3, 4]
     * console.log(reversed === a) // false
     * console.log(reversed[0] === a[0]) // false
     * console.log(reversed[1] === a[1]) // false
     * console.log(reversed[2] === a[2]) // false
     * console.log(reversed[3] === a[3]) // false
     */
    toReversed(this: T[]): T[]

    /**
     * Returns a new array with the elements sorted
     * @param this - The array to sort
     * @returns A new array with the elements sorted
     * @example
     * const a = [4, 3, 2, 1]
     * const sorted = a.toSorted()
     * console.log(sorted) // [1, 2, 3, 4]
     * console.log(a) // [4, 3, 2, 1]
     */
    toSorted(this: T[]): T[]

    /**
     * Returns a random element from the array or undefined if the array is empty
     * @param this - The array to get a random element from
     * @returns A random element from the array
     * @example
     * const a = [1, 2, 3, 4]
     * const random = a.random()
     * console.log(random) // 1, 2, 3 or 4
     * const b = []
     * const random2 = b.random()
     * console.log(random2) // undefined
     */
    random(this: T[]): T | undefined
}

interface ReadonlyArray<T> {
    /**
    Sums the array
    @param this - The array to sum
        @returns The sum of the array
        @example
            const a = [1, 2, 3, 4]
            const sum = a.sum()
            console.log(sum) // 10
    */
    sum(this: T[]): number
    /**
    Calculates the average of the array
    @param this - The array to calculate the average of
        @returns The average of the array
        @example
        const a = [1, 2, 3, 4]
        const avg = a.avg()
        console.log(avg) // 2.5
    */
    avg(this: T[]): number
    /**
    Finds the maximum value in the array
    @param this - The array to find the maximum value of
        @returns The maximum value of the array
        @example
        const a = [1, 2, 3, 4]
        const max = a.max()
        console.log(max) // 4
    */
    max(this: T[]): number | undefined
    /**
    Finds the minimum value in the array
    @param this - The array to find the minimum value of
        @returns The minimum value of the array
        @example
        const a = [1, 2, 3, 4]
        const min = a.min()
        console.log(min) // 1
    */
    min(this: T[]): number | undefined
    /**
    Checks if the array is empty
    @param this - The array to check
        @returns True if the array is empty, false otherwise
        @example
        const a = []
        const isEmpty = a.isEmpty()
        console.log(isEmpty) // true
        const b = [1, 2, 3, 4]
        const isEmpty2 = b.isEmpty()
        console.log(isEmpty2) // false
    */
    isEmpty(this: T[]): boolean

    /**
     * Returns a new array with the elements in reverse order
     * @param this - The array to reverse
     * @returns A new array with the elements in reverse order
     * @example
     * const a = [1, 2, 3, 4]
     * const reversed = a.toReversed()
     * console.log(reversed) // [4, 3, 2, 1]
     * console.log(a) // [1, 2, 3, 4]
     * console.log(reversed === a) // false
     * console.log(reversed[0] === a[0]) // false
     * console.log(reversed[1] === a[1]) // false
     * console.log(reversed[2] === a[2]) // false
     * console.log(reversed[3] === a[3]) // false
     */
    toReversed(this: T[]): T[]

    /**
     * Returns a new array with the elements sorted
     * @param this - The array to sort
     * @returns A new array with the elements sorted
     * @example
     * const a = [4, 3, 2, 1]
     * const sorted = a.toSorted()
     * console.log(sorted) // [1, 2, 3, 4]
     * console.log(a) // [4, 3, 2, 1]
     */
    toSorted(this: T[]): T[]

    /**
     * Returns a random element from the array or undefined if the array is empty
     * @param this - The array to get a random element from
     * @returns A random element from the array
     * @example
     * const a = [1, 2, 3, 4]
     * const random = a.random()
     * console.log(random) // 1, 2, 3 or 4
     * const b = []
     * const random2 = b.random()
     * console.log(random2) // undefined
     */
    random(this: T[]): T | undefined
}
