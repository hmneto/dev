const App = ()=>{
  let middlewares = []
  function get(){
    runMiddleWares(0)
    //console.log(middlewares)
  }
  function use(fn){
    middlewares.push(fn)
  }
  function runMiddleWares(index){
    middlewares[index].call(null,function(){
      //console.log(index)
      //console.log(middlewares.length-1)
      if(index < middlewares.length-1)
      runMiddleWares(index+1)
    })
  }
  return{
    get,
    use,
    
  }
}

a = App()



a.use(function(next){
  setTimeout(function(){
    console.log('first one')
    console.log(next)
    
  },10000)
  
  next()
})
a.use(function(next){
  console.log('second one')
  
})

//a.runMiddleWares()

a.get()