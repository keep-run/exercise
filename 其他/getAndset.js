

let  book={
    year:2000
}
Object.defineProperty(book,'name',{
    get:function(){
        console.log('get')
        return this.year
    },
    set:function(newValue){
       console.log('set');
       this.year=newValue
    }
})

book.name='书'             //这里会执行set函数
console.log(book.name)     // 这里执行get函数
console.log(book.year)     // 这里执行默认的get(默认为undefi)