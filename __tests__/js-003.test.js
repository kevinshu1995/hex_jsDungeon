import Calculate from './../app/assets/js/js003'
jest.mock('./../app/assets/js/js003')
beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Calculate.mockClear()
})

describe('Calculate', () => {
    test('Calculate 被呼叫 1 次', () => {
        const calculate = new Calculate()
        expect(Calculate).toHaveBeenCalledTimes(1)
    })

    test('Calculate format marks', () => {
        const calculate = new Calculate()
        const format = calculate.format_marks('division')
        const format_spy = jest.spyOn(calculate, 'format_marks')
        expect(format_spy).toHaveBeenCalledTimes(1)
    })
})
