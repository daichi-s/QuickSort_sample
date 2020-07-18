// 入力した数字を取得・表示
function setNumber() {
    let number = document.getElementById("number");
    document.getElementById("displayNumber").innerHTML = number.value;
    document.getElementById("under").innerHTML = "↓";
    document.getElementById("result").innerHTML = "???";
}

// ソートを実行
function exec() {
    // 入力値を取得、配列に変換
    let number = document.getElementById("number").value;
    let arrayNumber = number.split('');

    let pivot = getPivot(arrayNumber);    // 中央値
    let left = 0;                         // 開始位置
    let right = (arrayNumber.length) - 1; // 終了位置

    // ソートを実行 
    let arrayResult = sort(arrayNumber, left, right);

    // 結果を表示
    let result = arrayResult.join(''); // array -> string に変換
    document.getElementById("under").innerHTML = "↓";
    document.getElementById("result").innerHTML = result;
}

function getPivot(l, c, r) {
    // 開始位置の値が中央値より小さい場合
    if (l < c) {
        if (c < r) {
            return c;
        } else if (r < l) {
            return l;
        } else {
            return r;
        }
    } else {
        if (r < c) {
            return c;
        } else if (l < r) {
            return l;
        } else {
            return r;
        }
    }
}

// クイックソート
function sort(number, left, right) {
    if (left < right) {
        let tmp;
        let l = left;
        let r = right;
        let c = Math.round((r + 1) / 2);
        let pivot = getPivot(number[l], number[c], number[r]);

        while (1) {
            while (number[l] < pivot) l++;
            while (pivot < number[r]) r--;

            if (l >= r) break;

            // number[i] と number[r] を入れ替え
            tmp = number[l];
            number[l] = number[r];
            number[r] = tmp;

            l++;
            r--;
        }
        sort(number, left, l - 1);
        sort(number, r + 1, right);
    }

    return number;
}
