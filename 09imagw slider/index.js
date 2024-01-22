/*WebGLSampler.toString("#one",{
  width:"100%",
  ease:export.easeinout,
  duration:2
})*/
document.querySelectorAll(".imagecontainer")
.forEach(function(elem){
  WebGLSampler.to(elem,{
    width:"100%",
    ease:expo.easeInOut,
    duration:2
  })
  
})