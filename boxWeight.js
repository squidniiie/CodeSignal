function minimalHeaviestSetA(arr) {
    const sorted = arr.sort((a, b) => a - b)
    let total = sorted.reduce((key, val) => key += val, 0)
    let weightA = 0, weightB = total
    let A = [], B = []
    while (sorted.length > 0) {
        const w = sorted.pop()
        if (weightA < weightB) {
            A.push(w);
        }
        weightA += w
        weightB -= w
    }
    return A.reverse()
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    let arr = [];

    for (let i = 0; i < arrCount; i++) {
        const arrItem = parseInt(readLine().trim(), 10);
        arr.push(arrItem);
    }

    const result = minimalHeaviestSetA(arr);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
// 14/15 test cases passed.