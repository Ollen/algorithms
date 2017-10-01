var stack = [];

function push(val) {
    let res = {val};
    if (stack.length === 0) {
        res.min = val;
        stack.push(res);
        return;
    }

    if (val < stack[stack.length - 1].min) {
        res.min = val;
    } else {
        res.min = stack[stack.length - 1].min;
    }
    stack.push(res);
}

function pop() {
    let res = stack.pop();
    console.log(res.val);
}

function min() {
    let res = stack[stack.length - 1].min;
    console.log(res);
}

push(5);
push(32);
push(4);
push(2);
min();
pop();
min();
pop();
min();

