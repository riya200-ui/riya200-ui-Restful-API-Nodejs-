const math = require('../math')
test('should calculate total tip',()=> {
    const total = math(10,0.3)
    expect(total).toBe(13);
    //if(total != 13)
    //throw new Error('total should be 12. BUT got'+ total)
})

test('should calculate total tip with default tip percent', ()=>{
    const total = math(10)
    expect(total).toBe(12)
})

const add = (a,b)=> {
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            if(a<0 || b<0)
            reject(new Error('Number should be no-negative'))
            resolve(a+b);
        },2000)
    })
}

test("should test async", (done)=> {
    setTimeout(() => {
        expect(1).toBe(2);
        done()
    },2000)
})

test('should return sum of two number', async(done) =>{
    const sum = await add(10,20)
   expect(sum).toBe(30);
   
})