//柯里化(curry) 只传递给函数一部分参数来调用它，让它返回一个函数来处理剩下的参数
var add = function(x) {
    return function(y) {
        return x + y;
    }
}

var increment = add(1);
var addTen = add(10);

increment(2); // 3
addTen(2); // 12
