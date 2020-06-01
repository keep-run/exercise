// let test=new Promise((reslove,reject)=>{
//   setTimeout(()=>reslove(1),1000)
// }).then(data=>{
//  return new Promise((reslove,reject)=>{
//     reject(5)
//   })
// }).then(data=>{
//   console.log('-----then2-----',data)
// }).catch(data=>{
//   console.log('-----catch-----',data)
// })




console.log(1)
setTimeout(() => { console.log(2) }, 0)

new Promise((resolve,rejected)=>{
  console.log(3)
  resolve()
}).then(()=>{
  console.log(4)
}).then(()=>{
  console.log(5)
})


new Promise(reslove=>{
  console.log(7)
  reslove()
}).then(()=>{
  console.log(8)
})

// new Promise((resolve,reject) => {
//   console(3)
//   resolve()
// })

// .then(() => {
//   console.log(4)
// }).then(() => {
//   console.log(5)
// })

// new Promise(resolve=>{
//   console(6)
//   resolve()

// }).then(()=>{
//   console(7)
// })