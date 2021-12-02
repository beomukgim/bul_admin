import dayjs from 'dayjs'

let date = dayjs('2019-03-01T18:00:00+09:00')

date = date
	.set('year', 2020) // 연도를 2020으로 변경
	.set('month', 10) // 월을 11월로 변경
	.set('date', 11) // 일을 11일로 변경
console.log(date.format('YYYY년 MM월 DD일')) // '2020년 11일 11일'

date = date
	.subtract(1, 'year') // 연도 1년 빼기
	.add(1, 'month') // 월 1개월 더하기
	.add(1, 'date') // 일 1일 더하기
console.log(date.format('YYYY년 MM월 DD일')) // '2019년 12일 12일'
