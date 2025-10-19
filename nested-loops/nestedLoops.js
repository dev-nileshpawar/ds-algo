for(let i = 0; i < 3; i++) {
    for(let j=i; j>=0;j--) {
        console.log(i, j)
    }
}

/* 0 0
1 1
1 0
2 2
2 1
2 0 */

for(let i = 5; i>0;i--) {
    for(let j=0;j<i;j++) {
        console.log(i,j)
    }
}

/* 5 3
5 4
4 0
4 1
4 2
4 3
3 0
3 1
3 2
2 0
2 1
1 0 */