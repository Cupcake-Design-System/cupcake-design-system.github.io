<!DOCTYPE html>
<html>
<head>
<style> 

#div1 {
  width: 100px;
  height: 100px;
  background: red;
  position: relative;
  -webkit-animation-name: example;  /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 5s;  /* Safari 4.0 - 8.0 */  
  -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */
  animation-name: example1;
  animation-duration: 8s;  
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease;
}

#div2 {
  width: 100px;
  height: 100px;
  background: pink;
  position: relative;
  margin-left: 100px;
  -webkit-animation-name: example;  /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 3s;  /* Safari 4.0 - 8.0 */  
  -webkit-animation-fill-mode: forwards; /* Safari 4.0 - 8.0 */
  animation-name: example2;
  animation-duration: 5s;  
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  -webkit-animation-timing-function: ease;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example1 {
  from {top: 0px;}
  to {top: 200px; background-color: blue;}
}

@keyframes example1 {
  from {top: 0px;}
  to {top: 200px; background-color: pink;}
}

@keyframes example2 {
  from {top: 0px;}
  to {top: 200px; background-color: blue;}
}

</style>
</head>
<body>

<div id="div1"></div>
<div id="div2"></div>

</body>
</html>
