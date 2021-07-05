// 获取文档中 class=".collapsible" 的所有元素
const collapsibles = document.querySelectorAll(".collapsible");
//遍历collapsibles
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    //在元素中切换类名 classList.toggle navigation.html的nav .class变名
    this.classList.toggle("collapsible--expanded");
  })
);
