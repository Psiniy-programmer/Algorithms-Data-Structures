// Необходимо написать функцию, возвращающую значения всех вершин дерева:
// getTreeValues(tree) => [1, 2, 3, 4, 5, 6, 7]

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [{ value: 4 }, { value: 5 }],
    },
    {
      value: 3,
      children: [
        { value: 6 },
        {
          value: 3,
          children: [{ value: 11 }, { value: 12 }],
        },
      ],
    },
  ],
};

const getTreeValues = (tree) => {
  const res = [];
  let tmp = [tree];
  let cur;

  while (tmp.length > 0) {
    cur = tmp.shift();

    if (cur.value) {
      res.push(cur.value);
    }

    if (cur.children) {
      cur.children.forEach((item) => tmp.push(item));
    }
  }

  return res;
};

const getTreeValues2 = (tree) => {
  return [tree].reduce((res, cur) => {
    if (cur.value) {
      res.push(cur.value);
    }

    if (cur.children) {
      res = [...res, ...cur.children.map((item) => getTreeValues2(item))].flat(
        Infinity
      );
    }

    return res;
  }, []);
};

const sumTreeValues = (tree) => {
  return [tree].reduce((res, cur) => {
    if (cur.value) {
      res += cur.value;
    }

    if (cur.children) {
      res += cur.children
        .map((node) => sumTreeValues(node))
        .reduce((acc, next) => acc + next, 0);
    }

    return res;
  }, 0);
};

const sumTreeValues2 = (tree) => {
    let res = 0;
    let queue = [tree];
    let cur;

    while (queue.length > 0) {
        cur = queue.shift();

        if (cur.value) {
            res += cur.value;
        }

        if (cur.children) {
            cur.children.forEach((item) => queue.push(item))
        }
    }

    return res;
}

console.log(sumTreeValues2(tree));
