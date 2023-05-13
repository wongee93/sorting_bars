# Sorting Bars
높이가 랜덤하게 주어지는 Bar들을 다양한 정렬 알고리즘을 통해 정렬하는 과정을 시각적으로 확인할 수 있습니다.

## 배포주소
https://sorting-bars.vercel.app/

## 기능소개
- 각 Bar들의 높이를 숫자로 표시하여 정렬과정을 제대로 볼 수 있도록 하였습니다.
- 비교 대상이 되는 Bar와 비교를 마친 Bar의 색상을 다르게하여 시각적인 효과를 주었습니다.
- Redux를 통해 Bar에 대한 randomArray를 전역에서 관리하였습니다.

### Reset
- 1부터 20까지의 높이를 가진 Bar들을 랜덤하게 생성합니다.
- 중복되는 높이가 없도록 처리하였습니다.

![reset](https://github.com/wongee93/sorting_bars/assets/107908373/75027773-c486-44b2-81b3-1c758d0f1f67)

### Bubble Sort
- 서로 인접한 요소들의 크기를 비교하여 정렬하는 알고리즘입니다.
- 1회전 후 가장 큰 요소가 맨 뒤로 정렬되기 때문에 1회전할때 마다 정렬이 필요한 데이터가 1개씩 줄어듦.
 
![bubbleSort](https://github.com/wongee93/sorting_bars/assets/107908373/03ac83af-85e9-4263-a67c-c5774a6b9f50)

### Merge Sort
- 요소들을 분할할 수 없을 때 까지 같은 크기의 배열로 반복적으로 2분할하여 정렬한 뒤 이후에 다시 병합하여 정렬하는 방식의 알고리즘입니다.

![mergeSort](https://github.com/wongee93/sorting_bars/assets/107908373/7dc74b6c-2326-42ae-af5b-aecde670297e)
