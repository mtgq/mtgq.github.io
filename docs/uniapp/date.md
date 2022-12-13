# data中使用默认日期

```javascript
<script>
	export default {
		data() {
			const d = new Date()
			const year = d.getFullYear()
			let month = d.getMonth() + 1
			month = month < 10 ? `0${month}` : month
			const date = d.getDate()
			return {
				date: `${year}-${month}-${date}`,
			}
		},
		methods: {},
	}
</script>
```
