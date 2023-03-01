function merge(arr, start, mid, end, que) {
	// 2번째 분할 시작점
	let midStart = mid + 1;

	// 1번째 분할 끝점, 2번째 분할 시작점
	if (arr[mid].value <= arr[midStart].value) {
		return;
	}

	while (start <= mid && midStart <= end) {
		// 선택, 비교 요소 상태 저장
		let operation = {};
		operation = { selectedIdx: start };
		que.push(operation);
		operation = { selectedIdx: start, compareIdx: midStart };
		que.push(operation);

		// 1번째 분할 시작점 <= 2번째 분할 시작점
		if (arr[start].value <= arr[midStart].value) {
			operation = { selectedIdx: start };
			que.push(operation);
			operation = { selectedIdx: start, compareIdx: midStart };
			que.push(operation);
			operation = { selectedIdx: midStart };
			que.push(operation);
			start++;
		}
		// 1번째 분할 시작점 > 2번째 분할 시작점
		// arr[index], arr[index-1] 스왑
		else {
			let value = arr[midStart];
			let index = midStart;

			while (index !== start) {
				let operation = {};

				arr[index] = Object.create(arr[index - 1]);
				operation = { selectedIdx: index, swapIdx: index - 1 };
				que.push(operation);
				operation = { selectedIdx: index - 1 };
				que.push(operation);
				operation = { selectedIdx: index };
				que.push(operation);
				index--;
			}
			arr[start] = value;

			start++;
			mid++;
			midStart++;
		}
	}
}

// 이등분 분리하기, 재귀
function mergeSplit(arr = [], l = 0, r = arr.length - 1, que = []) {
	if (l < r) {
		// l, r 중간점 
		let m = l + Math.floor((r - l) / 2);

		mergeSplit(arr, l, m, que);
		mergeSplit(arr, m + 1, r, que);

		merge(arr, l, m, r, que);
	}
}

// 최종 que 반환
function mergeSort(arr, l = 0, r = arr.length - 1) {
	const que = [];
	mergeSplit(arr, l, r, que);

	return que;
}

export default mergeSort;