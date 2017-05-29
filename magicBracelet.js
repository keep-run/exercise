/**
 * Created by Administrator on 2017/5/27 0027.
 */
/*
 * 魔力手环
 小易拥有一个拥有魔力的手环上面有n个数字(构成一个环),当这个魔力手环每次使用魔力的时候就会发生一种奇特的变化：每个数字会变成自己跟后面一个数字的和(最后一个数字的后面一个数字是第一个),一旦某个位置的数字大于等于100就马上对100取模(比如某个位置变为103,就会自动变为3).现在给出这个魔力手环的构成，请你计算出使用k次魔力之后魔力手环的状态。
 输入描述:
 输入数据包括两行：
 第一行为两个整数n(2 ≤ n ≤ 50)和k(1 ≤ k ≤ 2000000000),以空格分隔
 第二行为魔力手环初始的n个数，以空格分隔。范围都在0至99.
 输出描述:
 输出魔力手环使用k次之后的状态，以空格分隔，行末无空格。
 输入例子:
 3 2
 1 2 3
 输出例子:
 8 9 7
 */

/**
 * 分析：每变化一次，相当于和一个矩阵O相乘，例如：n=3时：O=[[1,0,1],[1,1,0],[0,1,1]]*/
process.stdin.resume();//回复输入流
process.stdin.setEncoding('utf8');

var input_stdin = "";//输入的全部数据
var input_stdin_array = "";//输入的每行数据以数组形式存在
var input_currentline = 0;//输入的行数

process.stdin.on('data', function (data) {//接收输入的数据
    input_stdin += data;
    if (data.slice(0, -1) == '') {
        process.stdin.emit('end');//输入空的回车结束输入
    }
});

process.stdin.on('end', function () {//end触发
    input_stdin_array = input_stdin.split("\n");
    main();//对输入进行操作
});

function readLine() {
    return input_stdin_array[input_currentline++];//读取每一行的数据
}
/*实现两个n*n的矩阵的乘法，结果中的数都对常数c求余*/
function mulOrder(x, y, n, c) {
    var mul = createZeroMatrix(n, n);//mul为全0矩阵mul:n*n
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            for (var k = 0; k < n; k++) {
                mul[i][j] += (x[i][k] * y[k][j])
            }
            mul[i][j] %= c;
        }
    }
    return mul;
}

/*实现一个向量(1*n)和一个矩阵(n*n)的乘法，结果中的数都对常数c求余*/
function oneOrder(arr, O, n, c) {
    var res = createZeroMatrix(1, n)[0];//createZeroMatrix(1, n)返回[[0,0,0,...,0]]
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            res[i] += (parseInt(arr[j]) * parseInt(O[j][i]));
        }
        res[i] = res[i] % c;
    }
    return res;
}
/**创建全零的m*n矩阵*/
function createZeroMatrix(m, n) {
    var arr = [];
    var temp = new Array(n);
    // ES6写法： temp.fill(0); 牛客网不支持
    for (var i = 0; i < n; i++) {
        temp[i] = 0;
    }
    for (var i = 0; i < m; i++) {
        arr[i] = temp.slice();//数组是地址传递，slice实现数组的复制
    }
    return arr;
}
/**创建n*n的操作矩阵martix*/
function createOperate(n) {
    var arr = createZeroMatrix(n, n)
    for (var i = 0; i < n; i++) {
        arr[i][i] = 1;
        if (i == 0) {
            arr[i][n - 1] = 1;
        } else {
            arr[i][i - 1] = 1;
        }
    }
    return arr;
}
function main() {
    var num = readLine().split(' ');
    var arr = readLine().split(' ').map(function (item) {
        return +item;
    });
    var n = parseInt(num[0]);
    var k = parseInt(num[1]);

    /*O是操作矩阵Operate，*/
    var O = [], res = [];
    O = createOperate(n);
    /*矩阵快速幂算法*/
    while (k) {
        if (k & 1) {
            arr = oneOrder(arr, O, n, 100);
        }
        k >>= 1;
        O = mulOrder(O, O, n, 100);
    }
    console.log(arr.join(' '));
}