const flat = (arr) => {
    return arr.reduce((res, cur) => {
        if (Array.isArray(cur)) {
            const parsed = flat(cur);
            return [...res, ...parsed];
        } else {
            res.push(cur);
            return res;
        }
    }, [])
};

console.log(flat([1,2,3, [1,2, [2,3, [2, [3, 4,[5]]]]]]))
