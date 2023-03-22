/// <reference path="../src/array-prototype-utils.d.ts" />
import { describe, it, expect } from "vitest"
import "../src"

describe("Array prototype functions", () => {
    describe("sum()", () => {
        it("should return the sum of an array of numbers", () => {
            const array = [1, 2, 3, 4, 5]
            expect(array.sum()).toEqual(15)
        })

        it("should return 0 when called on an empty array", () => {
            const array: number[] = []
            expect(array.sum()).toEqual(0)
        })

        it("should return NaN when called on an array of non-numbers", () => {
            const array = ["a", "b", "c"]
            expect(array.sum()).toBeNaN()
        })
    })

    describe("avg()", () => {
        it("should return the average of an array of numbers", () => {
            const array = [1, 2, 3, 4, 5]
            expect(array.avg()).toEqual(3)
        })

        it("should return NaN when called on an empty array", () => {
            const array: number[] = []
            expect(array.avg()).toBeNaN()
        })

        it("should return NaN when called on an array of non-numbers", () => {
            const array = ["a", "b", "c"]
            expect(array.avg()).toBeNaN()
        })
    })

    describe("max()", () => {
        it("should return the maximum value in an array of numbers", () => {
            const array = [1, 2, 3, 4, 5]
            expect(array.max()).toEqual(5)
        })

        it("should return undefined when called on an empty array", () => {
            const array: number[] = []
            expect(array.max()).toBeUndefined()
        })

        it("should return NaN when called on an array of non-numbers", () => {
            const array = ["a", "b", "c"]
            expect(array.max()).toBeNaN()
        })
    })

    describe("min()", () => {
        it("should return the minimum value in an array of numbers", () => {
            const array = [1, 2, 3, 4, 5]
            expect(array.min()).toEqual(1)
        })

        it("should return undefined when called on an empty array", () => {
            const array: number[] = []
            expect(array.min()).toBeUndefined()
        })

        it("should return NaN when called on an array of non-numbers", () => {
            const array = ["a", "b", "c"]
            expect(array.min()).toBeNaN()
        })
    })

    describe("isEmpty()", () => {
        it("should return true for an empty array", () => {
            const array: number[] = []
            expect(array.isEmpty()).toBeTruthy()
        })

        it("should return false for a non-empty array", () => {
            const array = [1, 2, 3, 4, 5]
            expect(array.isEmpty()).toBeFalsy()
        })
    })

    describe("toReversed()", () => {
        it("should return a new array with the elements reversed", () => {
            const array = [1, 2, 3, 4, 5]
            expect(array.toReversed()).toEqual([5, 4, 3, 2, 1])
        })

        it("should not modify the original array", () => {
            const array = [1, 2, 3, 4, 5]
            array.toReversed()
            expect(array).toEqual([1, 2, 3, 4, 5])
        })
    })

    describe("random()", () => {
        it("should return a random element from the array", () => {
            const array = [1, 2, 3, 4, 5]
            const randomElement = array.random()
            expect(array.includes(randomElement as number)).toBeTruthy()
        })

        it("should return undefined when called on an empty array", () => {
            const array: number[] = []
            expect(array.random()).toBeUndefined()
        })
    })

    describe("toSorted()", () => {
        it("should return a new array with the elements sorted", () => {
            const array = [5, 3, 1, 4, 2]
            expect(array.toSorted()).toEqual([1, 2, 3, 4, 5])
        })

        it("should not modify the original array", () => {
            const array = [5, 3, 1, 4, 2]
            array.toSorted()
            expect(array).toEqual([5, 3, 1, 4, 2])
        })
    })
})
