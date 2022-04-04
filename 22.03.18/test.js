let arr  =[
    {id: 1, name:"a"},
    {id: 2, name: "b"}
]

let b = [{
    id: 1    
},{
    id: 2
}]
b.reduce((map,{id}) => {
    arr.findIndex(({id},i,arr) =>{
        console.log(arr[i].id)
    })
})