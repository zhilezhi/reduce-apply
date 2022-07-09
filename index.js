/**
 * 数组求和
 * @param array
 * @returns {*}
 */
function sum(array) {
    return array.reduce(function (acc, item) {
        return acc + item;
    }, 0);
}

/**
 * 数组中重复无数的个数
 * @param array
 * @returns {*}
 */
function count(array) {
    return array.reduce(function (acc, item) {
        if (item in acc) acc[item] += 1;
        else acc[item] = 1;
        return acc
    }, {});
}

/**
 * 递归扁平化数组
 * @param array
 * @returns {*}
 */
function flat(array) {
    return array.reduce(function (acc, item) {
        return acc.concat(Array.isArray(item) ? flat(item) : item);
    }, []);
}

/**
 * 数组按照指定的数量切割
 * @param array
 * @param size
 * @returns {*}
 */
function chunk(array, size) {
    return array.reduce(
        (acc, item) => (
            acc[acc.length - 1].length < size
                ? acc[acc.length - 1].push(item)
                : acc.push([item]),
                acc
        ),
        [[]]
    );
}

/**
 * 数组去重
 */
function repeat(array) {
    return array.reduce(function (acc, item) {
        acc = !acc.includes(item) ? [...acc, item] : acc
        return acc
    }, [])
}

/**
 * 对象数组按某个key进行分组
 * @param array
 * @param key
 * @returns {*}
 */
function group(array = [], key) {
    return key ? array.reduce((acc, item) => (!acc[item[key]] && (acc[item[key]] = []), acc[item[key]].push(item), acc), {}) : {};
}

export {
    group,
    repeat,
    chunk,
    flat,
    count,
    sum
}
