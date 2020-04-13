import y from "../src/core.ts"

const { test } = Deno

test(async function experiment(): Promise<void> {
    // observer
    const f = (g: Function) => {
        [1, 3, 5, 8].forEach(item => g(item))
    }

    // observable
    const observable = y(f)

    // subscription
    observable(console.log)   // g => console.log
})