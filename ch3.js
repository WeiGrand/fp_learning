//追求“纯”的理由

//可缓存性(Cachrable)
var memoize = function(f) {
    var cache = {};

    return function() {
        var arg_str = JSON.stringify(arguments);

        cache[arg_str] = cache[arg_str] || f.apply(f, arguments);

        return cache[arg_str];
    }
}

//--可以通过延迟执行把不纯的函数变成纯函数 eg:
var pureHttpCall = function(url, params) {
    return function() {
        return $,getJSON(url, params);
    }
}

//可移植性/自文档化(Portable/Self-Documenting)

//可测试性(Testable) 工具：Quickcheck

//合理性(Reasonable)

//并行代码
