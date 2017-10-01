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
}

push(2);
console.log(stack);


