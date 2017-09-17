//代码组合
var compose = function(f, g) {
    return function(x) {
        return f(g(x));
    }
}

var toUpperCase = (x) => x.toUpperCase();
var exclaim = (x) => x + '!';

var shout = compose(exclaim, toUpperCase);

shout('send in ths clowns'); // "SEND IN THE CLOWNS!"

//结合律 (associativity)
var associativive = compose(f, compose(g, h)) == compose(compose(f, g), h);

//pointfree 函数无须提及将要操作的数据是怎么样的
//非 pointfree 因为提到了数据
var snakeCase1 = (word) => word.toLowerCase().replace(/\s+/ig, '_');

//pointfree
var snakeCase2 = compose(replace(/\s+/ig, '_'), toLowerCase);
