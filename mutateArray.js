function solution(n, a) {
    if (n == 1) {
        return a
    }
    let b = []

    for (let i = 0; i < n; i++) {
        if (i == 0 || i == n - 1) {
            if (i == 0) {
                b[i] = 0 + a[i] + a[i + 1]
            } else {
                b[i] = a[i - 1] + a[i] + 0
            }
        } else {
            b[i] = a[i - 1] + a[i] + a[i + 1]
        }
    }
    return b
}